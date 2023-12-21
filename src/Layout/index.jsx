import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cars from "../Cars";
import Categoreis from "../categoreis";
import "./layout.css";

export default function Layout() {
  const [categoryId, setCategoryId] = useState(undefined);
  return (
    
      <Routes>
        <Route
          path="/"
          element={
            <div className="layout">

              <div id="categoreis">
                categoreis
                <Categoreis setCategoryId={setCategoryId} />
              </div>
              <div id="items">
                <div id="list">
                  <h1>cartList</h1>
                </div>

                {categoryId && <Cars categoryId={categoryId} />}
              </div>
            </div>
          
          }
        />
      </Routes>
  
  );
}
