const Attraction = require('../models/Attractions.model');
const ErrorHandler = require('./errorHandler');


module.exports.delete = async (req, res) => {
    Attraction.findByIdAndDelete(req.params.id)
        .then(() => res.send("Attraction deleted."))
        .catch(err => ErrorHandler.diagnoseAndRespond(err, res));
};

module.exports.getAll = async (req, res) => {
    Attraction.find()
    .then(attractions => res.json(attractions))
    .catch(err => ErrorHandler.diagnoseAndRespond(err, res));
}

module.exports.getById = async (req, res) => {
    Attraction.findById(req.params.id)
        .then(attraction => res.json(attraction))
        .catch(err => ErrorHandler.diagnoseAndRespond(err, res));
};

module.exports.post = async (req, res) => {
    try {
        const attraction = await Attraction.create(req.body);
        res.json(attraction);
        console.log("Attraction added:", attraction);
    }
    catch (err) {ErrorHandler.diagnoseAndRespond(err, res)}
};

module.exports.update = async (req, res) => {
    console.log(req.body);
    //I almost made it go through and individually change every value,
    //but this seemed better in general.
    Attraction.findById(req.params.id)
        .then(attraction => { 
            console.log(attraction);
            console.log(req);
            
            if(req.body.name) {attraction.name = req.body.name}
            if(req.body.description) {attraction.description = req.body.description}
            if(req.body.website) {attraction.website = req.body.website}
            if(req.body.imageURL) {attraction.imageURL = req.body.imageURL}
            if(req.body.address) {attraction.address = req.body.address}
            if(req.body.city) {attraction.city = req.body.city}
            if(req.body.state) {attraction.state = req.body.state}
            if(req.body.zipcode) {attraction.zipcode = req.body.zipcode}
            if(req.body.indoors !== undefined) {attraction.indoors = req.body.indoors}
            if(req.body.childFriendly !== undefined) {attraction.childFriendly = req.body.childFriendly}
            attraction.lat = req.body.lat;
            attraction.lng = req.body.lng;
            
            attraction.save()
                .then(() => {res.json("Attraction updated!");
                                console.log("Updated attraction: ", attraction)})
                .catch(err => ErrorHandler.diagnoseAndRespond(err, res));
         })
        .catch(err => ErrorHandler.diagnoseRequestAndRespond(err, req, res));
};