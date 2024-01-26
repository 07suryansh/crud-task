const axios=require('axios');
const Contact=require('../Model/Contact.model')

const createContact= async (req,res)=>{
    const {first_name, last_name, email, mobile_number}=req.body;
    console.log('createContact running');
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
        console.log(response);

        return res.status(201).json(response.data);
    }
    catch(err){
        console.log(err);
        return res.status(400).json(err);
    }
}

const getContact=async (req,res)=>{
    console.log('getContact running');
    const {id}=req.params;
    try{
        const response=await Contact.findByPk(id);
        if (!response) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        return res.status(200).json(response);
    }catch(err){
        console.log(err);
        return res.status(400).json(err);
    }
}

module.exports={createContact,getContact}