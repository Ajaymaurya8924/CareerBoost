import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Profile() {
    const { user, logout, loading } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate("/login");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 py-10 px-6">

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

                <div className="flex flex-col items-center">

                    <div className="w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>

                    <h1 className="text-3xl font-bold mt-5">
                        {user?.name}
                    </h1>

                    <p className="text-gray-500 mt-2">
                        {user?.email}
                    </p>

                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-10">

                    <div className="bg-slate-100 rounded-xl p-5">

                        <h3 className="font-semibold text-gray-600">
                            Full Name
                        </h3>

                        <p className="text-xl font-bold mt-2">
                            {user?.name}
                        </p>

                    </div>

                    <div className="bg-slate-100 rounded-xl p-5">

                        <h3 className="font-semibold text-gray-600">
                            Email
                        </h3>

                        <p className="text-xl font-bold mt-2">
                            {user?.email}
                        </p>

                    </div>

                    <div className="bg-slate-100 rounded-xl p-5">

                        <h3 className="font-semibold text-gray-600">
                            Role
                        </h3>

                        <p className="text-xl font-bold mt-2">
                            {user?.role || "Student"}
                        </p>

                    </div>

                    <div className="bg-slate-100 rounded-xl p-5">

                        <h3 className="font-semibold text-gray-600">
                            Account Status
                        </h3>

                        <p className="text-xl font-bold mt-2 text-green-600">
                            Active
                        </p>

                    </div>

                </div>

                <div className="mt-10 flex justify-center">

                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Profile;