import { useState } from "react";
import { Box, Typography, styled, Button, Divider } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Comp = styled(Box)`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  margin: 20px;
  padding: 16px;
  border-radius: 15px;
  background: #f1f5fb;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
`;

const ImageBox = styled(Box)`
  max-width: 100%;
`;

const Image = styled("img")`
  max-width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 10px;
`;

const HeaderBox = styled(Box)`
  display: flex;
  padding: 5px 10px;
  justify-content: space-between;
  align-items: center;
`;

const YearBox = styled(Box)`
  border: dashed;
  padding: 0 15px;
  border-color: #4e9aea;
  border-radius: 10px;
`;

const iconStyle = {
  color: "#4e9aea",
};

const TopGrid = styled(Box)`
  display: flex;
  padding: 10px;
`;

const InsideGrid = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const SubHeading = styled(Typography)`
  color: #4f526a;
  margin: 0 5px;
`;

const capitalizeFirstCharacter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const Footer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled(Typography)`
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const LikeBox = styled(Box)`
  display: flex;
  margin: 10px;
  background: #d5e1ef;
  align-items: center;
  color: #4e9aea;
  padding: 3px;
  border-radius: 10px;
`;

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SubmitButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  lineHeight: 1.5,
  backgroundColor: "#4e9aea",
  borderRadius: "10px",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

const EachCard = ({ car }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Comp>
      <ImageBox>
        <Image
          src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt={car.name}
        />
      </ImageBox>
      <Box>
        <HeaderBox>
          <Typography variant="h6">{car.name}</Typography>
          <YearBox>
            <Typography>{car.manufacturing_year}</Typography>
          </YearBox>
        </HeaderBox>
        <TopGrid>
          <Container>
            <InsideGrid item xs={6}>
              <PeopleAltOutlinedIcon style={iconStyle} />
              <SubHeading>{car.no_of_seats} People</SubHeading>
            </InsideGrid>
            <InsideGrid item xs={6}>
              <SpeedOutlinedIcon style={iconStyle} />
              <SubHeading>{car.mileage} km/1-litre</SubHeading>
            </InsideGrid>
          </Container>
          <Container>
            <InsideGrid item xs={6}>
              <LocalGasStationOutlinedIcon style={iconStyle} />
              <SubHeading>{capitalizeFirstCharacter(car.gas_type)}</SubHeading>
            </InsideGrid>
            <InsideGrid item xs={6}>
              <DirectionsCarFilledOutlinedIcon style={iconStyle} />
              <SubHeading>
                {capitalizeFirstCharacter(car.transmission_type)}
              </SubHeading>
            </InsideGrid>
          </Container>
        </TopGrid>
        <Divider variant="middle" />
        <Footer>
          <Box>
            <Price>
              <Typography variant="h6">
                ${car.renting_cost_per_month}
              </Typography>
              / month
            </Price>
          </Box>
          <ButtonBox>
            <LikeBox onClick={toggleLike}>
              {isLiked ? (
                <FavoriteOutlinedIcon />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </LikeBox>
            <SubmitButton variant="contained" color="primary">
              Rent now
            </SubmitButton>
          </ButtonBox>
        </Footer>
      </Box>
    </Comp>
  );
};

export default EachCard;
