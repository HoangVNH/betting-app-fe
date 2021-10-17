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

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

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
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="off"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password1"
            autoComplete="new-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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
