import axios, { AxiosResponse } from "axios";

const api_url = "http://localhost:9000/api";
const appClient = axios.create({
  baseURL: api_url,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (
  email: string,
  password: string
): Promise<AxiosResponse> => {
  return appClient.post("users/login", { email, password });
};

export const registerUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  mobileNumber: string,
  address: string,
  city: string,
  pincode: string,
  state: string,
  country: string,
  role: string
): Promise<AxiosResponse> => {
  return appClient.post("users/register", {
    firstName,
    lastName,
    email,
    password,
    mobileNumber,
    address,
    city,
    pincode,
    state,
    country,
    role,
  });
};
