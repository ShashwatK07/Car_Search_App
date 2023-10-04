import React, { useState } from "react";
import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Cards from "./components/Cards/Cards";
import Pagination from "./components/Pages";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [text, setText] = useState("");
  const carsPerPage = 6;
  const [totalCars, setTotalCars] = useState(0);

  return (
    <Router>
      <Box>
        <SearchBar setText={setText}></SearchBar>
        <Routes>
          <Route
            path="/"
            element={
              <Cards
                currentPage={currentPage}
                text={text}
                carsPerPage={carsPerPage}
                setTotalCars={setTotalCars}
              />
            }
          />
          <Route
            path="/page/:page"
            element={
              <Cards
                currentPage={currentPage}
                text={text}
                carsPerPage={carsPerPage}
                setTotalCars={setTotalCars}
              />
            }
          />
        </Routes>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCars={totalCars}
          carsPerPage={carsPerPage}
        />
      </Box>
    </Router>
  );
};

export default App;
