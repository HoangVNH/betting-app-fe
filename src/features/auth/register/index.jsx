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
import { useForm, Controller } from "react-hook-form";

const SignUp = () => {
  const dispatch = useDispatch();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = useCallback(
    (data) => {
      dispatch(signUpThunk(data));
    },
    [dispatch]
  );

  return (
    <Container maxWidth="sm">
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
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="firstName"
                defaultValue=""
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    required
                    autoComplete="fname"
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    {...field}
                  />
                )}
              />
              {errors.firstName?.type === "required" &&
                "First name is required"}
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                name="lastName"
                defaultValue=""
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    autoComplete="lname"
                    {...field}
                  />
                )}
              />
              {errors.lastName?.type === "required" && "Last name is required"}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                rules={{ required: true }}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    {...field}
                  />
                )}
              />
              {errors.email?.type === "required" && "Email is required"}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password1"
                    autoComplete="new-password"
                    {...field}
                  />
                )}
              />
              {errors.password?.type === "required" && "Password is required"}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    {...field}
                  />
                )}
              />
              {errors.address?.type === "required" && "Address is required"}
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
