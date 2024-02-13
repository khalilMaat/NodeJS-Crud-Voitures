//import express
const express = require("express");
const router = express.Router();
//DataBase
let voitures = [
  { id: 1, name: "clio" },
  { id: 2, name: "megane" },
  { id: 3, name: "range" },
];

//Home Route
router.get("/", (req, res) => {
  res.send("<h1>Home Page Car</h1>");
});

//Get ALL Car
router.get("/all", (req, res) => {
  res.json(voitures);
});

//Add Car:
router.post("/add", (req, res) => {
  const c = {
    id: req.query.id,
    name: req.query.name,
  };
  voitures.push(c);

  res.json({ state: 200, message: "Car Added Successfully" });
});

//Find By ID
router.get("/find", (req, res) => {
  voitures.forEach((element) => {
    if (element.id == req.query.id) {
      res.json({ element });
    }
  });
  res.json({ state: 404, msg: "Not Found !!" });
});

//Delete By ID
router.get("/delete", (req, res) => {
  const deletedCar = voitures.find((x) => x.id == req.query.id);

  if (deletedCar != null) {
    voitures = voitures.filter((x) => x !== deletedCar);
    res.json({ car: voitures });
  } else {
    res.json({ state: 500, msg: "Error to Delete Car" });
  }
});

//Edit Car:
router.put("/edit", (req, res) => {
  const updatedCar = voitures.find((x) => x.id == req.query.id);
  if (updatedCar != null) {
    updatedCar.id = req.query.newId;
    updatedCar.name = req.query.newName;
    res.json({ updated: updatedCar });
  } else {
    res.json({ state: 500, msg: "Error to Update Car" });
  }
});

module.exports = router;
