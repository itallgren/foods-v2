const express = require("express");

const { getFoods, addFood, getOneFood, getOneRandomFood, updateOneFood, deleteOneFood, checkPass } = require("../controllers/foodController"); 

const router = express.Router();

router.get("/", getFoods);
router.get("/random", getOneRandomFood);
router.get("/:id", getOneFood);
router.post("/", checkPass, addFood);
router.patch("/:id", updateOneFood);
router.delete("/:id", deleteOneFood);


module.exports = router;