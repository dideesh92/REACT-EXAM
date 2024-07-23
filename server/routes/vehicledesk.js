const express = require("express");
const router = express.Router();
const vehicle=require('../models/vehicles')
const veryfyTocken=require('../middleware/authMiddleware')


router.get("/vehicles", veryfyTocken,async (req, res) => {
  const details = await vehicle.find({});
  res.json(details);
});

router.post("/addvehicles",veryfyTocken, async (req, res) => {
  console
    try {
      const data = req.body;
      const result =await vehicle.create(data);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json();
    }
  });

  

  module.exports=router
