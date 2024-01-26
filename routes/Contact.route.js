const express=require('express');
const router=express.Router();
const {createContact,getContact,updateContact,deleteContact}=require('../controller/Contact.controller')

router.post('/createContact',createContact);
router.get('/getContact/:id',getContact)
router.put('/updateContact/:id',updateContact)
router.delete('/deleteContact/:id',deleteContact)

module.exports=router;