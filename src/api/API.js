import axios from "axios";

export const client = axios.create({
  baseURL: "https://jsd-infinity-tracking-backend.vercel.app",

  ValidateStatus: () => true,
});

export const getRecords = async () => {
  const response = await client.get("/users/me/records");
  return response;
};
