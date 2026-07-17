import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function Students() {

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {

        try {

            const res = await api.get("/auth/students");

            setStudents(res.data.students);

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to Load Students"
            );

        } finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
                Loading Students...
            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-8">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-8">

                    <div>

                        <h1 className="text-4xl font-bold">
                            Registered Students
                        </h1>

                        <p className="text-gray-500 mt-2">
                            View all students registered on CareerBoost.
                        </p>

                    </div>

                    <Link
                        to="/admin/dashboard"
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 text-center"
                    >
                        Back to Admin Dashboard
                    </Link>

                </div>

                {/* Total Students */}

                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

                    <h2 className="text-xl font-semibold text-gray-600">
                        Total Registered Students
                    </h2>

                    <p className="text-5xl font-bold text-blue-600 mt-3">
                        {students.length}
                    </p>

                </div>

                {/* Students Table */}

                <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">

                    <table className="w-full">

                        <thead className="bg-blue-600 text-white">

                            <tr>

                                <th className="p-4 text-center">
                                    #
                                </th>

                                <th className="p-4 text-left">
                                    Name
                                </th>

                                <th className="p-4 text-left">
                                    Email
                                </th>

                                <th className="p-4 text-center">
                                    Role
                                </th>

                                <th className="p-4 text-center">
                                    Registered Date
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {students.length === 0 ? (

                                <tr>

                                    <td
                                        colSpan="5"
                                        className="text-center p-10 text-gray-500"
                                    >
                                        No Students Found
                                    </td>

                                </tr>

                            ) : (

                                students.map((student, index) => (

                                    <tr
                                        key={student._id}
                                        className="border-b hover:bg-slate-50"
                                    >

                                        <td className="p-4 text-center">
                                            {index + 1}
                                        </td>

                                        <td className="p-4 font-semibold">
                                            {student.name}
                                        </td>

                                        <td className="p-4">
                                            {student.email}
                                        </td>

                                        <td className="p-4 text-center">

                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full capitalize">
                                                {student.role}
                                            </span>

                                        </td>

                                        <td className="p-4 text-center">

                                            {student.createdAt
                                                ? new Date(
                                                    student.createdAt
                                                ).toLocaleDateString()
                                                : "N/A"}

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default Students;