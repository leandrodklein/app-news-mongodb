"use strict";
const mongoose = require('mongoose');
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/api-news');
    console.log('Conectou com Mongoose!');
}
main().catch((err) => console.log(err));
module.exports = mongoose;
