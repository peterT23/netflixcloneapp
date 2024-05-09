import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

import Layout from "../layout/Layout";
function ErrorPage() {
  return (
    <Layout>
      <Box
        sx={{
          m: "300px",
          display: "flex",
          height: "100%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 480,
            margin: "auto",
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography variant="h4" paragraph>
            Page not found!
          </Typography>
          <Typography sx={{ color: "white", mb: "1rem" }}>
            Sorry, we couldn’t find the page you requested.
          </Typography>
          <Button
            to="/"
            sx={{
              fontWeight: "bold",
              bgcolor: "red",
              "&:hover": { bgcolor: "rgba(255,1,1,0.8)" },
            }}
            variant="contained"
            component={RouterLink}
          >
            Go to Home
          </Button>
        </Box>
      </Box>
    </Layout>
  );
}
export default ErrorPage;
