using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Sauron.Services.App_Start {
    public class SQLQuery {

        private string query;
        private Dictionary<string, object> queryParams;

        public SQLQuery(string query) {
            this.query = query;
            queryParams = new Dictionary<string, object>();
        }

        public void AddParam(string param, object value) {
            queryParams.Add(param, value == null ? DBNull.Value : value);
        }

        public void Execute() {
            SqlCommand cmd = new SqlCommand(query);

            foreach (var param in queryParams) {
                cmd.Parameters.AddWithValue(param.Key, param.Value);
            }

            SQLConnector.Query(cmd);
        }

        
    }
}