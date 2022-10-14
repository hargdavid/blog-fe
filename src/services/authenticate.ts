import { addTokenToLocalStorage } from "@/helpers/localStorage";
import IJwtResponse from "@/models/api/IJwtResponse";
import ILoginForm from "@/models/api/ILoginForm";
import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_HOST;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const loginUserAsync = async (body: ILoginForm) => {
  const res = await axios.post(`${baseUrl}/login`, body, {
    headers: { ApiKey: apiKey },
  });

  addTokenToLocalStorage(res.data as unknown as IJwtResponse);
  return;
};
