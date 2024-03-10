const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const nodemailer = require("nodemailer");


// Assign Express Funtion to the app variable
const app = express();


// Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "W7301@jqir#",
    database: "dauloconstruction_api"
})

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Send Email
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
        user: "dauloconstruction@gmail.com",
        pass: "gncmhtrzyyskglbr"
    }
});

const sendEmail = (email, first_name, last_name, message_inquiry) => {
    const mailOptions = {
        from: 'DAULO CONSTRUCTION <dauloconstruction@gmail.com>',
        to: email,
        subject: "Message from Daulo Construction",
        html: `
            <div><h1>Hello</h1>
            <p>Dear: ${first_name} ${last_name}</p>
            <p>Your message: "${message_inquiry}", is still processing to submit our quotation on said request. Thank You.!
            </div>
        `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error occurred", error.message);
        }
    })
};



// Fetching all data
app.get('/home', (req, res) => {
    const q = "SELECT * FROM home";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get('/about', (req, res) => {
    const q = "SELECT * FROM about";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get('/projects', (req, res) => {
    const q = "SELECT * FROM projects";
    db.query(q, (err, data) => {
        if (err) return res.json({ message: "An error occured" });
        return res.json(data);
    })
})

app.get('/services', (req, res) => {
    const q = "SELECT * FROM services";
    db.query(q, (err, data) => {
        if (err) return res.json({ message: "An error occured" });
        return res.json(data);
    })
})

app.get('/clients_section', (req, res) => {
    const q = "SELECT * FROM clients_section";
    db.query(q, (err, data) => {
        if (err) return res.json({ message: "An error occured" });

        return res.json(data);
    })
})

app.get('/icon', (req, res) => {
    const q = "SELECT * FROM icon";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})



//Posting Submit Inquiry
app.post("/inquiry", async (req, res) => {
    const qInsert = "INSERT INTO inquiry (`first_name`, `last_name`, `contact_number`, `email`, `address`, `message_inquiry`) VALUES (?,?,?,?,?,?)";

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const contact_number = req.body.contact_number;
    const email = req.body.email;
    const address = req.body.address;
    const message_inquiry = req.body.message_inquiry;

    db.query(qInsert, [first_name, last_name, contact_number, email, address, message_inquiry], (err, data) => {
        console.log(err);
        if (err) return res.json({ message: "An error occured" });
        
        sendEmail(email, first_name, last_name, message_inquiry);
        console.log(data.email);

        return res.json({ message: "Thank you for sending us a message." })
    })
})



// Listener
app.listen(8000, () => {
    console.log("Server is running on port 8000")
})





















































































































