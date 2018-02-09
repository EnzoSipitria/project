using Sauron.Services.App_Start;
using Sauron.Services.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Sauron.Services.Controllers {

    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class CargasController : ApiController {
        // .. /api/Cargas/All 
        [HttpGet]
        public List<CargaModel> All() {
            DataSet data = SQLConnector.CreateQuery("SELECT * FROM carga");
            List<CargaModel> cargas = new List<CargaModel>();

            for (int i = 0; i < data.Tables[0].Rows.Count; i++) {
                CargaModel carga = CargaModel.Map(data.Tables[0].Rows[i]);
                cargas.Add(carga);
            }
            
            return cargas;

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

            carga.Insert().Execute();
            response.Content = new StringContent("Created carga: " + carga.ID);
            return response;
        }
    }
}
