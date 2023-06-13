import axios from "axios";

const API_URL = "http://localhost:3001/api/";

export const getRandomFood = async () => {
  return await axios.get(API_URL + "foods/random");
}

export const getAllFoodCategories = async () => {
  return await axios.get(API_URL + "foodcategories");
}

export const postNewFood = async (newFood) => {
  return await axios.post(API_URL + "foods", newFood);
}
