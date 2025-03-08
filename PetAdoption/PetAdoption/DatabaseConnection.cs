using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PetAdoption
{
    internal class DatabaseConnection
    {
        private MySqlConnection connection;

        public DatabaseConnection()
            { 
            string connectionString = "Server=localhost;Database=mypetdB;Uid=root;Pwd=Subanya123#;";
            connection = new MySqlConnection(connectionString); 
        }
        public MySqlConnection GetConnection()
        { return connection; }   
    }
}
