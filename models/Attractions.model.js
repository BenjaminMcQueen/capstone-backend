const mongoose = require('mongoose'); //funny database module

const attractionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    website: { type: String },
    imageURL: {type: String},
    address: {type: String, required: true},
    city: { type: String, required: true, default: "Cincinnati"},
    state: { type: String, required: true, default: "Ohio"},
    zipcode: { type: String, required: true}, //I don't expect to use this for any calculations, so String.
    indoors: { type: Boolean },
    childFriendly: { type: Boolean },
    lat: { type: Number },
    lng: { type: Number }
});

const Attraction = mongoose.model("Attraction", attractionSchema);
module.exports = Attraction;