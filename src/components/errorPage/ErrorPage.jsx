import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const ErrorPage = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      {/* Error Icon */}
      <ErrorOutlineIcon sx={{ fontSize: 80, color: "red" }} />

      {/* Error Title */}
      <Typography variant="h2" className="mt-3 text-danger fw-bold">
        404 - Page Not Found
      </Typography>

      {/* Error Message */}
      <Typography variant="h6" className="mt-2 text-muted">
        Oops! The page you're looking for doesn't exist.
      </Typography>

      {/* Back to Home Button */}
      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
        size="large"
        sx={{ mt: 3, textTransform: "none", borderRadius: 3 }}
      >
        Go Back Home
      </Button>
    </Container>
  );
};

export default ErrorPage;
