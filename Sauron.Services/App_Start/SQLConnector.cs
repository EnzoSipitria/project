using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
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

        public static void Query(SqlCommand command) {
            SqlConnectionStringBuilder builder = GetConnectionBuilder();

            try {
                using (SqlConnection connection = new SqlConnection(builder.ConnectionString)) {
                    connection.Open();

                    command.Connection = connection;
                    SqlDataReader reader = command.ExecuteReader(CommandBehavior.CloseConnection);
                    
                }
            }
            catch (SqlException e) {
                Console.WriteLine(e.ToString());
            }

        }

        public static DataSet CreateQuery(string sqlQuery) {

            SqlConnectionStringBuilder builder = GetConnectionBuilder();

            try {
                using (SqlConnection connection = new SqlConnection(builder.ConnectionString)) {
                    connection.Open();

                    SqlDataAdapter adapter = new SqlDataAdapter(sqlQuery, connection);
                    DataSet resultQuery = new DataSet();
                    adapter.Fill(resultQuery, "Query");

                    connection.Close();
                    return resultQuery;

                }
            }
            catch (SqlException e) {
                Console.WriteLine(e.ToString());
            }
            return null;
        }

        // Returns a single row
        public static DataRow CreateQuerySingle(string sqlQuery) {

            DataSet data = CreateQuery(sqlQuery);

            return data.Tables[0].Rows[0];
        }
    }
}