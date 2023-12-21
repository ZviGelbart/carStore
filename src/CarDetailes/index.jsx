import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function carDetailes() {
  const { carID } = useParams();
  const [car, setCar] = useState({});

  useEffect(() => {
    fetch("http://ec2-52-203-207-234.compute-1.amazonaws.com:8443/api/" + carID)
      .then((c) => c.json())
      .then((data) => setCar(data));
  }, []);

  return (
    <div>
        {car.price}
        {car.name}
        {car.color}
    </div>
  )
}
