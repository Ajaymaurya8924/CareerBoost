import { Search, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";


function Home() {

    const [companies, setCompanies] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        try {

            const res = await api.get("/company/all");

            setCompanies(res.data.companies);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }
    };
    return (
        <div className="bg-slate-50">

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Left */}
                    <div>

                        <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                            🚀 Placement Preparation Platform
                        </span>

                        <h1 className="text-6xl font-bold mt-8 leading-tight text-slate-900">
                            Crack Your
                            <span className="text-blue-600"> Dream Placement </span>
                            With Confidence.
                        </h1>

                        <p className="text-gray-600 text-lg mt-8 leading-8">
                            Practice Aptitude, Technical and HR Interview Questions
                            from top companies like TCS, Infosys, Wipro,
                            Amazon, Google and many more.
                        </p>

                        {/* Search */}

                        <div className="bg-white rounded-xl shadow-lg flex items-center mt-10 overflow-hidden">

                            <Search className="ml-5 text-gray-500" />

                            <input
                                type="text"
                                placeholder="Search Company..."
                                className="flex-1 px-4 py-5 outline-none"
                            />

                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5">
                                Search
                            </button>

                        </div>

                        {/* Buttons */}

                        <div className="flex gap-5 mt-10">

                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2">

                                Get Started

                                <ArrowRight size={20} />

                            </button>

                            <button className="border border-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition">

                                Explore Companies

                            </button>

                        </div>

                    </div>

                    {/* Right */}

                    <div>

                        <div className="bg-white rounded-3xl shadow-2xl p-10">

                            <h2 className="text-3xl font-bold mb-8">
                                Placement Statistics
                            </h2>

                            <div className="space-y-6">

                                <div className="flex justify-between text-lg">
                                    <span>Companies</span>
                                    <span className="font-bold text-blue-600">
                                        100+
                                    </span>
                                </div>

                                <div className="flex justify-between text-lg">
                                    <span>Questions</span>
                                    <span className="font-bold text-blue-600">
                                        5000+
                                    </span>
                                </div>

                                <div className="flex justify-between text-lg">
                                    <span>Students</span>
                                    <span className="font-bold text-blue-600">
                                        1000+
                                    </span>
                                </div>

                                <div className="flex justify-between text-lg">
                                    <span>Success Rate</span>
                                    <span className="font-bold text-green-600">
                                        95%
                                    </span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Trusted Companies */}

            <section className="bg-white py-16">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center mb-12">
                        Trusted Companies
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

                        {[
                            "TCS",
                            "Infosys",
                            "Wipro",
                            "Accenture",
                            "Amazon",
                            "Google",
                        ].map((company) => (
                            <div
                                key={company}
                                className="bg-slate-100 hover:bg-blue-600 hover:text-white transition rounded-xl p-6 text-center font-semibold shadow"
                            >
                                {company}
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* Features Section */}

            <section className="py-20 bg-slate-50">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center">
                        Everything You Need For Placement
                    </h2>

                    <p className="text-center text-gray-600 mt-4">
                        One platform for complete placement preparation.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition">

                            <div className="text-5xl">📘</div>

                            <h3 className="text-2xl font-bold mt-5">
                                Aptitude
                            </h3>

                            <p className="text-gray-600 mt-4">
                                Practice aptitude questions from top companies.
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition">

                            <div className="text-5xl">💻</div>

                            <h3 className="text-2xl font-bold mt-5">
                                Technical
                            </h3>

                            <p className="text-gray-600 mt-4">
                                DSA, Java, DBMS, OS, CN interview questions.
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition">

                            <div className="text-5xl">🎤</div>

                            <h3 className="text-2xl font-bold mt-5">
                                HR Interview
                            </h3>

                            <p className="text-gray-600 mt-4">
                                Most frequently asked HR interview questions.
                            </p>

                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 transition">

                            <div className="text-5xl">📄</div>

                            <h3 className="text-2xl font-bold mt-5">
                                Resume Builder
                            </h3>

                            <p className="text-gray-600 mt-4">
                                Build ATS-friendly resumes for placements.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* Statistics */}

            <section className="bg-blue-600 py-20 text-white">

                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-center px-6">

                    <div>
                        <h2 className="text-5xl font-bold">
                            100+
                        </h2>

                        <p className="mt-3 text-lg">
                            Companies
                        </p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">
                            5000+
                        </h2>

                        <p className="mt-3 text-lg">
                            Questions
                        </p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">
                            1000+
                        </h2>

                        <p className="mt-3 text-lg">
                            Students
                        </p>
                    </div>

                    <div>
                        <h2 className="text-5xl font-bold">
                            95%
                        </h2>

                        <p className="mt-3 text-lg">
                            Success Rate
                        </p>
                    </div>

                </div>

            </section>

            <section className="py-20 bg-slate-100">

                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center mb-12">
                        Latest Companies
                    </h2>

                    {
                        loading ?

                            <p className="text-center text-xl">
                                Loading...
                            </p>

                            :

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                                {companies.map((company) => (

                                    <div
                                        key={company._id}
                                        className="bg-white rounded-2xl shadow-lg p-6"
                                    >

                                        <h2 className="text-2xl font-bold">
                                            {company.companyName}
                                        </h2>

                                        <p className="text-gray-600 mt-3">
                                            {company.package}
                                        </p>

                                        <p className="text-gray-600">
                                            {company.location}
                                        </p>

                                        <Link
                                            to={`/company/${company._id}`}
                                            className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                                        >
                                            View Details
                                        </Link>

                                    </div>

                                ))}

                            </div>

                    }

                </div>

            </section>

        </div>
    );
}

export default Home;