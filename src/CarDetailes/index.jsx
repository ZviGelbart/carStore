import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./carDetailes.css";

export default function carDetailes() {
  const [car, setCar] = useState({});
  const { carId } = useParams();

  useEffect(() => {
    fetch("https://jbh-mockserver.onrender.com/car/" + carId)
      .then((r) => r.json())
      .then((data) => {
        setCar(data);
  });
  },[]);
  return (
    <div id="main">
      {"manufacture: " + car.manufacture}
      <br />
      {"year: " + car.year}
      <br />
      {"price: " + car.price + "$"}
      <br />
      {"color: " + car.color}
      <br />
    </div>
  );
}
