using Microsoft.Web.WebSockets;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using WebSocketSharp;
using System.Web;
using System.Web.Http;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json.Linq;

namespace Sauron.Services.Controllers {
    public class SocketController : ApiController {

        [HttpGet]
        public HttpResponseMessage Subscribe() {
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

        public static void Send(object data, SocketType type) {
            using (var ws = new WebSocket("ws://localhost:51907/api/socket/subscribe")) {
                ws.Connect();
                JObject obj = JObject.FromObject(data, new JsonSerializer { ContractResolver = new CamelCasePropertyNamesContractResolver() });
                obj.Add("type", type.ToString());
                ws.Send(obj.ToString());
            }
        }
    }

    public enum SocketType {
        NEW_CARGA,
        UPDATE_CARGA
    }
}
