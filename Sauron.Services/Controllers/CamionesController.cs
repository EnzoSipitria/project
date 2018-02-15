using Sauron.Services.App_Start;
using Sauron.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Sauron.Services.Controllers
{
    public class CamionesController : ApiController
    {


        // .. /api/Camiones/All 
        [HttpGet]
        public List<CamionModel> All() {
            return SQLConnector.GetListFromQuery<CamionModel>("SELECT * FROM camion");
        }

        // api/Camiones/create
        [HttpPost]
        public HttpResponseMessage Create([FromBody] CamionModel camion) {
            var response = new HttpResponseMessage(HttpStatusCode.OK);


            camion.Insert().Execute();
            response.Content = new StringContent("Created camion: " + camion.ID);
            return response;
        }
    }
}
