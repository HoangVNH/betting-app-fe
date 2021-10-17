import React, { useCallback } from "react";
import {
  Avatar,
  Button,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Container,
  Grid,
  Link,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUpThunk } from "../authSlice";

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const data = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
        address: formData.get("address"),
      };

      dispatch(signUpThunk(data));
    },
    [dispatch]
  );

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password1"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                component={RouterLink}
                to="/login"
                variant="body2"
                underline="none"
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
