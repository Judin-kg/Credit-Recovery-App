// import API from "./api";

// // Login
// export const loginUser = async (loginData) => {
//   const response = await API.post("/auth/login", loginData);

//   if (response.data.token) {
//     localStorage.setItem("token", response.data.token);
//     localStorage.setItem("user", JSON.stringify(response.data.user));
//   }

//   return response.data;
// };

// // Register
// export const registerUser = async (registerData) => {
//   const response = await API.post("/auth/register", registerData);
//   return response.data;
// };

// // Logout
// export const logoutUser = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
// };

// // Get Logged In User
// export const getCurrentUser = () => {
//   const user = localStorage.getItem("user");
//   return user ? JSON.parse(user) : null;
// };

// // Check Auth
// export const isAuthenticated = () => {
//   return !!localStorage.getItem("token");
// };



import API from "./api";

// LOGIN
export const loginUser = async (loginData) => {
  try {
    const response = await API.post("/auth/login", loginData);

    if (response.data?.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

// REGISTER
export const registerUser = async (registerData) => {
  try {
    const response = await API.post("/auth/register", registerData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// GET CURRENT USER
export const getCurrentUser = () => {
  try {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  } catch {
    return null;
  }
};

// CHECK AUTH
export const isAuthenticated = () => {
  return Boolean(localStorage.getItem("token"));
};
