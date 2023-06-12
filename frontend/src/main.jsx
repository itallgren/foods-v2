import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./routes/App.jsx";
import AddFoodForm from "./routes/AddFoodForm.jsx";
import RandomFood from "./routes/RandomFood.jsx";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
