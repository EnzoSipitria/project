using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Web;

namespace Sauron.Services.App_Start {
    public static class SQLConnector {

        private static SqlConnectionStringBuilder GetConnectionBuilder() {
            return new SqlConnectionStringBuilder() {
                DataSource = SQL.Server,
                UserID = SQL.User,
                Password = SQL.Password,
                InitialCatalog = SQL.Database
            };
        }

        public static void CreateQuery(string sqlQuery) {

            SqlConnectionStringBuilder builder = GetConnectionBuilder();

            try {
                using (SqlConnection connection = new SqlConnection(builder.ConnectionString)) {
                    connection.Open();
                    connection.BeginTransaction();
                    StringBuilder sb = new StringBuilder();
                    sb.Append("SELECT * FROM carga");
                    String sql = sb.ToString();

                    using (SqlCommand command = new SqlCommand(sql, connection)) {
                        using (SqlDataReader reader = command.ExecuteReader()) {

                            while (reader.Read()) {
                                string s = String.Format("{0} - {1}", reader.GetInt32(0), reader.GetString(2));

                            }
                        }
                    }
                    
                }
            }
            catch (SqlException e) {
                Console.WriteLine(e.ToString());
            }
        }

    }
}