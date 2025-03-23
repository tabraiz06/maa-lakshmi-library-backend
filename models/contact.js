const mongoose = require('mongoose')
const contactSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
})
//model
const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact