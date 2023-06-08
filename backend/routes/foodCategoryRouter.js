const express = require("express");

const { getFoodCategories, addFoodCategory, getOneFoodCategory, updateOneFoodCategory, deleteOneFoodCategory, checkPass } = require("../controllers/foodCategoryController"); 

const router = express.Router();

router.get("/", getFoodCategories);
router.get("/:id", getOneFoodCategory);
router.post("/", checkPass, addFoodCategory);
router.patch("/:id", updateOneFoodCategory);
router.delete("/:id", deleteOneFoodCategory);


module.exports = router;