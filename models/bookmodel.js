const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { 
    type: String, 
    required: true },
  author: { 
    type: String, 
    required: true },
  link: { 
    type: String },
    description: {
      type: String
    },
    image: {
      type: String,
      required: true
    }

});

const Bookmodel = mongoose.model("Bookmodel", bookSchema);

module.exports = Bookmodel;
