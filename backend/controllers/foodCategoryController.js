const { getAllFoodCategories, getFoodCategoryById, createNewFoodCategory, updateFoodCategory, deleteFoodCategory } = require("../managers/foodCategoryManager");

const getFoodCategories = async (req, res) => {
  try {
    const result = await getAllFoodCategories();
    res.status(200).json({ success: true, data: result});
  } catch (err) {
    res.status(400).json({ success: false, message: err})
  }
}

const getOneFoodCategory = async (req, res) => {
  try {
    const result = await getFoodCategoryById(req.params.id);
    res.status(200).json({ success: true, data: result});
  } catch (err) {
    res.status(400).json({ success: false, message: err})
  }
}

const addFoodCategory = async (req, res) => {
  const { name, prepTime, recipeUrl, category } = req.body;
  const newFoodCategory = { name, prepTime, recipeUrl, category };
  
  try {
    const result = await createNewFoodCategory(newFoodCategory);
    res.status(200).json({ success: true, data: result});
  } catch (err) {
    res.status(400).json({ success: false, message: err})
  }
}

const updateOneFoodCategory = async (req, res) => {
  const { name, prepTime, recipeUrl, category } = req.body;
  const updatedFoodCategory = { name, prepTime, recipeUrl, category };
  
  try {
    const result = await updateFoodCategory(req.params.id, updatedFoodCategory);
    res.status(200).json({ success: true, data: result});
  } catch (err) {
    res.status(404).json({ success: false, message: err})
  }
}


const deleteOneFoodCategory = async (req, res) => {
  try {
    const result = await deleteFoodCategory(req.params.id);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, message: err})
  }
}

const checkPass = (req, res, next) => {
  if (req.body.passCheck == "foodgenpass") {
    next();
  } else {
    res.status(401).json({ success: false, message: "Not authorized"});
  }
}

module.exports = {
  getFoodCategories,
  addFoodCategory,
  getOneFoodCategory,
  updateOneFoodCategory,
  deleteOneFoodCategory,
  checkPass
}