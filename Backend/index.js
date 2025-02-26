import express from 'express';
import mysql from 'mysql';

const app = express();

const dbConfig ={
    host:'bsrxhgc8hf4hlfoh4epg-mysql.services.clever-cloud.com',
    user:'ugndffnxij11nnw1',
    password:'ugndffnxij11nnw1',
    database:'bsrxhgc8hf4hlfoh4epg',

};  

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
    if(err) {
        console.error('Error connecting to MySQL:',err.message);
    }
    else{
        console.log('connected to MySQL database!',);
    }

});

app.listen(5119,()=>{
    console.log('server is running on port 5119');

})

app.post('/about',(req,res) => {
    res.send('post');
})