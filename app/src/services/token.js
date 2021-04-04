export const getAuthToken = () => {
  try {
    return localStorage.getItem("shrynk-jwt");
  } catch (err) {
    console.log(err);
  }
};

export const getUserId = () => {
  try {
    return localStorage.getItem("shrynk-usr-id");
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => {
  try {
    window.localStorage.removeItem("shrynk-jwt");
    window.localStorage.removeItem("shrynk-usr-id");
  } catch (err) {
    console.log(err);
  }
};

export const login = (authToken, userId) => {
  try {
    window.localStorage.setItem("shrynk-jwt", authToken);
    window.localStorage.setItem("shrynk-usr-id", userId);
  } catch (err) {
    // Log the error
  }
};
