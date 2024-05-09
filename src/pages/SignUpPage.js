import { Box, Typography, Button } from "@mui/material";
import { FTextField, FormProvider } from "../hookformComponent";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";

import BackgroundImage from "../layout/BackgroundImage";

const Schema = Yup.object().shape({
  email: Yup.string().nullable().email("must be a valid email"),
});

const defaultValue = {
  email: "",
};

const SignUpPage = () => {
  let navigate = useNavigate();

  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValue,
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    console.log("data", data);
    navigate("/login");
  };

  return (
    <Box>
      <BackgroundImage />
      <Header login />
      <Box
        sx={[
          {
            position: "absolute",
            zIndex: 1,
            backgroundColor: "rgba(0,0,0,0.75)",
            width: "100vw",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
          (theme) => ({
            [theme.breakpoints.down("sm")]: {},
          }),
        ]}
      >
        <Box sx={{ marginTop: "100px", textAlign: "center", mb: "40px" }}>
          <Typography variant="h3" color="white" sx={{ fontWeight: "bold" }}>
            Unlimited movies, TV shows, and more
          </Typography>
          <Typography variant="h5" color="white" sx={{ fontWeight: "bold" }}>
            Watch anywhere. Cancel anytime.
          </Typography>
          <Typography variant="h6" color="white" sx={{ fontWeight: "bold" }}>
            Ready to watch? Enter your email or mobile number to create or
            restart your membership.
          </Typography>
        </Box>

        <FormProvider
          methods={methods}
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            width: "50%",
            // margin: "auto",
            borderRadius: "10px",
          }}
        >
          <FTextField name="email" label="Email" />

          <Button
            variant="contained"
            type="submit"
            sx={{
              backgroundColor: "red",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "rgba(234, 2, 2, 0.9)" },
            }}
          >
            Get Started
          </Button>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default SignUpPage;
