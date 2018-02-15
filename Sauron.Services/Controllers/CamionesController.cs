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
    public class CamionesController : ApiController
    {


        // .. /api/Camiones/All 
        [HttpGet]
        public List<CamionModel> All() {
            SqlCommand query = new SqlCommand("SELECT * FROM camion");
            return SQLConnector.GetListFromQuery<CamionModel>(query);
        }

        // api/Camiones/create
        [HttpPost]
        public HttpResponseMessage Create([FromBody] CamionModel camion) {
            var response = new HttpResponseMessage(HttpStatusCode.OK);

            bool success = camion.Insert().Execute();

            if(success) response.Content = new StringContent("Created camion: " + camion.ID);
            else response.Content = new StringContent("There was an error creating camion");
            return response;
        }
    }
}
