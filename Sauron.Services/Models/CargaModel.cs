﻿using Sauron.Services.App_Start;
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

            SqlCommand query = new SqlCommand("SELECT * FROM camion WHERE id = @camion");
            query.Parameters.Add(new SqlParameter("@camion", idCamion));

            DataRow data = SQLConnector.CreateQuerySingle(query);

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


        public override SQLQuery Update() {
            string query = "UPDATE carga SET anden = @anden, llegadaRdc = @llegadaRdc, enrampe = @enrampe, empiezaCarga = @empiezaCarga, terminaCarga = @terminaCarga, initFacturacion = @initFacturacion, endFacturacion = @endFacturacion, salidaRdc = @salidaRdc, llegadaDeposito = @llegadaDeposito WHERE id = @id";
            SQLQuery sql = new SQLQuery(query);

            UpdateProperties();

            sql.AddParam("@id", ID);
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

        private void UpdateProperties() {
            SqlCommand lastCargaQuery = new SqlCommand("SELECT * FROM carga WHERE id = @carga");
            lastCargaQuery.Parameters.Add(new SqlParameter("@carga", ID));
            CargaModel lastCarga = SQLConnector.FromQuery<CargaModel>(lastCargaQuery);

            SqlCommand camionQuery = new SqlCommand("SELECT * FROM camion WHERE id = @camion");
            camionQuery.Parameters.Add(new SqlParameter("@camion", lastCarga.Camion.ID));

            Camion = SQLConnector.FromQuery<CamionModel>(camionQuery);
            Anden = Anden ?? lastCarga.Anden;
            LlegadaRDC = LlegadaRDC ?? lastCarga.LlegadaRDC;
            Enrampe = Enrampe ?? lastCarga.Enrampe;
            EmpiezaCarga = EmpiezaCarga ?? lastCarga.EmpiezaCarga;
            TerminaCarga = TerminaCarga ?? lastCarga.TerminaCarga;
            InitFacturacion = InitFacturacion ?? lastCarga.InitFacturacion;
            EndFacturacion = EndFacturacion ?? lastCarga.EndFacturacion;
            SalidaRDC = SalidaRDC ?? lastCarga.SalidaRDC;
            LlegadaDeposito = LlegadaDeposito ?? lastCarga.LlegadaDeposito;
        }

    }
}