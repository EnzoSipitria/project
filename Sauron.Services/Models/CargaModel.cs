using Sauron.Services.App_Start;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Sauron.Services.Models {

    public class CargaModel : Model {

        public int ID { get; set; }
        public CamionModel Camion{ get; set; }
        public string Anden { get; set; }
        public DateTime? LlegadaRDC { get; set; }
        public DateTime? Enrampe { get; set; }
        public DateTime? EmpiezaCarga { get; set; }
        public DateTime? TerminaCarga { get; set; }
        public DateTime? InitFacturacion { get; set; }
        public DateTime? EndFacturacion { get; set; }
        public DateTime? SalidaRDC { get; set; }
        public DateTime? LlegadaDeposito { get; set; }

      
        public override Model Map(DataRow row) {
            object[] rowData = row.ItemArray;
            int idCamion = (int)rowData[1];

            DataRow data = SQLConnector.CreateQuerySingle("SELECT * FROM camion WHERE id = " + idCamion);

            CamionModel camion = new CamionModel().Map(data) as CamionModel;

            CargaModel carga = new CargaModel() {
                ID = (int)rowData[0],
                Camion = camion,
                Anden = rowData[2].ToString(),
                LlegadaRDC = rowData[3] as DateTime?,
                Enrampe = rowData[4] as DateTime?,
                EmpiezaCarga = rowData[5] as DateTime?,
                TerminaCarga = rowData[6] as DateTime?,
                InitFacturacion = rowData[7] as DateTime?,
                EndFacturacion = rowData[8] as DateTime?,
                SalidaRDC = rowData[9] as DateTime?,
                LlegadaDeposito = rowData[10] as DateTime?,
            };

            return carga;
        }

        public override SQLQuery Insert() {
            string query = "INSERT INTO carga VALUES(@id , @id_camion, @anden, @llegadaRdc, @enrampe, @empiezaCarga, @terminaCarga, @initFacturacion, @endFacturacion, @salidaRdc, @llegadaDeposito)";
            SQLQuery sql = new SQLQuery(query);

            sql.AddParam("@id", ID);
            sql.AddParam("@id_camion", Camion.ID);
            sql.AddParam("@anden", Anden);
            sql.AddParam("@llegadaRdc", LlegadaRDC);
            sql.AddParam("@enrampe", Enrampe);
            sql.AddParam("@empiezaCarga", EmpiezaCarga);
            sql.AddParam("@terminaCarga", TerminaCarga);
            sql.AddParam("@initFacturacion", InitFacturacion);
            sql.AddParam("@endFacturacion", EndFacturacion);
            sql.AddParam("@salidaRdc", SalidaRDC);
            sql.AddParam("@llegadaDeposito", LlegadaDeposito);

            return sql;
        }

    }
}