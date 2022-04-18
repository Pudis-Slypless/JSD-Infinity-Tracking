import axios from "axios";

export const client = axios.create({
  baseURL: "http://Localhost:4000",
  ValidateStatus: () => true,
});

export const getRecords = async () => {
  const response = await client.get("/users/me/records");
  return response;
  console.log(response.status);
  console.log(response.data);
};
