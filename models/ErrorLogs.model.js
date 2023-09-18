const mongoose = require('mongoose');

const errorLogSchema = new mongoose.Schema({
    error: { type: Object, required: true },
    reason: { type: Object }
},
    { timestamps: true }
);

errorLogSchema.pre('save', async function (next) {
    console.log('New error logged: ')
    console.log('---------------------------------------------');
    console.log(this.error);
    console.log('---------------------------------------------');
});

const ErrorLog = mongoose.model("ErrorLog", errorLogSchema);
module.exports = ErrorLog;