const { model,Schema} =require('mongoose');

const vehicledesk = new Schema({
    servicenumber: { type: Number, required: true },
    vehiclenumber: { type: Number, required: true },
    vehicletype: { type: String, required: true },
    servicegivendate: { type: String, required: true },
    estimatedtimeofcompletion: { type: String, required: true },
    vehicleownername: { type:String, required: true },
    servicedetails: { type: String, required: true },
});

const courses = model('vehicles', vehicledesk);

module.exports = courses;

