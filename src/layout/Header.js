import React from "react";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, InputBase } from "@mui/material";
import logo from "../netflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import { deepOrange } from "@mui/material/colors";
import useAuth from "../customhook/useAuth";
import { Link } from "react-router-dom";

const HeaderContainer = styled(Toolbar)(({ theme }) => ({
  "&.MuiToolbar-root": {
    pt: "10px",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      height: "150px",
      with: "100%",
      flexWrap: "wrap",
      flexDirection: "column",
      p: 0,
    },
  },
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    border: "1px solid white ",
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = (props) => {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <AppBar sx={[{ backgroundColor: "rgba(0,0,0,0.8)" }]} position="fixed">
      <HeaderContainer>
        <Box sx={{ width: "150px", height: "auto", mt: "5px" }}>
          <Link to="/">
            <img
              style={{ width: "100%", height: "100%" }}
              src={logo}
              alt="no internet"
            />
          </Link>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box flexGrow={1}></Box>
        <Button
          sx={{
            m: "3px",
            px: "1rem",
            py: "0.5rem",
            backgroundColor: "red",
            border: "none",
            cursor: "pointer",
            color: "white",
            borderRadius: "0.2rem",
            fontWeight: "bolder",
            fontSize: "1.05rem",
            "&:hover": { backgroundColor: deepOrange[600] },
          }}
          onClick={() => {
            if (auth.isAuthenticated) {
              auth.logout(() => navigate("/login"));
              return;
            }

            navigate(props.login ? "/login" : "/signup");
          }}
        >
          {auth.isAuthenticated
            ? "Log Out"
            : props.login
            ? "Log In"
            : "Sign Up"}
        </Button>
      </HeaderContainer>
    </AppBar>
  );
};

export default Header;
