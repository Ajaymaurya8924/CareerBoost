import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function EditQuestion() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [companies, setCompanies] = useState([]);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        company: "",
        type: "technical",
        question: "",
        answer: "",
    });

    useEffect(() => {

        fetchCompanies();

        fetchQuestion();

    }, []);

    const fetchCompanies = async () => {

        try {

            const res = await api.get("/company/all");

            setCompanies(res.data.companies);

        } catch (error) {

            console.log(error);

        }

    };

    const fetchQuestion = async () => {

        try {

            const res = await api.get(`/question/single/${id}`);

            setFormData(res.data.question);

        } catch (error) {

            toast.error("Question Not Found");

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

            await api.put(`/question/update/${id}`, formData);

            toast.success("Question Updated Successfully");

            navigate("/admin/manage-questions");

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

                    Edit Question

                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <select
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                    >

                        {
                            companies.map(company => (

                                <option
                                    key={company._id}
                                    value={company._id}
                                >
                                    {company.companyName}
                                </option>

                            ))
                        }

                    </select>

                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full border p-4 rounded-xl"
                    >

                        <option value="technical">Technical</option>

                        <option value="aptitude">Aptitude</option>

                        <option value="hr">HR</option>

                    </select>

                                        <textarea
                        name="question"
                        placeholder="Enter Question"
                        value={formData.question}
                        onChange={handleChange}
                        rows="4"
                        className="w-full border p-4 rounded-xl"
                        required
                    />

                    <textarea
                        name="answer"
                        placeholder="Enter Answer"
                        value={formData.answer}
                        onChange={handleChange}
                        rows="6"
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
                        {
                            loading
                                ? "Updating Question..."
                                : "Update Question"
                        }
                    </button>

                </form>

            </div>

        </div>

    );

}

export default EditQuestion;