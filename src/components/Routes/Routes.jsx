import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../../utils/routes";

import Home from "../Home/Home";
import Robe from "../Robe/Robe"
import SingleProduct from "../Products/SingleProduct";
import Profile from "../Profile/Profile";
import SingleCategory from "../Categories/SingleCategory";
import Cart from "../Cart/Cart";

const AppRoutes = () => (
<<<<<<< HEAD
	<Routes>
		<Route index element={<Home />} />
		<Route path='/Shop-Med' element={<Home />} />
		<Route path={ROUTES.ROBE} element={<Robe />} />
		<Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
		<Route path={ROUTES.PROFILE} element={<Profile />} />
		<Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
		<Route path={ROUTES.CART} element={<Cart />} />
	</Routes>
)
=======
  <Routes>
    <Route index element={<Home />} />
    <Route path='/Shop-Med' element={<Home />} />
    <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
    <Route path={ROUTES.PROFILE} element={<Profile />} />
    <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
    <Route path={ROUTES.CART} element={<Cart />} />
  </Routes>
);
>>>>>>> cb7cdfd36d50ad76bcd99c1b6d1b118f6ee07bda

export default AppRoutes;
