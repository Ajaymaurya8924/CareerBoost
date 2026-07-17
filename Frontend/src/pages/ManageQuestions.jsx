import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

function ManageQuestions() {

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {

        fetchQuestions();

    }, []);

    const fetchQuestions = async () => {

        try {

            const res = await api.get("/question/all");

            setQuestions(res.data.questions);

        } catch (error) {

            console.log(error);

            toast.error("Failed to load questions");

        } finally {

            setLoading(false);

        }

    };

    const deleteQuestion = async (id) => {

        if (!window.confirm("Delete this question?")) return;

        try {

            await api.delete(`/question/delete/${id}`);

            toast.success("Question Deleted");

            fetchQuestions();

        } catch (error) {

            toast.error("Delete Failed");

        }

    };

    const filteredQuestions = useMemo(() => {

        return questions.filter((item) =>
            item.question
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    }, [questions, search]);

    if (loading) {

        return (

            <div className="min-h-screen flex justify-center items-center text-2xl font-bold">
                Loading...
            </div>

        );

    }

    return (

        <div className="min-h-screen bg-slate-100 p-8">

            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-8">

                    <h1 className="text-4xl font-bold">
                        Manage Questions
                    </h1>

                    <input
                        type="text"
                        placeholder="Search Question..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border rounded-xl p-3 w-full md:w-96"
                    />

                </div>
                                <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">

                    <table className="w-full">

                        <thead className="bg-blue-600 text-white">

                            <tr>

                                <th className="p-4">#</th>

                                <th>Type</th>

                                <th>Question</th>

                                <th>Actions</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                filteredQuestions.length === 0 ? (

                                    <tr>

                                        <td
                                            colSpan="4"
                                            className="text-center p-8 text-gray-500"
                                        >
                                            No Questions Found
                                        </td>

                                    </tr>

                                ) : (

                                    filteredQuestions.map((item, index) => (

                                        <tr
                                            key={item._id}
                                            className="border-b hover:bg-slate-50"
                                        >

                                            <td className="p-4 text-center">
                                                {index + 1}
                                            </td>

                                            <td className="text-center capitalize">
                                                {item.type}
                                            </td>

                                            <td className="px-4 py-4">
                                                {item.question}
                                            </td>

                                            <td className="text-center space-x-3">

                                                <Link
                                                    to={`/admin/edit-question/${item._id}`}
                                                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                                                >
                                                    Edit
                                                </Link>

                                                <button
                                                    onClick={() => deleteQuestion(item._id)}
                                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                                                >
                                                    Delete
                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                )

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default ManageQuestions;