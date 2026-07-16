import { Routes, Route } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Toaster } from "react-hot-toast";
// inside your JSX, once:

import Shop from "@/pages/Shop"
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Favorites from "@/pages/Favorites";
import Personalize from "@/pages/Personalize";

function App() {
  return (
    <Routes>
      {/* Everything nested here renders inside Layout's <Outlet />,
          so TopBar/Navbar/Footer show on all of them */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
         {/* <Route path="/favorite" element={<Favorites />} />  */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />    
        <Route path="/personalize/:productId" element={<Personalize />} />
      </Route>
    </Routes>
  );
}

export default App;
 