import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function AddCompany() {

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
                    .map((item) => item.trim()),

                selectionProcess: formData.selectionProcess
                    .split(",")
                    .map((item) => item.trim()),
            };

            const res = await api.post("/company/add", data);
toast.success(res.data.message);

            navigate("/admin/dashboard");

        } catch (error) {

          toast.error("Failed to Add Company");

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="min-h-screen bg-slate-100 py-10">

            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

                <h1 className="text-4xl font-bold text-center mb-8">
                    Add Company
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
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className="w-full border p-4 rounded-xl"
                        required
                    />

                    <div className="grid md:grid-cols-2 gap-5">

                        <input
                            type="text"
                            name="package"
                            placeholder="Package (e.g. 8 LPA)"
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
                        placeholder="Skills (Example: Java, DSA, SQL, React)"
                        value={formData.skills}
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                        required
                    />

                    <input
                        type="text"
                        name="selectionProcess"
                        placeholder="Selection Process (Example: Aptitude, Coding, Technical, HR)"
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
                        {loading ? "Adding Company..." : "Add Company"}
                    </button>

                </form>

            </div>

        </div>

    );

}

export default AddCompany;