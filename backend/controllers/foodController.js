const { getAllFoods, getFoodById, createNewFood, updateFood, deleteFood} = require("../managers/foodManager");

const getFoods = async (req, res) => {
  try {
    const result = await getAllFoods();
    res.status(200).json({ success: true, data: result});
  } catch (err) {
    res.status(400).json({ success: false, message: err})
  }
}

const getOneFood = async (req, res) => {
  try {
    const result = await getFoodById(req.params.id);
    res.status(200).json({ success: true, data: result});
  } catch (err) {
    res.status(400).json({ success: false, message: err})
  }
}

const getOneRandomFood = async (req, res) => {
  try {
    const result = await getAllFoods();
    const randomNumber = Math.floor(Math.random() * result.length);
    const chosenFood = result[randomNumber];
    res.status(200).json({ success: true, data: chosenFood});
  } catch (err) {
    res.status(400).json({ success: false, message: err})
  }
}

const addFood = async (req, res) => {
  const { name, prepTime, recipeUrl, category } = req.body;
  const newFood = { name, prepTime, recipeUrl, category };
  
  try {
    const result = await createNewFood(newFood);
    res.status(200).json({ success: true, data: result});
  } catch (err) {
    res.status(400).json({ success: false, message: err})
  }
}

const updateOneFood = async (req, res) => {
  const { name, prepTime, recipeUrl, category } = req.body;
  const updatedFood = { name, prepTime, recipeUrl, category };
  
  try {
    const result = await updateFood(req.params.id, updatedFood);
    res.status(200).json({ success: true, data: result});
  } catch (err) {
    res.status(404).json({ success: false, message: err})
  }
}


const deleteOneFood = async (req, res) => {
  try {
    const result = await deleteFood(req.params.id);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, message: err})
  }
}

module.exports = {
  getFoods,
  addFood,
  getOneFood,
  getOneRandomFood,
  updateOneFood,
  deleteOneFood
}