const axios=require('axios');
const Contact=require('../Model/Contact.model')

const createContact= async (req,res)=>{
    const {first_name, last_name, email, mobile_number}=req.body;
    try{
        // const response = await axios.post(
        //     'https://domain.myfreshworks.com/crm/sales/api/contacts',
        //     {
        //         contact: {
        //             first_name,
        //             last_name,
        //             email,
        //             mobile_number,
        //         },
        //     },
        //     {
        //         headers: {
        //             Authorization: `Token token=${process.env.API_KEY}`,
        //             'Content-Type': 'application/json',
        //         },
        //     }
        // );


        // saving record in database
        const response=await Contact.create({first_name, last_name, email, mobile_number})
        return res.status(201).json(response.data);
    }
    catch(err){
        return res.status(400).json(err);
    }
}

const getContact=async (req,res)=>{
    const {id}=req.params;
    try{
        const response=await Contact.findByPk(id);
        if (!response) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        return res.status(200).json(response);
    }catch(err){
        return res.status(400).json(err);
    }
}

const updateContact=async (req,res)=>{
    const {id}=req.params;
    const { first_name, last_name, email, mobile_number } = req.body;
    try{
        const response=await Contact.findByPk(id);
        if (!response) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        if (first_name !== undefined) response.first_name = first_name;
        if (last_name !== undefined) response.last_name = last_name;
        if (email !== undefined) response.email = email;
        if (mobile_number !== undefined) response.mobile_number = mobile_number;

        // Update the contact with the provided fields
        const updatedContact = await response.save();
        return res.status(200).json(updatedContact);
    }catch(err){
        return res.status(400).json(err);
    }
}
const deleteContact=async (req,res)=>{
    const {id}=req.params;
    try{
        const response=await Contact.findByPk(id);
        if (!response) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        await response.destroy();
        return res.status(204).json('Contact deleted successfully');
    }catch(err){
        return res.status(400).json(err);
    }
}

module.exports={createContact,getContact,updateContact,deleteContact}