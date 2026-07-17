import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function ManageCompanies() {

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

    const deleteCompany = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure?"
        );

        if (!confirmDelete) return;

        try {

            await api.delete(`/company/delete/${id}`);

            fetchCompanies();

            alert("Company Deleted");

        } catch (error) {

            alert("Delete Failed");

        }

    };

    if (loading) {

        return (
            <div className="min-h-screen flex justify-center items-center text-2xl">
                Loading...
            </div>
        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-8">

            <div className="max-w-7xl mx-auto">

                <div className="flex justify-between items-center mb-8">

                    <h1 className="text-4xl font-bold">
                        Manage Companies
                    </h1>

                    <Link
                        to="/admin/add-company"
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl"
                    >
                        + Add Company
                    </Link>

                </div>
                                <div className="overflow-x-auto bg-white rounded-xl shadow">

                    <table className="w-full">

                        <thead className="bg-blue-600 text-white">

                            <tr>

                                <th className="p-4">
                                    Company
                                </th>

                                <th>
                                    Package
                                </th>

                                <th>
                                    Location
                                </th>

                                <th>
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                companies.map((company) => (

                                    <tr
                                        key={company._id}
                                        className="border-b text-center"
                                    >

                                        <td className="p-4">
                                            {company.companyName}
                                        </td>

                                        <td>
                                            {company.package}
                                        </td>

                                        <td>
                                            {company.location}
                                        </td>

                                        <td className="space-x-3">

                                            <Link
                                                to={`/admin/edit-company/${company._id}`}
                                                className="bg-yellow-500 text-white px-4 py-2 rounded"
                                            >
                                                Edit
                                            </Link>

                                            <button
                                                onClick={() => deleteCompany(company._id)}
                                                className="bg-red-600 text-white px-4 py-2 rounded"
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>

                                ))
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default ManageCompanies;