import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddFoodForm from "./routes/AddFoodForm.jsx";
import RandomFood from "./routes/RandomFood.jsx";
import HomePage from "./routes/HomePage.jsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/add-food",
        element: <AddFoodForm />,
      },
      {
        path: "/random-food",
        element: <RandomFood />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
