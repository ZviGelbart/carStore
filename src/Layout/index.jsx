
import { Route, Routes } from "react-router-dom";
import CarDetailes from "../CarDetailes";
import Categoreis from "../categoreis";
import "./layout.css";

export default function Layout() {

  return (
    <div className="layout">

    <Routes>
      <Route path="/categories/*" element={<Categoreis  />} />
      <Route path="/" element={<Categoreis  />} />
      



      <Route path="/car/:carId" element={<CarDetailes/>} />

      
    </Routes>
    </div>
  );
}
