const {Sequelize}=require('sequelize');
require('dotenv').config();
const sequelize=new Sequelize("contacts","root",process.env.SQL_PASSWORD,{host:"localhost",dialect:"mysql"});
module.exports={sequelize};
