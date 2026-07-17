import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import api from "../services/api";

function AdminDashboard() {

    const { user } = useAuth();

    const [companyCount, setCompanyCount] = useState(0);
    const [questionCount, setQuestionCount] = useState(0);

    useEffect(() => {

        fetchData();

    }, []);

    const fetchData = async () => {

        try {

            const companyRes = await api.get("/company/all");
            const questionRes = await api.get("/question/all");

            setCompanyCount(companyRes.data.count);
            setQuestionCount(questionRes.data.count);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen bg-slate-100 p-8">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="bg-white rounded-2xl shadow-lg p-8">

                    <h1 className="text-4xl font-bold">
                        Admin Dashboard 👨‍💼
                    </h1>

                    <p className="text-gray-500 mt-3">
                        Welcome, {user?.name}
                    </p>

                </div>

                {/* Statistics */}

                <div className="grid md:grid-cols-2 gap-8 mt-8">

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-5xl">🏢</h2>

                        <h3 className="text-2xl font-bold mt-4">
                            Total Companies
                        </h3>

                        <p className="text-4xl font-bold text-blue-600 mt-3">
                            {companyCount}
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-5xl">❓</h2>

                        <h3 className="text-2xl font-bold mt-4">
                            Total Questions
                        </h3>

                        <p className="text-4xl font-bold text-green-600 mt-3">
                            {questionCount}
                        </p>

                    </div>

                </div>

                {/* Menu */}

                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">

                    <Link
                        to="/admin/add-company"
                        className="bg-blue-600 text-white rounded-2xl p-8 text-center hover:bg-blue-700"
                    >
                        <h2 className="text-5xl">🏢</h2>

                        <h3 className="text-xl mt-5 font-bold">
                            Add Company
                        </h3>

                    </Link>

                    <Link
                        to="/admin/manage-companies"
                        className="bg-green-600 text-white rounded-2xl p-8 text-center hover:bg-green-700"
                    >
                        <h2 className="text-5xl">📋</h2>

                        <h3 className="text-xl mt-5 font-bold">
                            Manage Company
                        </h3>

                    </Link>

                    <Link
                        to="/admin/add-question"
                        className="bg-purple-600 text-white rounded-2xl p-8 text-center hover:bg-purple-700"
                    >
                        <h2 className="text-5xl">❓</h2>

                        <h3 className="text-xl mt-5 font-bold">
                            Add Question
                        </h3>

                    </Link>


                    <Link
                        to="/admin/manage-questions"
                        className="bg-red-600 text-white rounded-2xl p-8 text-center hover:bg-red-700"
                    >
                        <h2 className="text-5xl">📚</h2>

                        <h3 className="text-xl mt-5 font-bold">
                            Manage Questions
                        </h3>

                    </Link>

                    <Link
                        to="/admin/students"
                        className="bg-orange-500 text-white rounded-2xl p-8 text-center hover:bg-orange-600"
                    >
                        <h2 className="text-5xl">👨‍🎓</h2>

                        <h3 className="text-xl mt-5 font-bold">
                            Students
                        </h3>

                    </Link>

                    <Link
                        to="/"
                        className="bg-gray-700 text-white rounded-2xl p-8 text-center hover:bg-gray-900"
                    >
                        <h2 className="text-5xl">🏠</h2>

                        <h3 className="text-xl mt-5 font-bold">
                            Home
                        </h3>

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default AdminDashboard;