import React from "react";

import Header from "../layout/Header";
import {
  Box,
  Button,
  Stack,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormProvider, FTextField } from "../hookformComponent";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../customhook/useAuth";
import BackgroundImage from "../layout/BackgroundImage";

const LoginSchema = Yup.object().shape({
  email: Yup.string("not a string")
    .email("not a valid email")
    .required("email is required"),
  password: Yup.string().required("password is required"),
});

const defaultValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();
  let location = useLocation();

  let auth = useAuth();

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    console.log(location);
    let from = location.state?.from?.pathname || "/";

    let email = data.email;
    let password = data.password;

    auth.login(email, password, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <Box>
      <BackgroundImage />
      <Header />

      <Box
        sx={[
          {
            position: "absolute",
            zIndex: 1,
            backgroundColor: "rgba(0,0,0,0.75)",
            width: "100vw",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          (theme) => ({
            [theme.breakpoints.down("sm")]: {},
          }),
        ]}
      >
        <Box
          component="div"
          sx={[
            {
              width: "17em",
              height: "20em",
              m: "auto",
              p: "10px",
              borderRadius: "10px",
              bgcolor: "rgba(0,0,0,0.9)",
            },

            // (theme) => ({
            //   [theme.breakpoints.down("sm")]: {
            //     p: "0",
            //     alignItems: "center",

            //     transform: "translateX(0)",
            //   },
            // }),
          ]}
        >
          <Typography variant="subtitle1" color="white">
            Type down any email and password
          </Typography>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={7}>
              <FTextField name="email" label="Email" />
              <FTextField
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        aria-label="toggle password visibility"
                        sx={{ color: "white" }}
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(e) => {
                          e.preventDefault();
                        }}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  bgcolor: "red",
                  "&:hover": { bgcolor: "rgba(255,3,3,0.6)" },
                }}
              >
                Login
              </Button>
            </Stack>
          </FormProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
