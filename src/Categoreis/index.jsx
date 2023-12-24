import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Cars from "../Cars";
import Category from "../Category";
import "./categoreis.css";

export default function Categoreis() {
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jbh-mockserver.onrender.com/car/categories")
      .then((r) => r.json())
      .then((data) => {
        setCategory(data);
        navigate(`/categories/${data[0].categoryId}`);
      });
  }, []);

  return (
    <>
      <div className="categories">
        {category.map((c) => (
          <Category key={c.categoryId} category={c} />
        ))}
      </div>
      <Routes>
        <Route path="/:catId" element={<Cars />} />
      </Routes>
    </>
  );
}
