const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.PORT||3000;
const contactRouter=require('./routes/Contact.route');
const sequelize = require('./Model/Contact.model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/crm',contactRouter);

sequelize.sync().then(()=>{
    console.log('Database is Online');
    app.listen(port,()=>{
        console.log(`server started at ${port}`);
    })
}).catch((err)=>{
    console.log('not able to connect',err);
})


