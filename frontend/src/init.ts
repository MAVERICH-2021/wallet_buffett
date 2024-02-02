import { UserPreferences } from "./types/types";

const userPreferences:UserPreferences = {
  theme: "dark",
  language: "en",
  color: {
    "price-up": "green",
    "price-down": "red",
  },
};

export const initLocalStorage = () => {
/*   if (localStorage.getItem("userToken") === null) {
    localStorage.setItem("userToken", "fakeToken");
  } */
  if (localStorage.getItem("userPreferences") === null) {
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
  }
};
