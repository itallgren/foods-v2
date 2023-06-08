const Food = require("../models/foodModel");

const getAllFoods = async () => {
  const foods = await Food.find({}).select("-createdAt -updatedAt -__v");
  return foods;
}

const getFoodById = async (id) => {
  const food = await Food.findById(id).select("-createdAt -updatedAt -__v");
  return food;
}

const createNewFood = async (newFood) => {
  const result = Food.create(newFood);
  return result;
}

const updateFood = async (id, updatedFood) => {
  const result = Food.findByIdAndUpdate(id, updatedFood, { new: true });
  return result;
}

const deleteFood = async (id) => {
  const result = await Food.findByIdAndDelete(id);
  return result;
}

module.exports = {
  getAllFoods,
  createNewFood,
  getFoodById,
  updateFood,
  deleteFood
}