const getCapitalizedString = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//make number have comma every 3 digits
export const getNumberWithCommas = (x: number): string => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { getCapitalizedString };
