"use strict";
const mongoose = require('../db/conn');
const { Schema } = mongoose;
const News = mongoose.model('News', new Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
}, { timestamps: true }));
module.exports = News;
