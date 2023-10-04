import React, { useState, useEffect } from "react";
import EachCard from "./EachCard";
import data from "../../Data/data.json";
import { Box, styled } from "@mui/material";

const Comp = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const Cards = ({ currentPage, text, carsPerPage, setTotalCars }) => {
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const filterCars = data.filter((car) =>
        car.name.toLowerCase().includes(text.toLowerCase())
      );
      setTotalCars(filterCars.length);
      const startIndex = (currentPage - 1) * carsPerPage;
      const endIndex = startIndex + carsPerPage;
      setCarsData(filterCars.slice(startIndex, endIndex));
    };
    fetchData();
  }, [text, currentPage, carsPerPage, setTotalCars]);

  return (
    <Comp>
      {carsData.map((carData, index) => {
        return <EachCard key={index} car={carData} />;
      })}
    </Comp>
  );
};

export default Cards;
