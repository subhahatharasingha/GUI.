using MySql.Data.MySqlClient;
using System;
using System.Data;
using System.Windows.Forms;

namespace PetAdoption
{
    public partial class Dashboard : Form
    {
        public Dashboard()
        {
            InitializeComponent();
        }

        private void btnInsert_Click(object sender, EventArgs e)
        {
            if (!ValidateInput(out int petid, out string petname, out string catogary, out int age, out string details))
                return;

            string query = "INSERT INTO Mypet (PetID, PetName, Catogary, Age, Details) VALUES (@PetID, @PetName, @Category, @Age, @Details)";
            ExecuteQuery(query, petid, petname, catogary, age, details, "Record Inserted Successfully");
        }

        private void btnUpdate_Click(object sender, EventArgs e)
        {
            if (!ValidateInput(out int petid, out string petname, out string catogary, out int age, out string details))
                return;

            string query = "UPDATE Mypet SET PetName=@PetName, Catogary=@Category, Age=@Age, Details=@Details WHERE PetID=@PetID";
            ExecuteQuery(query, petid, petname, catogary, age, details, "Record Updated Successfully");
        }

        private void button3_Click(object sender, EventArgs e)
        {
            if (!int.TryParse(textBox1.Text, out int petid))
            {
                MessageBox.Show("Please enter a valid Pet ID.", "Input Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            string query = "DELETE FROM Mypet WHERE PetID = @PetID";
            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@PetID", petid);
                    cmd.ExecuteNonQuery();
                }
            }
            MessageBox.Show("Record Deleted Successfully");
            PetData();
        }

        private void PetData()
        {
            string query = "SELECT * FROM Mypet";
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

        private bool ValidateInput(out int petid, out string petname, out string catogary, out int age, out string details)
        {
            petid = 0;
            age = 0;
            petname = textBox2.Text.Trim();
            catogary = textBox3.Text.Trim();
            details = textBox5.Text.Trim();

            if (!int.TryParse(textBox1.Text, out petid))
            {
                MessageBox.Show("Please enter a valid Pet ID.", "Input Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return false;
            }
            if (string.IsNullOrWhiteSpace(petname) || string.IsNullOrWhiteSpace(catogary) || string.IsNullOrWhiteSpace(details))
            {
                MessageBox.Show("All fields must be filled.", "Input Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return false;
            }
            if (!int.TryParse(textBox4.Text, out age))
            {
                MessageBox.Show("Please enter a valid Age.", "Input Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return false;
            }
            return true;
        }

        private void ExecuteQuery(string query, int petid, string petname, string catogary, int age, string details, string successMessage)
        {
            using (MySqlConnection conn = new DatabaseConnection().GetConnection())
            {
                conn.Open();
                using (MySqlCommand cmd = new MySqlCommand(query, conn))
                {
                    cmd.Parameters.AddWithValue("@PetID", petid);
                    cmd.Parameters.AddWithValue("@PetName", petname);
                    cmd.Parameters.AddWithValue("@Category", catogary);
                    cmd.Parameters.AddWithValue("@Age", age);
                    cmd.Parameters.AddWithValue("@Details", details);
                    cmd.ExecuteNonQuery();
                }
            }
            MessageBox.Show(successMessage);
            PetData();
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

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void Dashboard_Load(object sender, EventArgs e)
        {

        }
    }
}
