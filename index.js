 const express = require("express");
 const app = express();
 const bodyParser = require("body-parser");
 const mysql = require("mysql2");
 const cors = require("cors");//cors is used to access the backend api with our react frontend
const { reset } = require("nodemon");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Bunny@05",
    database:"internship",
});

 app.use(cors());
 app.use(express.json());
 app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req,res) =>{
    const sqlGet = "SELECT * from contact_db";
    db.query(sqlGet,(error,result) =>{
        res.send(result);
    });
});

app.post("/api/post",(req,res) =>{
    const {name,email,contact} = req.body;



    const sqlInsert = 
        "INSERT INTO contact_db (name,email,contact) VALUES (?,?,?)";
        db.query(sqlInsert, [name,email,contact], (error,result) => {
            if(error){
                console.log(error);
            }
        });  
});

app.delete("/api/remove/:id",(req,res) =>{
    const {id} = req.params;
    const sqlRemove = 
        "DELETE FROM contact_db WHERE id= ?";           
        db.query(sqlRemove, id, (error,result) => {
            if(error){
                console.log(error);
            }
        });  
});
app.get("/api/get:id", (req,res) =>{
    const {id} = req.params;
    const sqlGet = "SELECT * from contact_db where id= ?";
    db.query(sqlGet,id ,(error,result) =>{
        if(error){
            console.log(error); 
        }
        res.send(result);
    });
});

app.put("/api/update:id", (req,res) =>{
    const {id} = req.params;
    const {name,email,contact} = req.body;
    const sqlUpdate = "UPDATE contact_db SET name = ? , email=? , contact =? WHERE id =?"
    db.query(sqlUpdate,[name,email,contact,id] ,(error,result) =>{
        if(error){
            console.log(error); 
        }
        res.send(result);
    });
});


app.get('/',(req,res) =>{
    // const sqlInsert =  "INSERT INTO contact_db (name,email,contact) VALUES ('rishi bethi','rishibethi123@gmail.com',972364863)";
    // db.query(sqlInsert, (error,result) => {
    //     console.log("error",error);
    //     console.log("result",result);
    //     res.send("Hello Express!");
    // });
    console.log("im rishi")
});

 app.listen(5000, () =>
 {
    console.log("Serer is running on port 5000");
 })