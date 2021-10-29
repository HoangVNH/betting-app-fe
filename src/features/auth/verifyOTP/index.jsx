import React from "react";
import {
  Avatar,
  Button,
  Typography,
  TextField,
  Container,
  Grid,
  Link,
  Box,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import { verifyOTPThunk } from "../authSlice";
import { useDispatch } from "react-redux";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link component={RouterLink} color="inherit" to="/">
        Betting App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const VerifyOTP = () => {
  const dispatch = useDispatch();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(verifyOTPThunk(data));
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 35,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Verify OTP
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email is not valid",
                  },
                }}
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
              {errors.email && <p>{errors.email.message}</p>}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="otp"
                control={control}
                defaultValue=""
                rules={{
                  required: "OTP code is required",
                  pattern: {
                    value: /^\d{6}$/,
                    message: "OTP is not valid (only number and 6 digits)",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    required
                    fullWidth
                    id="otp"
                    label="OTP"
                    {...field}
                  />
                )}
              />
              {errors.otp && <p>{errors.otp.message}</p>}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            endIcon={<SendIcon />}
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Verify
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
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};

export default VerifyOTP;
