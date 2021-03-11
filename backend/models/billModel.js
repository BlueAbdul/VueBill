const mongoose = require('mongoose');

const billSchema = mongoose.Schema({
    billNumber: {type : String, required:true},
    date: {type : Date, required:true},
    description: String,
    client: Object,
    prestations: Array,
    discount: Number,
    paid: Number,
    tva: Boolean,
    tvaRate: Number
})

module.exports = mongoose.model('Bill', billSchema)