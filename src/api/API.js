import axios from "axios";

export const client = axios.create({
  baseURL: "https://jsd-infinity-tracking-backend.vercel.app",
  // baseURL: "http://localhost:4000",
  ValidateStatus: () => true,
});

export const getRecords = async () => {
  const response = await client.get("/users/me/records");
  return response;
};
