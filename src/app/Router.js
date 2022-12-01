import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import Item from "../pages/Item";
import Category from "../pages/Category";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

const Router = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path={process.env.PUBLIC_URL}> */}
      <Route element={<Layout />}>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route path={process.env.PUBLIC_URL + "/item/:id"} element={<Item />} />
        <Route
          path={process.env.PUBLIC_URL + "/category/:id"}
          element={<Category />}
        />
        <Route path={process.env.PUBLIC_URL + "/cart/"} element={<Cart />} />
        <Route path={process.env.PUBLIC_URL + "/checkout/"} element={<Checkout />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
      {/*  </Route> */}
    </Routes>
  </BrowserRouter>
);

export default Router;
