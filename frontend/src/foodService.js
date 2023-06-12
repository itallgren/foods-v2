import axios from "axios";

const API_URL = "http://localhost:3001/api/";

export const getRandomFood = async () => {
  return await axios.get(API_URL + "foods/random");
}
