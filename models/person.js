const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   age: {
      type: Number,
      required: true
   },
   male: {
      type: Boolean,
      required: true
   }
});

module.exports = mongoose.model('Person', personSchema);