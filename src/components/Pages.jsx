import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import PaginationItem from "@mui/material/PaginationItem";

const Pages = ({ currentPage, setCurrentPage, totalCars, carsPerPage }) => {
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const Container = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    padding: 15px;
    background: #f2f5fc;
    border-radius: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  `;

  const displayedCarsCount = Math.max(
    0,
    Math.min(carsPerPage * currentPage, totalCars) -
      carsPerPage * (currentPage - 1)
  );

  return (
    <Container>
      <Typography>{`${displayedCarsCount} of ${totalCars}`}</Typography>
      <Stack spacing={2}>
        <Pagination
          count={10}
          variant="outlined"
          color="primary"
          shape="rounded"
          page={currentPage}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/page/${item.page}`}
              {...item}
            />
          )}
        />
      </Stack>
    </Container>
  );
};

export default Pages;
