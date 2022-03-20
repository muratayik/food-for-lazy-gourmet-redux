import Header from "components/header";
import { NavLink, Route, Routes } from "react-router-dom";
import EditCreateCategoryRoute from "routes/admin/EditCreateCategoryRoute";
import CategoriesRoute from "routes/CategoriesRoute";
import MealDetailsRoute from "routes/MealDetailsRoute";
import MealsRoute from "routes/MealsRoute";
import NotFoundRoute from "routes/NotFoundRoute";
import SignInRoute from "routes/SignInRoute";
import SignOutRoute from "routes/SignOutRoute";
import SignUpRoute from "routes/SignUpRoute";

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
          <NavLink to="/admin/create-category">Create Category</NavLink>{" "}
        </li>
      </ul>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <CategoriesRoute />
            </>
          }
        />
        <Route
          path="/meal-list/:categoryId"
          element={
            <>
              <Header />
              <MealsRoute />
            </>
          }
        />
        <Route
          path="/meal-detail/:mealId"
          element={
            <>
              <Header />
              <MealDetailsRoute />
            </>
          }
        />
        <Route path="/sign-in" element={<SignInRoute />} />
        <Route path="/sign-out" element={<SignOutRoute />} />
        <Route path="/sign-up" element={<SignUpRoute />} />

        <Route
          path="/admin/create-category"
          element={
            <>
              <Header />
              <EditCreateCategoryRoute />
            </>
          }
        />

        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </div>
  );
}

export default App;
