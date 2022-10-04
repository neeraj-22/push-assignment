import React from "react";
import { BrowserRouter, Routes as RoutesAlt, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";

//Importing Components
import Showdatafromdb from "./Pages/Showdatafromdb";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesAlt>
      <Route path="/" element={<Homepage/>} />
        <Route path="/fetch" element={<Showdatafromdb/>} />
      </RoutesAlt>
    </BrowserRouter>
  );
};

export default Routes;
