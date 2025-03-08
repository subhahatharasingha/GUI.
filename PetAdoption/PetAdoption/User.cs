using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace PetAdoption
{
    public partial class User : Form
    {
        public User()
        {
            InitializeComponent();
        }

        private void btnInsert_Click(object sender, EventArgs e)
        {
            if (!ValidateInput(out int userid, out string username, out string email, out int phone, out string address))
                return;

            string query = "INSERT INTO Users (UserID, UserName, Email, Phone, Address) VALUES (@UserID, @UserName, @Email, @Phone, @Address)";
            ExecuteQuery(query, userid, username, email, phone, address, "Record Inserted Successfully");
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            if (!int.TryParse(textBox1.Text, out int userid))
            {
                MessageBox.Show("Please enter a valid user ID.", "Input Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            string query = "DELETE FROM Users WHERE UserID = @UserID";
            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@UserID", userid);
                    cmd.ExecuteNonQuery();
                }
            }
            MessageBox.Show("Record Deleted Successfully");
            UserData();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (!int.TryParse(textBox1.Text, out int userid))
            {
                MessageBox.Show("Please enter a valid user ID.", "Input Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            string query = "DELETE FROM Users WHERE UserID = @UserID";
            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@UserID", userid);
                    cmd.ExecuteNonQuery();
                }
            }
            MessageBox.Show("Record Deleted Successfully");
            UserData();
        }

        private void UserData()
        {
            string query = "SELECT * FROM Users";
            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                using (MySqlDataAdapter adapter = new MySqlDataAdapter(cmd))
                {
                    DataTable dataTable = new DataTable();
                    adapter.Fill(dataTable);
                    dataGridView1.DataSource = dataTable;
                }
            }
        }

        private bool ValidateInput(out int userid, out string username, out string email, out int phone, out string address)
        {
            userid = 0;
            phone = 0;
            username = textBox2.Text.Trim();
            email = textBox3.Text.Trim();
            address = textBox5.Text.Trim();

            if (!int.TryParse(textBox1.Text, out userid))
            {
                MessageBox.Show("Please enter a valid User ID.", "Input Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return false;
            }
            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(email) || string.IsNullOrWhiteSpace(address))
            {
                MessageBox.Show("All fields must be filled.", "Input Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return false;
            }
            if (!int.TryParse(textBox4.Text, out phone))
            {
                MessageBox.Show("Please enter a valid Phone No.", "Input Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return false;
            }
            return true;
        }

        private void ExecuteQuery(string query, int userid, string username, string email, int phone, string address, string successMessage)
        {
            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@UserID", userid);
                    cmd.Parameters.AddWithValue("@UserName", username);
                    cmd.Parameters.AddWithValue("@Email", email);
                    cmd.Parameters.AddWithValue("@Phone", phone);
                    cmd.Parameters.AddWithValue("@Address", address);
                    cmd.ExecuteNonQuery();
                }
            }
            MessageBox.Show(successMessage);
            UserData();
        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            PetsForm dashboard = new PetsForm();
            dashboard.Show();
            this.Hide();
        }

        private void btnNew_Click(object sender, EventArgs e)
        {
            textBox1.Text = "";
            textBox2.Text = "";
            textBox3.Text = "";
            textBox4.Text = "";
            textBox5.Text = "";
        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            PetsForm dashboard = new PetsForm();
            dashboard.Show();
            this.Hide();
        }

        private void btnNew_Click_1(object sender, EventArgs e)
        {
            textBox1.Text = "";
            textBox2.Text = "";
            textBox3.Text = "";
            textBox4.Text = "";
            textBox5.Text = "";
        }

        private void btnUpdate_Click(object sender, EventArgs e)
        {
            if (!ValidateInput(out int userid, out string username, out string email, out int phone, out string address))
                return;

            string query = "UPDATE Users SET UserName=@UserName, Email=@Email, Phone=@Phone, Address=@Address WHERE UserID=@UserID";
            ExecuteQuery(query, userid, username, email, phone, address, "Record Updated Successfully");
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }
    }
}
