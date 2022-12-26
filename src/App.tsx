import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Catalogue from "./screens/Catalogue";
import { StoreProvider } from "./stores";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={routes.CATALOGUE} element={<Catalogue />} />
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;
