const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A food needs to have a name"],
    unique: [true, "This food already exists"]
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

FoodSchema.pre(/^find/, function (next) {
  this.populate({
    path: "category",
    select: "name",
  });
  next();
});

const Food = mongoose.model("Food", FoodSchema);

module.exports = Food;