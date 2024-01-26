const express=require('express');
const router=express.Router();
const {createContact}=require('../controller/Contact.controller')

router.post('/createContact',createContact);
// router.get('/getContact')
// router.put('/updateContact')
// router.delete('/deleteContact')

module.exports=router;