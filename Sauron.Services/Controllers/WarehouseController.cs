using Sauron.Services.App_Start;
using Sauron.Services.Models;
using Sauron.Services.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Sauron.Services.Controllers {
    public class WarehouseController : ApiController {

        private WarehouseRepository warehouses = new WarehouseRepository(10);


        /**************************/
        /*     GET               */
        /**************************/

        // .. /api/Warehouse/FirstWarehouseName 
        [HttpGet]
        public HttpResponseMessage FirstWarehouseName() {
            var warehouse = this.warehouses.All().FirstOrDefault();
            var name = warehouse == null ? "Empty" : warehouse.Name;
            var response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(name);
            return response;
        }

        // .. /api/Warehouse/byName?name=hola
        [HttpGet]
        public HttpResponseMessage ByName(string name) {
            var warehouse = this.warehouses.GetByName(name);
            var id = warehouse == null ? "Not Found" : "Name: " + name + " Id: " + warehouse.Id.ToString();
            var response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(id);
            return response;
        }

        // .. /api/Warehouse/byName?name=hola
        [HttpGet]
        public HttpResponseMessage ById(int id) {
            var warehouse = this.warehouses.GetById(id);
            var resp = warehouse == null ? "Not Found" : "Name: " + warehouse.Name + " Id: " + warehouse.Id;
            var response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent(resp);
            return response;
        }

        // .. /api/Warehouse/All
        [HttpGet]
        public IList<WarehouseModel> All() {

            SQLConnector.Query();
            // Console.ReadLine();


            return warehouses.All();
        }


        /**************************/
        /*     POST               */
        /**************************/

        // .. /api/Warehouse/id?name=hola
        [HttpPost]
        public HttpResponseMessage CreateFromUri(string name, int id) {
            var response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent("New warehouse was created: " + name + " - " + id);
            return response;
        }


        // ... /api/warehouse/CreateFromBody   [Body- Raw (JSON : {Name:'hola',Id:23} )]
        [HttpPost]
        public HttpResponseMessage CreateFromBody([FromBody] WarehouseModel warehouse) {
            var response = new HttpResponseMessage(HttpStatusCode.OK);
            response.Content = new StringContent("New warehouse was created: " + warehouse.Name + " - " + warehouse.Id);
            return response;
        }

    }
}
