import { useEffect, useState } from "react";
import { getTokenFromLocalStorage } from "./localStorage";

export const useUserSession = (): [boolean] => {
  const [isOnline, setIsOnline] = useState<boolean>(false);

  useEffect(() => {
    const token = getTokenFromLocalStorage();

    if (token) {
      setIsOnline(true);
    }
  }, [setIsOnline]);

  return [isOnline];
};
