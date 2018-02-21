using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using Sauron.Services.App_Start;
using System.Data.SqlClient;
using Newtonsoft.Json;

namespace Sauron.Services.Models {
    public class PorcentajeModel : Model{

        [JsonIgnoreAttribute]
        public CargaModel Carga { get; set; }
        public int IDCarga { get; set; }
        public int? Full { get; set; }
        public int? Mix { get; set; }

        public override Model Map(DataRow row) {
            object[] rowData = row.ItemArray;

            SqlCommand lastCargaQuery = new SqlCommand("SELECT * FROM carga WHERE id = @carga");
            lastCargaQuery.Parameters.Add(new SqlParameter("@carga", rowData[0]));
            CargaModel carga = SQLConnector.FromQuery<CargaModel>(lastCargaQuery);

            return new PorcentajeModel() {
                Carga = carga,
                IDCarga = carga.ID,
                Full = (int)rowData[1],
                Mix = (int)rowData[2]
            };
        }

        public override SQLQuery Insert() {
            string query = "INSERT INTO porcentaje VALUES(@id_carga, @full, @mix)";
            SQLQuery sql = new SQLQuery(query);

            sql.AddParam("@id_carga", IDCarga);
            sql.AddParam("@full", Full);
            sql.AddParam("@mix", Mix);

            return sql;
        }

        public override SQLQuery Update() {
            string query = "UPDATE porcentaje SET id_carga = @id_carga, _full = @full, mix = @mix";
            SQLQuery sql = new SQLQuery(query);

            SqlCommand lastPorcentaje = new SqlCommand("SELECT * FROM porcentaje WHERE id_carga = @carga");
            lastPorcentaje.Parameters.Add(new SqlParameter("@carga", IDCarga));
            PorcentajeModel p = SQLConnector.FromQuery<PorcentajeModel>(lastPorcentaje);

            sql.AddParam("@id_carga", IDCarga);
            sql.AddParam("@full", Full ?? p.Full);
            sql.AddParam("@mix", Mix ?? p.Mix);

            return sql;
        }
    }
}