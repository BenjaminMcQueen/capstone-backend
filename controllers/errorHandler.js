const ErrorLog = require('../models/ErrorLogs.model');

function logError(err){
    try {
        const errorLog = ErrorLog.create({"error": err, "reason": err.reason || {}});
        console.log("Error Logged: ", errorLog);
    }
    catch (catErr) { console.log("Catastrophic Failure: ", error); }
}

//A big object to store error handling functions
const errorHandler = {
    diagnoseAndRespond: (err, res) => {
        logError(err);

        if (err.name == "CastError" && err.kind == "ObjectId" && err.path == "_id") {
            res.send("The ID of the requested attraction was not found.");
            return;
        }

        if (err._message === 'Attraction validation failed') {
            res.status(400).send(err.message);
            return;
        }

        console.log("Error handling not yet implimented");
        console.log("The error is as such:");
        console.log(err);
        res.status(400).send('Unknown error. \n' + err);
    },

    diagnoseRequestAndRespond: async (err, req, res) => {
        logError(err);

        if (err.name == "CastError" && err.kind == "ObjectId" && err.path == "_id") {
            res.send("The ID of the requested attraction was not found.");
            return;
        }

        console.log("Error handling not yet implimented");
    }
};

module.exports = errorHandler;
