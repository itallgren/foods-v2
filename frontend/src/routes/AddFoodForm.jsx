import "@lottiefiles/lottie-player";
import { useState, useEffect } from "react";
import { getAllFoodCategories, postNewFood } from "../foodService";

const AddFoodForm = () => {
  const [foodCategories, setfoodCategories] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [success, setSuccess] = useState(true);
  const [heading, setHeading] = useState("Lägg till ny mat");

  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [recipeUrl, setRecipeUrl] = useState("");
  const [prepTime, setPrepTime] = useState(0);
  const [passCheck, setPassCheck] = useState("");

  const setValue = (event) => {
    const id = event.target.id;
    const value = event.target.value;

    if (id === "name") return setName(value);
    if (id === "category") return setCategory(value);
    if (id === "recipeUrl") return setRecipeUrl(value);
    if (id === "prepTime") return setPrepTime(value);
    if (id === "passCheck") return setPassCheck(value);
  };

  const getAllCategories = async () => {
    const result = await getAllFoodCategories();
    setfoodCategories(result.data.data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newFood = { name, category, recipeUrl, prepTime, passCheck };

    try {
      const result = await postNewFood(newFood);

      if (result.data.data) {
        // setSuccess(true);
        setIsSubmitted(true);
        setHeading("Kokar ihop maten...");

        setTimeout(() => {
          setHeading("Färdigt!");
          setIsSubmitted(false);

          setTimeout(() => {
            setHeading("Lägg till ny mat");
            setPrepTime(0);
          }, 1500);
        }, 3000);
      }
    } catch (err) {
      // setSuccess(false);
      console.log(err.response.statusText);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="form">
      <h1>{heading}</h1>
      {!isSubmitted ? (
        <form id="addNewFoodForm">
          <div className="form-group">
            <label htmlFor="name">Namn</label>
            <input
              id="name"
              autoFocus
              type="text"
              required
              onChange={setValue}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Kategori</label>
            <select id="category" type="text" required onChange={setValue}>
              <option disabled selected value>
                Välj en kategori
              </option>
              {foodCategories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="recipeUrl">
              Receptlänk <span className="optional">(valfritt)</span>
            </label>
            <input id="recipeUrl" type="url" onChange={setValue} />
          </div>

          <div className="form-group">
            <label htmlFor="prepTime">Tillagningstid</label>
            <span className="form-preptime">{prepTime} min</span>
            <input
              id="prepTime"
              type="range"
              required
              min="5"
              max="120"
              step="5"
              onChange={setValue}
            />
          </div>

          <div className="form-group">
            <label htmlFor="passCheck">Lösenord</label>
            <input id="passCheck" type="password" onChange={setValue} />
          </div>

          <button
            // type="submit"
            onClick={handleSubmit}
            className="btn btn-primary"
          >
            Lägg till
          </button>
          {/* {success ? (
            <p className="message message-success">Receptet tillagt!</p>
          ) : (
            <p className="message message-error">
              Du har inte tillåtelse att lägga till nya recept
            </p>
          )} */}
        </form>
      ) : (
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_hokxiytb.json"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      )}
    </div>
  );
};

export default AddFoodForm;
