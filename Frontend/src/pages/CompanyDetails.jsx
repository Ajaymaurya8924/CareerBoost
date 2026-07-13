import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function CompanyDetails() {

    const { id } = useParams();

    const [company, setCompany] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchCompany();
    }, []);

    const fetchCompany = async () => {

        try {

            const res = await api.get(`/company/${id}`);

            setCompany(res.data.company);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
                Loading...
            </div>
        );
    }

    if (!company) {
        return (
            <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
                Company Not Found
            </div>
        );
    }

    return (
        <div className="bg-slate-100 min-h-screen p-8">

            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">

                <h1 className="text-4xl font-bold">
                    {company.companyName}
                </h1>

                <p className="text-gray-500 mt-4">
                    {company.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">

                    <div className="bg-slate-100 p-5 rounded-xl">
                        <h3 className="font-bold">💰 Package</h3>
                        <p>{company.package}</p>
                    </div>

                    <div className="bg-slate-100 p-5 rounded-xl">
                        <h3 className="font-bold">📍 Location</h3>
                        <p>{company.location}</p>
                    </div>

                    <div className="bg-slate-100 p-5 rounded-xl">
                        <h3 className="font-bold">🎓 Eligibility</h3>
                        <p>{company.eligibility}</p>
                    </div>

                    <div className="bg-slate-100 p-5 rounded-xl">
                        <h3 className="font-bold">📅 Last Date</h3>
                        <p>
                            {new Date(company.lastDate).toLocaleDateString()}
                        </p>
                    </div>

                </div>

                <div className="mt-10">

                    <h2 className="text-2xl font-bold mb-4">
                        Required Skills
                    </h2>

                    <div className="flex flex-wrap gap-3">

                        {company.skills?.map((skill, index) => (

                            <span
                                key={index}
                                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                            >
                                {skill}
                            </span>

                        ))}

                    </div>

                </div>

                <div className="mt-10">

                    <h2 className="text-2xl font-bold mb-4">
                        Selection Process
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">

                        {company.selectionProcess?.map((step, index) => (

                            <li key={index}>
                                {step}
                            </li>

                        ))}

                    </ul>

                </div>

                <a
                    href={company.applyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-10 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700"
                >
                    Apply Now
                </a>

            </div>

        </div>
    );
}

export default CompanyDetails;