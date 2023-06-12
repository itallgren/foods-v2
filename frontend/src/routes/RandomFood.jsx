import { useState } from "react";
import { useEffect } from "react";
import { getRandomFood } from "../foodService";

const RandomFood = () => {
  const [randomFood, setRandomFood] = useState("");
  const [randomFoodsCategories, setRandomFoodsCategories] = useState([]);

  const getARandomFood = async () => {
    const result = await getRandomFood();
    const categories = result.data.data.category.map((category) => {
      return category.name;
    });
    setRandomFood(result.data.data);
    setRandomFoodsCategories(categories);
  };

  useEffect(() => {
    getARandomFood();
  }, []);

  return (
    <div className="suggestion">
      <p className="suggestion-text">Vet du inte vad du ska äta idag?</p>
      <p className="suggestion-text">Då tycker jag att du ska testa...</p>
      <div className="suggestion-box">
        <h2 className="suggestion-title">
          {randomFood ? randomFood.name : "* generating food for you *"}
        </h2>
        <div className="suggestion-info">
          <span className="suggestion-category">
            <ion-icon name="pricetag-outline"></ion-icon>
            <span>{randomFoodsCategories}</span>
          </span>

          <span className="suggestion-time">
            <ion-icon name="time-outline"></ion-icon>
            <span>{randomFood.prepTime} min</span>
          </span>

          {randomFood.recipeUrl ? (
            <span className="suggestion-recipe">
              <a
                className="suggestion-link"
                target="_blank"
                rel="noreferrer"
                href={randomFood.recipeUrl ? randomFood.recipeUrl : ""}
              >
                <ion-icon name="link"></ion-icon>
                Recept
              </a>
            </span>
          ) : (
            ""
          )}
        </div>
        <button className="btn btn-primary" onClick={getARandomFood}>
          Ge nytt förslag
        </button>
      </div>
    </div>
  );
};

export default RandomFood;
