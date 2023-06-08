const FoodCategory = require("../models/foodCategoryModel");

const getAllFoodCategories = async () => {
  const foodCategories = await FoodCategory.find({}).select("-__v");
  return foodCategories;
}

const getFoodCategoryById = async (id) => {
  const foodCategory = await FoodCategory.findById(id).select("-__v");
  return foodCategory;
}

const createNewFoodCategory = async (newFoodCategory) => {
  const result = FoodCategory.create(newFoodCategory);
  return result;
}

const updateFoodCategory = async (id, updatedFoodCategory) => {
  const result = FoodCategory.findByIdAndUpdate(id, updatedFoodCategory, { new: true });
  return result;
}

const deleteFoodCategory = async (id) => {
  const result = await FoodCategory.findByIdAndDelete(id);
  return result;
}

module.exports = {
  getAllFoodCategories,
  createNewFoodCategory,
  getFoodCategoryById,
  updateFoodCategory,
  deleteFoodCategory
}