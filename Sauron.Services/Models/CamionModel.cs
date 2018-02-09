using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Sauron.Services.Models {

    public class CamionModel {

        public int ID { get; set; }
        public string Nombre { get; set; }
        public string Conductor { get; set; }

        public static CamionModel Map(DataRow row) {

            object[] rowData = row.ItemArray;
            return new CamionModel() {
                ID = (int)rowData[0],
                Nombre = rowData[1].ToString(),
                Conductor = rowData[2].ToString()
            };
        }
    }
}