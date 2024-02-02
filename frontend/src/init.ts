const initLocalStorage = () => {
  if (localStorage.getItem("userToken") === null) {
    localStorage.setItem("userToken", "fakeToken");
  }
};
