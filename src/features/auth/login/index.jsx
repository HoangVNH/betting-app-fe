import React from "react";
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
import { signInThunk } from "../authSlice";
import { useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";

const SignIn = () => {
  const dispatch = useDispatch();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(signInThunk(data));
  };

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
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Email is not valid",
              },
            }}
            render={({ field }) => (
              <TextField
                margin="normal"
                fullWidth
                required
                id="email"
                label="Email Address"
                autoComplete="off"
                autoFocus
                {...field}
              />
            )}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <TextField
                margin="normal"
                fullWidth
                required
                label="Password"
                type="password"
                id="password1"
                autoComplete="new-password"
                {...field}
              />
            )}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            sx={{
              width: "100%",
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Button
            component={RouterLink}
            to="/"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          >
            Back to Home
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                component={RouterLink}
                to="/"
                variant="body2"
                underline="none"
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                component={RouterLink}
                to="/register"
                variant="body2"
                underline="none"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignIn;
