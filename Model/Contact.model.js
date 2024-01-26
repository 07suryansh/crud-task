const {DataTypes}=require('sequelize');
const {sequelize}=require('../Config/db')
const contact=sequelize.define("contact",{
    first_name:{type:DataTypes.STRING,allowNull:false},
    last_name:{type:DataTypes.STRING,allowNull:false},
    email:{type:DataTypes.STRING,allowNull:false},
    mobile_number:{type:DataTypes.STRING,allowNull:false},
})
module.exports=contact;