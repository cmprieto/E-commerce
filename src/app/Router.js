import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import Item from "../pages/Item";
import Category from "../pages/Category";
import Cart from "../pages/Cart";

const Router = () => (
  <BrowserRouter>
    <Routes>
      {/* <Route path={process.env.PUBLIC_URL}> */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/cart/" element={<Cart />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
      {/*     </Route> */}
    </Routes>
  </BrowserRouter>
);

export default Router;
