import React from "react";
import { Box, InputBase, Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Container = styled(Box)`
  display: flex;
  margin: 10px;
  padding: 15px;
  // background: #4285f4;
  background: #f2f5fc;
  border-radius: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  & > * {
    margin: 0 15px;
  }
  align-items: center;
`;

const Icon = styled(SearchIcon)`
  color: #58585a;
  font-size: 20px;
`;

const Comp = styled(Box)`
  display: flex;
  color: #58585a;
`;

const InputContainer = styled(Box)`
  background: #ffffff;
  border-radius: 20px;
  padding: 7px;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const SearchBar = ({setText}) => {
  return (
    <Container>
      <InputContainer>
        <InputBase
          placeholder="Search..."
          onChange={(e) => setText(e.target.value)}
        />
        <Icon />
      </InputContainer>
      <Comp>
        <Typography>Relevance</Typography>
        <KeyboardArrowDownIcon />
      </Comp>
      <Comp>
        <Typography>All brands</Typography>
        <KeyboardArrowDownIcon />
      </Comp>
    </Container>
  );
};

export default SearchBar;
