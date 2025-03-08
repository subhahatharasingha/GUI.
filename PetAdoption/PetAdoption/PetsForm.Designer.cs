namespace PetAdoption
{
    partial class PetsForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(PetsForm));
            panel4 = new Panel();
            signoutbtn = new Button();
            userbtn = new Button();
            petbtn = new Button();
            pictureBox1 = new PictureBox();
            panel1 = new Panel();
            label1 = new Label();
            pictureBox2 = new PictureBox();
            panel4.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).BeginInit();
            panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBox2).BeginInit();
            SuspendLayout();
            // 
            // panel4
            // 
            panel4.BackColor = Color.DarkOrange;
            panel4.Controls.Add(signoutbtn);
            panel4.Controls.Add(userbtn);
            panel4.Controls.Add(petbtn);
            panel4.Location = new Point(2, 121);
            panel4.Name = "panel4";
            panel4.Size = new Size(215, 396);
            panel4.TabIndex = 1;
            panel4.Paint += panel2_Paint;
            // 
            // signoutbtn
            // 
            signoutbtn.Font = new Font("Segoe UI", 10.8F, FontStyle.Bold, GraphicsUnit.Point, 0);
            signoutbtn.Location = new Point(50, 212);
            signoutbtn.Name = "signoutbtn";
            signoutbtn.Size = new Size(94, 34);
            signoutbtn.TabIndex = 5;
            signoutbtn.Text = "Log out";
            signoutbtn.UseVisualStyleBackColor = true;
            signoutbtn.Click += signoutbtn_Click;
            // 
            // userbtn
            // 
            userbtn.Font = new Font("Segoe UI", 10.8F, FontStyle.Bold, GraphicsUnit.Point, 0);
            userbtn.Location = new Point(50, 148);
            userbtn.Name = "userbtn";
            userbtn.Size = new Size(94, 34);
            userbtn.TabIndex = 4;
            userbtn.Text = "Users";
            userbtn.UseVisualStyleBackColor = true;
            userbtn.Click += button2_Click;
            // 
            // petbtn
            // 
            petbtn.Font = new Font("Segoe UI", 10.8F, FontStyle.Bold, GraphicsUnit.Point, 0);
            petbtn.ForeColor = SystemColors.Desktop;
            petbtn.Location = new Point(50, 73);
            petbtn.Name = "petbtn";
            petbtn.Size = new Size(94, 38);
            petbtn.TabIndex = 0;
            petbtn.Text = "Pets";
            petbtn.UseVisualStyleBackColor = true;
            petbtn.Click += petbtn_Click;
            // 
            // pictureBox1
            // 
            pictureBox1.Image = (Image)resources.GetObject("pictureBox1.Image");
            pictureBox1.Location = new Point(223, 111);
            pictureBox1.Name = "pictureBox1";
            pictureBox1.Size = new Size(799, 406);
            pictureBox1.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBox1.TabIndex = 3;
            pictureBox1.TabStop = false;
            pictureBox1.Click += pictureBox1_Click;
            // 
            // panel1
            // 
            panel1.BackColor = SystemColors.Info;
            panel1.Controls.Add(label1);
            panel1.Controls.Add(pictureBox2);
            panel1.Location = new Point(12, 12);
            panel1.Name = "panel1";
            panel1.Size = new Size(1010, 103);
            panel1.TabIndex = 4;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.BackColor = Color.Orange;
            label1.Font = new Font("Modern No. 20", 13.7999992F, FontStyle.Bold, GraphicsUnit.Point, 0);
            label1.Location = new Point(139, 31);
            label1.Margin = new Padding(4, 0, 3, 0);
            label1.Name = "label1";
            label1.Size = new Size(205, 25);
            label1.TabIndex = 1;
            label1.Text = "Pet Addoption App";
            label1.Click += label1_Click;
            // 
            // pictureBox2
            // 
            pictureBox2.Image = (Image)resources.GetObject("pictureBox2.Image");
            pictureBox2.Location = new Point(3, 5);
            pictureBox2.Name = "pictureBox2";
            pictureBox2.Size = new Size(113, 95);
            pictureBox2.SizeMode = PictureBoxSizeMode.StretchImage;
            pictureBox2.TabIndex = 0;
            pictureBox2.TabStop = false;
            // 
            // PetsForm
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1034, 529);
            Controls.Add(panel1);
            Controls.Add(pictureBox1);
            Controls.Add(panel4);
            Name = "PetsForm";
            Text = "PetsForm";
            panel4.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)pictureBox1).EndInit();
            panel1.ResumeLayout(false);
            panel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBox2).EndInit();
            ResumeLayout(false);
        }

        #endregion
        private Panel panel4;
        private PictureBox pictureBox1;
        private Button signoutbtn;
        private Button userbtn;
        private Button petbtn;
        private Panel panel1;
        private Label label1;
        private PictureBox pictureBox2;
    }
}