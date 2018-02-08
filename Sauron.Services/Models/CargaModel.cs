using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Sauron.Services.Models {

    public class CargaModel {

        public int ID { get; set; }
        public CamionModel Camion { get; set; }
        public string Anden { get; set; }
        public DateTime LlegadaRDC { get; set; }
        public DateTime Enrampe { get; set; }
        public DateTime EmpiezaCarga { get; set; }
        public DateTime TerminaCarga { get; set; }
        public DateTime InitFacturacion { get; set; }
        public DateTime EndFacturacion { get; set; }
        public DateTime SalidaRDC { get; set; }
        public DateTime LlegadaDeposito { get; set; }

        public static CargaModel ToJson(SqlDataReader reader) {
            return null;
        }
    }
}