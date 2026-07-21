const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    duration: {
        type: String
    },

    fees: {
        type: Number
    },

    description: {
        type: String
    }

});

module.exports = mongoose.model("Course", courseSchema);