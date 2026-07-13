import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await api.post("/auth/login", formData);
            login(res.data.user);
            alert(res.data.message);

            navigate("/dashboard");
        } catch (error) {
            alert(error.response?.data?.message || "Login Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
            <div className="bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden max-w-5xl w-full">

                {/* Left */}
                <div className="bg-blue-600 text-white p-12 flex flex-col justify-center">

                    <h1 className="text-5xl font-bold">
                        CareerBoost
                    </h1>

                    <p className="mt-8 text-lg leading-8">
                        Practice Aptitude, Technical, HR Interview Questions and prepare for your dream placement.
                    </p>

                </div>

                {/* Right */}
                <div className="p-12">

                    <h2 className="text-4xl font-bold">
                        Login
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Welcome Back 👋
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 space-y-6"
                    >

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-4 outline-none"
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-4 outline-none"
                        />

                        <div className="text-right">
                            <Link
                                to="/forgot-password"
                                className="text-blue-600"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <button
                            disabled={loading}
                            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 disabled:bg-gray-400"
                        >
                            {loading ? "Logging In..." : "Login"}
                        </button>

                    </form>

                    <p className="text-center mt-8">
                        Don't have an account?

                        <Link
                            to="/register"
                            className="text-blue-600 ml-2"
                        >
                            Register
                        </Link>

                    </p>

                </div>

            </div>
        </div>
    );
}

export default Login