const mongoose = require('mongoose')


const mapSchema = new mongoose.Schema( {
    dateTime: {
        type: Date,
    },
    longitude: {
        type: 'Number'
    },
    latitude: {
        type: 'Number'
    },
    magnitude: {
        type:'Number'
    },
    region: {
        type: 'String'
    }
} )

const Map = mongoose.model('Map', mapSchema)

module.exports = Map