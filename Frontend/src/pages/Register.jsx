import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";


function Register() {


    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const res = await api.post("/auth/register", formData);

            alert(res.data.message);

            navigate("/login");

        } catch (error) {

            alert(
                error.response?.data?.message || "Registration Failed"
            );

        }
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

            <div className="bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden max-w-5xl w-full">

                {/* Left */}

                <div className="bg-blue-600 text-white p-12 flex flex-col justify-center">

                    <h1 className="text-5xl font-bold">
                        Join CareerBoost
                    </h1>

                    <p className="mt-8 text-lg leading-8">
                        Create your account and prepare for placements with
                        aptitude, technical and HR interview questions.
                    </p>

                </div>

                {/* Right */}

                <div className="p-12">

                    <h2 className="text-4xl font-bold">
                        Register
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 space-y-5"
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-xl p-4 outline-none"
                        />

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
                        <button
                            className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700"
                        >
                            Create Account
                        </button>

                    </form>

                    <p className="text-center mt-8">

                        Already have an account?

                        <Link
                            to="/login"
                            className="text-blue-600 ml-2"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}

export default Register