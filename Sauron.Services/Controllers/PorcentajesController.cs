using Sauron.Services.App_Start;
using Sauron.Services.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Sauron.Services.Controllers
{
    public class PorcentajesController : ApiController
    {

        [HttpGet]
        public List<PorcentajeModel> All() {
            SqlCommand query = new SqlCommand("SELECT * FROM porcentaje");
            return SQLConnector.GetListFromQuery<PorcentajeModel>(query);
        }

        [HttpPost]
        public HttpResponseMessage Create([FromBody] PorcentajeModel porcentaje) {
            var response = new HttpResponseMessage(HttpStatusCode.OK);

            bool success = porcentaje.Insert().Execute();

            if (success) {
                response.Content = new StringContent("Created porcentaje de la carga: " + porcentaje.IDCarga);

                //using (var ws = new WebSocket("ws://localhost:51907/api/cargas/subscribeNew")) {
                //    ws.Connect();
                //    ws.Send(JsonConvert.SerializeObject(added, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }));
                //}
            }
            else response.Content = new StringContent("There was an error creating porcentaje.");

            return response;
        }

        [HttpPut]
        public HttpResponseMessage Update([FromBody] PorcentajeModel porcentaje) {
            var response = new HttpResponseMessage(HttpStatusCode.OK);

            bool success = porcentaje.Update().Execute();

            if (success) {
                response.Content = new StringContent("Porcentaje de carga " + porcentaje.IDCarga + " updated successfully");

                //using (var ws = new WebSocket("ws://localhost:51907/api/cargas/subscribeUpdates")) {
                //    ws.Connect();
                //    ws.Send(JsonConvert.SerializeObject(porcentaje, new JsonSerializerSettings { ContractResolver = new CamelCasePropertyNamesContractResolver() }));
                //}
            }
            else response.Content = new StringContent("There was an error updating porcentaje.");

            return response;
        }


    }
}
