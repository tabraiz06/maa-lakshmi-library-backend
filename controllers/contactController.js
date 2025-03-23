const Contact = require('../models/contact')
const newContact = async (req,res)=>{
    const {name,email,phone,message} = req.body
    try {
        const contact = new Contact({
            name,
            email,
            phone,
            message
        })
     await  contact.save()
        return res.status(201).json({message:"Message sent successfully"})
    } catch (error) {
        console.error("❌ Server Error:", error);
        return res
          .status(500)
          .json({ error: error.message || "Internal Server Error" });
    }
}

// get all contacts
const getContacts = async (req,res)=>{
    try {
        const contacts = await Contact.find()
        return res.status(200).json(contacts)
    } catch (error) {
        console.error("❌ Server Error:", error);
        return res
          .status(500)
          .json({ error: error.message || "Internal Server Error" });
    }
}

// delete contact
const deleteContact = async (req,res)=>{
    const {id} = req.params
    try {
        const contact = await Contact.findByIdAndDelete(id)
        return res.status(200).json({message:"Contact deleted successfully"})
    } catch (error) {
        console.error("❌ Server Error:", error);
        return res
          .status(500)
          .json({ error: error.message || "Internal Server Error" });
    }
}
module.exports = {newContact,getContacts,deleteContact}