const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const cors=require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const appRoute=require('./src/routes/route-karyawan');
app.use('/',appRoute)

app.listen(4000,()=>{
    console.log("Running Server Port 4000");
});