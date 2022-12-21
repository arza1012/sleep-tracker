/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Landing, Login, Signup, Home} from "./components";
import "./App.css";
import GraphWM from "./components/Graph-W-M";

function App() {
  // const [user, setUser] = useState([]);//hola

  // useEffect(() => {
  //   const theUser = localStorage.getItem("user");

  //   if (theUser && !theUser.includes("undefined")) setUser(JSON.parse(theUser));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={user?.email ? <Navigate to="/home" /> : <Landing />}
        />
        <Route
          path="/signup"
          element={user?.email ? <Navigate to="/home" /> : <Signup />}
        />
        <Route
          path="/login"
          element={user?.email ? <Navigate to="/home" /> : <Login />}
        /> */}
        <Route
          path="/inicio"
          element= <Home/>
        />
        <Route path="/graficas"
        element= <GraphWM/> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//hola con las pruebas de nuevo!!
