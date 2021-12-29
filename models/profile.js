const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//schema defines the structure od the doc to be stored in a collection. what model wraps around
//model surronds schema and provides the info

//this is where i created the person model and schema
const personSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: false,
    },
    favoriteFoods: [],
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", personSchema);

module.exports = Profile;
