const mongoose = require("mongoose");

const FoodCategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A category needs to have a name"],
    unique: [true, "This category already exists"]
  },
  // foods: [{
  //   type: mongoose.Schema.ObjectId, 
  //   ref: "Food"
  // }],
});

FoodCategorySchema.virtual("foods", {
  ref: "Food",
  foreignField: "category",
  localField: "_id",
});


const FoodCategory = mongoose.model("FoodCategory", FoodCategorySchema);

module.exports = FoodCategory;