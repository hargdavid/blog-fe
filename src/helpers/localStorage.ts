import IJwtResponse from "@/models/api/IJwtResponse";

const storageKey = `userToken_${process.env.NEXT_PUBLIC_ENV}`;

export const addTokenToLocalStorage = (jwtBody: IJwtResponse) => {
  localStorage.setItem(storageKey, JSON.stringify(jwtBody));
};
export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem(storageKey);
};
export const getTokenFromLocalStorage = (): {
  jwt: string;
  refreshToken: string;
} | null => {
  const tokenStr = localStorage.getItem(storageKey);

  if (tokenStr) {
    const {
      data: { jwt, refreshToken },
    } = JSON.parse(tokenStr);
    return { jwt, refreshToken };
  }

  return null;
};
