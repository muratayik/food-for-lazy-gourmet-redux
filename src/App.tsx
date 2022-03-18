import { NavLink, Route, Routes } from "react-router-dom";
import CategoriesRoute from "routes/CategoriesRoute";
import MealDetailsRoute from "routes/MealDetailsRoute";
import MealsRoute from "routes/MealsRoute";
import NotFoundRoute from "routes/NotFoundRoute";
import SignInRoute from "routes/SignInRoute";
import SignOutRoute from "routes/SignOutRoute";

function App() {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Categories</NavLink>{" "}
          <NavLink to="/meal-list/asdasd">Meals</NavLink>{" "}
          <NavLink to="/meal-detail/qweqwewe">Meal Details</NavLink>{" "}
          <NavLink to="/sign-in">Sign In</NavLink>{" "}
          <NavLink to="/sign-out">Sign Out</NavLink>{" "}
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<CategoriesRoute />} />
        <Route path="/meal-list/:categoryId" element={<MealsRoute />} />
        <Route path="/meal-detail/:mealId" element={<MealDetailsRoute />} />
        <Route path="/sign-in" element={<SignInRoute />} />
        <Route path="/sign-out" element={<SignOutRoute />} />
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </div>
  );
}

export default App;
