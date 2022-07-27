var express = require('express');
var router = express.Router();
const cars = require("../controllers/car.controller.js");

router.post("/", cars.create);
router.get("/", cars.findAll);
// router.get("/published", cars.findAllPublished);
// router.get("/:id", cars.findOne);
router.put("/:id", cars.update);
router.delete("/:id", cars.delete);
// router.delete("/", cars.deleteAll);

module.exports = router;