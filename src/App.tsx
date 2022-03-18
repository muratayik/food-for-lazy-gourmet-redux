import { Route, Routes } from "react-router-dom";
import CategoriesRoute from "routes/CategoriesRoute";
import MealDetailsRoute from "routes/MealDetailsRoute";
import MealsRoute from "routes/MealsRoute";
import NotFoundRoute from "routes/NotFoundRoute";
import SignInRoute from "routes/SignInRoute";
import SignOutRoute from "routes/SignOutRoute";

function App() {
  return (
    <div>
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
