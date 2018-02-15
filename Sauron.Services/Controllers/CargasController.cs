using Microsoft.Web.WebSockets;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Sauron.Services.App_Start;
using Sauron.Services.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using WebSocketSharp;

namespace Sauron.Services.Controllers {

    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CargasController : ApiController {
        // .. /api/Cargas/All 
        [HttpGet]
        public List<CargaModel> All() {
            SqlCommand query = new SqlCommand("SELECT * FROM carga");
            return SQLConnector.GetListFromQuery<CargaModel>(query);
        }

        // .. /api/Cargas/Unfinished 
        [HttpGet]
        public List<CargaModel> Unfinished() {

            return null;
        }

        // api/Cargas/create
        [HttpPost]
        public HttpResponseMessage Create([FromBody] CargaModel carga) {
            var response = new HttpResponseMessage(HttpStatusCode.OK);

            bool success = carga.Insert().Execute();

            if (success) {
                SqlCommand query = new SqlCommand("SELECT * FROM carga WHERE id = @carga");
                query.Parameters.Add(new SqlParameter("@carga", carga.ID));
                CargaModel added = SQLConnector.FromQuery<CargaModel>(query);
                response.Content = new StringContent("Created carga: " + added.ID);

                using (var ws = new WebSocket("ws://localhost:51907/api/cargas/subscribeNew")) {
                    ws.Connect();
                    ws.Send(JsonConvert.SerializeObject(added, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }));
                }
            }
            else response.Content = new StringContent("There was an error creating carga.");

            return response;
        }

        // api/cargas/update
        [HttpPut]
        public HttpResponseMessage Update([FromBody] CargaModel carga) {
            var response = new HttpResponseMessage(HttpStatusCode.OK);

            bool success = carga.Update().Execute();

            if (success) {
                response.Content = new StringContent("Carga " + carga.ID + " updated successfully");

                using (var ws = new WebSocket("ws://localhost:51907/api/cargas/subscribeUpdates")) {
                    ws.Connect();
                    ws.Send(JsonConvert.SerializeObject(carga, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }));
                }
            }
            else response.Content = new StringContent("There was an error updating carga.");

            return response;
        }



        [HttpGet]
        public HttpResponseMessage SubscribeNew() {
            WebSocketHandler socket = new ChatWebSocketHandler();
            HttpContext.Current.AcceptWebSocketRequest(socket);
            return Request.CreateResponse(HttpStatusCode.SwitchingProtocols);
        }

        [HttpGet]
        public HttpResponseMessage SubscribeUpdates() {
            WebSocketHandler socket = new ChatWebSocketHandler();
            HttpContext.Current.AcceptWebSocketRequest(socket);
            return Request.CreateResponse(HttpStatusCode.SwitchingProtocols);
        }

        class ChatWebSocketHandler : WebSocketHandler {
            private static WebSocketCollection _chatClients = new WebSocketCollection();

            public override void OnOpen() {
                _chatClients.Add(this);
            }

            public override void OnMessage(string message) {
                _chatClients.Broadcast(message);
            }
        }

    }
}
