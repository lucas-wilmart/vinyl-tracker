import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Catalogue from "./screens/Catalogue";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={routes.CATALOGUE} element={<Catalogue />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
