const express=require('express');
const router=express.Router();

const {newContact,getContacts,deleteContact}=require('../controllers/contactController');
router.post('/contact',newContact);
router.get('/contact',getContacts);
router.delete('/contact/:id',deleteContact);// router.get('/contact/:id',getContact);
// router.put('/contact/:id',updateContact);
module.exports=router;