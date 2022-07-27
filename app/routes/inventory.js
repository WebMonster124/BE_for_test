var express = require('express');
var router = express.Router();
const inventoris = require("../controllers/inventory.controller.js");

router.post("/", inventoris.create);
router.get("/", inventoris.findAll);
// router.get("/published", inventoris.findAllPublished);
// router.get("/:id", inventoris.findOne);
// router.put("/:id", inventoris.update);

// router.delete("/:id", inventoris.delete);
// router.delete("/", inventoris.deleteAll);

module.exports = router;