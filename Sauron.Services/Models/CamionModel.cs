using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using Sauron.Services.App_Start;

namespace Sauron.Services.Models {

    public class CamionModel : Model {

        public int ID { get; set; }
        public string Nombre { get; set; }
        public string Conductor { get; set; }
        

        public override Model Map(DataRow row) {

            object[] rowData = row.ItemArray;
            return new CamionModel() {
                ID = (int)rowData[0],
                Nombre = rowData[1].ToString(),
                Conductor = rowData[2].ToString()
            };
        }

        public override SQLQuery Insert() {
            string query = "INSERT INTO camion VALUES(@id , @nombre, @conductor)";
            SQLQuery sql = new SQLQuery(query);

            sql.AddParam("@id", ID);
            sql.AddParam("@nombre", Nombre);
            sql.AddParam("@conductor", Conductor);

            return sql;
        }

        public override SQLQuery Update() {
            throw new NotImplementedException();
        }
    }
}