import { useAuth } from "../context/AuthContext";

function Dashboard() {

    const { user, loading } = useAuth();

    if (loading) {
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

                <div className="bg-white rounded-2xl shadow-lg p-8">

                    <h1 className="text-4xl font-bold">
                        Welcome, {user?.name} 👋
                    </h1>

                    <p className="text-gray-500 mt-3">
                        Prepare daily and crack your dream company.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

                    <div className="bg-white shadow-lg rounded-2xl p-8">

                        <h2 className="text-5xl">
                            🏢
                        </h2>

                        <h3 className="text-2xl font-bold mt-5">
                            Companies
                        </h3>

                        <p className="text-gray-500 mt-2">
                            100+
                        </p>

                    </div>

                    <div className="bg-white shadow-lg rounded-2xl p-8">

                        <h2 className="text-5xl">
                            💻
                        </h2>

                        <h3 className="text-2xl font-bold mt-5">
                            Technical
                        </h3>

                        <p className="text-gray-500 mt-2">
                            3000+
                        </p>

                    </div>

                    <div className="bg-white shadow-lg rounded-2xl p-8">

                        <h2 className="text-5xl">
                            🎤
                        </h2>

                        <h3 className="text-2xl font-bold mt-5">
                            HR Questions
                        </h3>

                        <p className="text-gray-500 mt-2">
                            1000+
                        </p>

                    </div>

                    <div className="bg-white shadow-lg rounded-2xl p-8">

                        <h2 className="text-5xl">
                            📄
                        </h2>

                        <h3 className="text-2xl font-bold mt-5">
                            Aptitude
                        </h3>

                        <p className="text-gray-500 mt-2">
                            2000+
                        </p>

                    </div>

                </div>

                {/* Recent Activity */}

                <div className="bg-white rounded-2xl shadow-lg p-8 mt-10">

                    <h2 className="text-3xl font-bold mb-6">
                        Recent Activity
                    </h2>

                    <ul className="space-y-4 text-gray-700">

                        <li>✅ Login Successful</li>

                        <li>📘 Start solving Aptitude Questions</li>

                        <li>💻 Practice Technical Interview Questions</li>

                        <li>🎤 Prepare HR Interview Questions</li>

                    </ul>

                </div>

            </div>

        </div>

    );
}

export default Dashboard;