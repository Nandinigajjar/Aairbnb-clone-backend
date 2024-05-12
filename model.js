const mongoose = require('mongoose');

const FeatureSchema = new mongoose.Schema({
    title: String,
    description: String,
})
const ActivitySchema = new mongoose.Schema({
    description: String,
})

const DestinationsSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    image: {
        required: true,
        type: String
    },
    place: {
        required: true,
        type: String
    },
    author_name: {
        required: true,
        type: String
    },
    author_description: {
        required: true,
        type: String
    },
    author_image: {
        required: true,
        type: String
    },
    features: [FeatureSchema],
    description: {
        required: true,
        type: String
    },
    activities_description: {
        required: true,
        type: String
    },
    activities: [ActivitySchema],
    closes_on: {
        required: true,
        type: Date
    },
})

module.exports = mongoose.model('Destinations', DestinationsSchema)
