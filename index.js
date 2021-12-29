//Import the mongoose module
//require("dotenv").//config();
const express = require("express");
const mongoose = require("mongoose");
const Profile = require("./models/profile");

const app = express();

//connect to mondodb
const dbURL =
  "mongodb+srv://mooh:consolidated123@cluster0.rkhb6.mongodb.net/Persons?retryWrites=true&w=majority";
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// //creating and saving a single item
app.get("/add-person", (req, res) => {
  const profile = new Profile({
    name: "Seyi Shey",
    age: "19",
    favoriteFoods: ["rice", "Eggs", "Salad"],
  });
  console.log(profile);
  profile
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// //creating and saving multiple records
app.get("/many-user", (req, res) => {
  const manyUser = Profile.create([
    {
      name: "Tobi",
      age: "40",
      favoriteFoods: ["beans", "Potatoes", "Salad"],
    },
    {
      name: "Musa",
      age: "5",
      favoriteFoods: ["Rice", "Orange", "Carrot"],
    },
    {
      name: "Duncan",
      age: "34",
      favoriteFoods: ["Puree", "Tomatoes", "Egss"],
    },
  ])
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("error");
    });
});

// //search db for all users
app.get("/all-person", (req, res) => {
  Profile.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("error");
    });
});

// //searching db by id
app.get("/search-by-id", (req, res) => {
  Profile.findById("61cc2cec8c2db84d8e654a77")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("error");
    });
});

app.get("/search/:name", (req, res) => {
  const name = req.params.name;
  Profile.find(name)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("error");
    });
});
