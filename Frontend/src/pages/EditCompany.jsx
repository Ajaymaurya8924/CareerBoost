import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function EditCompany() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        companyName: "",
        logo: "",
        description: "",
        package: "",
        location: "",
        eligibility: "",
        skills: "",
        selectionProcess: "",
        applyLink: "",
        lastDate: "",
    });

    useEffect(() => {

        fetchCompany();

    }, []);

    const fetchCompany = async () => {

        try {

            const res = await api.get(`/company/${id}`);

            const company = res.data.company;

            setFormData({
                companyName: company.companyName,
                logo: company.logo,
                description: company.description,
                package: company.package,
                location: company.location,
                eligibility: company.eligibility,
                skills: company.skills.join(", "),
                selectionProcess: company.selectionProcess.join(", "),
                applyLink: company.applyLink,
                lastDate: company.lastDate.slice(0, 10),
            });

        } catch (error) {

            console.log(error);

        }

    };

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

            const data = {

                ...formData,

                skills: formData.skills
                    .split(",")
                    .map(item => item.trim()),

                selectionProcess: formData.selectionProcess
                    .split(",")
                    .map(item => item.trim()),

            };

            await api.put(`/company/update/${id}`, data);

         toast.success("Company Updated Successfully");

            navigate("/admin/manage-companies");

        } catch (error) {

           toast.error("Update Failed");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-slate-100 py-10">

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

                <h1 className="text-4xl font-bold text-center mb-8">
                    Edit Company
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                        required
                    />

                    <input
                        type="text"
                        name="logo"
                        placeholder="Logo URL"
                        value={formData.logo}
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                    />

                    <textarea
                        name="description"
                        rows="4"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                        required
                    />

                    <div className="grid md:grid-cols-2 gap-5">

                        <input
                            type="text"
                            name="package"
                            placeholder="Package"
                            value={formData.package}
                            onChange={handleChange}
                            className="border p-4 rounded-xl"
                            required
                        />

                        <input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={formData.location}
                            onChange={handleChange}
                            className="border p-4 rounded-xl"
                            required
                        />

                    </div>

                    <input
                        type="text"
                        name="eligibility"
                        placeholder="Eligibility"
                        value={formData.eligibility}
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                        required
                    />

                                        <input
                        type="text"
                        name="skills"
                        placeholder="Skills (Java, DSA, SQL, React)"
                        value={formData.skills}
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                        required
                    />

                    <input
                        type="text"
                        name="selectionProcess"
                        placeholder="Selection Process (Aptitude, Coding, Technical, HR)"
                        value={formData.selectionProcess}
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                        required
                    />

                    <input
                        type="url"
                        name="applyLink"
                        placeholder="Apply Link"
                        value={formData.applyLink}
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                    />

                    <input
                        type="date"
                        name="lastDate"
                        value={formData.lastDate}
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-4 rounded-xl text-white font-semibold ${
                            loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                        {loading ? "Updating Company..." : "Update Company"}
                    </button>

                </form>

            </div>

        </div>

    );

}

export default EditCompany;