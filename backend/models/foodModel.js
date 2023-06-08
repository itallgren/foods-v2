const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A food needs to have a name"],
    unique: [true, "This food alreadt exists"]
  },
  prepTime: {
    type: Number,
    required: [true, "A food needs to have a preparation time"]
  },
  recipeUrl: {
    type: String,
    required: false
  },
  category: [{
    type: mongoose.Schema.ObjectId, 
    ref: "FoodCategory"
  }],
}, 
{ 
  timestamps: true
})

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;