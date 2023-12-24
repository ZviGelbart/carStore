import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Car from "../Car";
import "./cars.css";

export default function Cars() {
  const [cars, setCars] = useState([]);
const {catId} = useParams()

  useEffect(() => {
    fetch('https://jbh-mockserver.onrender.com/car/categories/'+catId)
      .then((r) => r.json())
      .then((data) => {
        setCars(data);
      });
  }, [catId]);

  return (
    <div id="items">
      <div id="list">
        <h1>cartList</h1>
      </div>

      {cars.map((c) => {
        return (
          <div key={c.modelId}>
            <div id="divCar">
              <Car item={c} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
