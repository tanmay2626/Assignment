import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: "white",
  "@media all": {
    minHeight: 20,
    paddingLeft: 5 + "%",
    paddingRight: 5 + "%",
  },
}));

const Header = () => {
  const options = [
    "होम",
    "बोर्ड रिजल्ट्स",
    "न्यूज़ ब्रीफ",
    "फोटो",
    "वीडियो",
    "देश",
    "राज्य",
    "क्रिकेट",
    "मनोरंजन",
    "करियर",
    "विदेशh",
    "धर्म",
    "बिजनेस",
    "गैजेट्स",
    "ऑटो",
    "लाइफस्टाइल",
  ];

  return (
    <Box className="header" sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", paddingTop: 2 }}
      >
        <Toolbar sx={{ paddingBottom: 1 }}>
          <img
            alt="logo"
            src="https://raw.githubusercontent.com/tanmay2626/Assignment/main/public/logo_-removebg-preview.png"
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              color: "black",
              textDecoration: "none",
              ml: 1,
            }}
          >
            अग्रजन सेवक मीडिया नेटवर्क
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: 300,
              mr: 2,
              border: "solid 2px #FF5B00",
              borderRadius: 4,
            }}
          >
            <IconButton aria-label="menu" sx={{ fontSize: 2 }}>
              <LocationOnIcon sx={{ fontSize: 20, color: "#FF5B00" }} />
              <strong>शहर चुनें</strong>
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem />
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: 10 }}
              placeholder="खोज के लिए यहां लिखे"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Paper>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              size="small"
              sx={{
                textTransform: "none",
                mr: 3,
                backgroundColor: "#FF5B00",
                color: "black",
                borderRadius: 2,
              }}
              variant="contained"
              startIcon={<AddCircleIcon />}
            >
              खबर जोड़ें
            </Button>
            <Button
              size="small"
              sx={{
                textTransform: "none",
                mr: 3,
                backgroundColor: "#F3C892",
                color: "black",
                borderRadius: 2,
              }}
              variant="contained"
              endIcon={<KeyboardArrowDownIcon />}
            >
              Ankush Jain
            </Button>
          </Box>
        </Toolbar>
        <StyledToolbar>
          {options.map((option) => {
            return (
              <Typography
                noWrap
                component="div"
                sx={{
                  flexGrow: 1,
                  fontSize: 0.8 + "rem",
                  alignSelf: "flex-end",
                  color: "black",
                  paddingLeft: 1,
                }}
              >
                <strong>{option}</strong>
              </Typography>
            );
          })}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
