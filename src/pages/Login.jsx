import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { login } from "../services/authService"

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);

        try {
            const response = await login(formData)
            console.log(response)
        } catch (error) {
            console.log(error.response)
            console.log(error.response.data)
        }
    };

    return (
        <div className="p-4 min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="max-w-md w-full bg-white p-6 rounded-lg shadow-md"
            >
                <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

                <input
                    type="email"
                    className="border border-gray-300 rounded-md p-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                />

                <div className="relative mb-6">
                    <input
                        type={showPassword ? "text" : "password"}
                        className="border border-gray-300 rounded-md p-2 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                password: e.target.value,
                            })
                        }
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? (
                            <FaEyeSlash size={18} />
                        ) : (
                            <FaEye size={18} />
                        )}
                    </button>
                </div>

                <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 rounded transition"
                >
                    Login
                </button>

                <p className="text-center mt-4 text-gray-600">
                    Don't have an account?{" "}
                    <span className="text-amber-500 cursor-pointer hover:underline">
                        Sign Up
                    </span>
                </p>
            </form>
        </div>
    );
};

export default Login;