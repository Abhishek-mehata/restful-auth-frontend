import api from "../api/axios";

export const login = async (credentials) => {
    const { data } = await api.post("/user/login", credentials);
    return data;
};

export const signup = async (userData) => {
    const { data } = await api.post("/user/signup", userData);
    return data;
};

export const getProfile = async () => {
    const response = await api.get("/user/me",);
    return response.data;
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

// login example
// correct Email, password will give
// output:
// ....
// ....
// {
//   message: "Login successful",
//   token: "<JWT_TOKEN>",
//   user: {
//     _id: "...",
//     name: "name",
//     email: "email"
//   }
// }
// ....
// ....