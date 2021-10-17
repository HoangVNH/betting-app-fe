import { AxiosService } from "../services/axiosService";

export const signUp = (data) => AxiosService.post("/auths/register", data);

export const signIn = (data) => AxiosService.post("/auths/sign-in", data);

export const verifyUser = (data) => AxiosService.post("/auths/verify", data);

export const resendOTP = (email) =>
  AxiosService.get(`/auths/resend-otp/${email}`);
