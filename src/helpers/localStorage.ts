import IJwtResponse from "@/models/api/IJwtResponse";

const storageKey = `userToken_${process.env.NEXT_PUBLIC_ENV}`;

export const addTokenToLocalStorage = (jwtBody: IJwtResponse) => {
  localStorage.setItem(storageKey, JSON.stringify(jwtBody));
};
export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem(storageKey);
};
export const getTokenFromLocalStorage = () => {
  return localStorage.getItem(storageKey);
};
