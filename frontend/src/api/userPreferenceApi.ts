import { UserPreferences } from "@/types/types";

//互换颜色
export const changeColorPreference = () => {
  const userPreferences: UserPreferences = JSON.parse(
    localStorage.getItem("userPreferences") || ""
  );
  if (!userPreferences) return;
  const color = {
    "price-up": userPreferences.color["price-down"],
    "price-down": userPreferences.color["price-up"],
  };
  userPreferences.color = color;
  localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
};

export const getUserPreferences = (): UserPreferences => {
  const userPreferences: UserPreferences = JSON.parse(
    localStorage.getItem("userPreferences") || ""
  );
  return userPreferences;
}