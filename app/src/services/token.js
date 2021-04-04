export const setToken = (authToken) => {
  try {
    localStorage.setItem("authToken", authToken);
  } catch (err) {
    console.log(err);
  }
};

export const getToken = () => {
  try {
    return localStorage.getItem("authToken");
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => {
  try {
    localStorage.removeItem("shrynk-auth-token");
  } catch (err) {
    console.log(err);
  }
};
