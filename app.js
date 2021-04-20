const express=require('express');
const cors=require('cors');
const fileUpload = require('express-fileupload');
const bodyparser=require('body-parser');
const routes=require('./routers/index')
const mongoose=require('mongoose')
const app=express();
const host='0.0.0.0';
const port=process.env.PORT||2022;

app.use(cors());

app.use(fileUpload());

app.use(express.static('public'))

app.use(bodyparser.json());



app.use('/', routes)

mongoose.connect('mongodb+srv://BujalaSarathKumarReddy:12345abcd@cluster0.nud0w.mongodb.net/ApplicationForm?retryWrites=true&w=majority',{ useNewUrlParser: true ,useUnifiedTopology: true }, ()=>{
    app.listen(port,host,()=>{
        console.log(`Server is running at ${host} : ${port}`)
    
});
});





