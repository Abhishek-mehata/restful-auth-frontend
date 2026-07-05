
import api from "../api/axios"

export const signup = async (data) => {
    return api.post("/user/login", data)
}

export const login = async (data) => {
    return api.post("/user/login", data)
}

export const getMe = (token) => {
    api.get("/users/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
}