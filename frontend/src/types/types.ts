export type ApiStatus = "IDLE" | "PENDING" | "SUCCESS" | "ERROR";

export type UserPreferences = {
  theme: "dark" | "light";
  language: "en" | "es" | "cn";
  color: {
    "price-up": string;
    "price-down": string;
  };
};


