import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

function Dashboard() {

    const { user, loading } = useAuth();

    const [companies, setCompanies] = useState([]);
    const [questionCount, setQuestionCount] = useState(0);

    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {

        fetchDashboardData();

    }, []);

    const fetchDashboardData = async () => {

        try {

            const [companyRes, questionRes] = await Promise.all([
                api.get("/company/all"),
                api.get("/question/all"),
            ]);

            setCompanies(companyRes.data.companies);

            setQuestionCount(questionRes.data.count);

        } catch (error) {

            console.log(error);

        } finally {

            setPageLoading(false);

        }

    };

    if (loading || pageLoading) {

        return (

            <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
                Loading...
            </div>

        );

    }

    return (

        <div className="bg-slate-100 min-h-screen p-8">

            <div className="max-w-7xl mx-auto">

                {/* Welcome */}

                <div className="bg-white rounded-2xl shadow-lg p-8 flex justify-between items-center flex-wrap gap-5">

                    <div>

                        <h1 className="text-4xl font-bold">
                            Welcome, {user?.name} 👋
                        </h1>

                        <p className="text-gray-500 mt-3">
                            Prepare daily and crack your dream placement.
                        </p>

                    </div>

                    <div className="flex gap-3">

                        <Link
                            to="/"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                        >
                            🏠 Home
                        </Link>

                        <Link
                            to="/profile"
                            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                        >
                            👤 Profile
                        </Link>

                    </div>

                </div>

                {/* Statistics */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-5xl">
                            🏢
                        </h2>

                        <h3 className="text-2xl font-bold mt-4">
                            Companies
                        </h3>

                        <p className="text-4xl font-bold text-blue-600 mt-4">
                            {companies.length}
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-5xl">
                            ❓
                        </h2>

                        <h3 className="text-2xl font-bold mt-4">
                            Questions
                        </h3>

                        <p className="text-4xl font-bold text-green-600 mt-4">
                            {questionCount}
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-5xl">
                            👤
                        </h2>

                        <h3 className="text-2xl font-bold mt-4">
                            User
                        </h3>

                        <p className="text-xl mt-4">
                            {user?.name}
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-8">

                        <h2 className="text-5xl">
                            📧
                        </h2>

                        <h3 className="text-2xl font-bold mt-4">
                            Email
                        </h3>

                        <p className="text-sm mt-4 break-all">
                            {user?.email}
                        </p>

                    </div>

                </div>

                {/* Latest Companies */}

                <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

                    <h2 className="text-3xl font-bold mb-8">
                        Latest Companies
                    </h2>

                    {
                        companies.length === 0 ? (

                            <p>No Companies Available</p>

                        ) : (

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                                {
                                    companies.slice(0, 6).map((company) => (

                                        <div
                                            key={company._id}
                                            className="border rounded-xl p-5 hover:shadow-lg transition"
                                        >

                                            <h2 className="text-2xl font-bold">
                                                {company.companyName}
                                            </h2>

                                            <p className="text-gray-500 mt-3">
                                                {company.package}
                                            </p>

                                            <p className="text-gray-500">
                                                {company.location}
                                            </p>

                                            <Link
                                                to={`/company/${company._id}`}
                                                className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                                            >
                                                View Details
                                            </Link>

                                        </div>

                                    ))
                                }

                            </div>

                        )
                    }

                </div>

            </div>

        </div>

    );

}

export default Dashboard;