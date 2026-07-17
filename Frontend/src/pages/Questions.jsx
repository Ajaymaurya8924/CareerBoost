import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function Questions() {

    const { companyId, type } = useParams();

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [openAnswer, setOpenAnswer] = useState(null);

    useEffect(() => {

        fetchQuestions();

    }, [companyId, type]);

    const fetchQuestions = async () => {

        try {

            const res = await api.get(`/question/${companyId}/${type}`);

            setQuestions(res.data.questions);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    const filteredQuestions = useMemo(() => {

        return questions.filter((q) =>
            q.question.toLowerCase().includes(search.toLowerCase())
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

            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5 mb-8">

                    <div>

                        <h1 className="text-4xl font-bold capitalize">
                            {type} Questions
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Total Questions : {filteredQuestions.length}
                        </p>

                    </div>

                    <input
                        type="text"
                        placeholder="Search Question..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border rounded-xl p-3 w-full md:w-96"
                    />

                </div>
                                {
                    filteredQuestions.length === 0 ? (

                        <div className="bg-white rounded-xl shadow-lg p-10 text-center">

                            <h2 className="text-2xl font-bold">
                                No Questions Found 😔
                            </h2>

                            <p className="text-gray-500 mt-3">
                                Try another search keyword.
                            </p>

                        </div>

                    ) : (

                        <div className="space-y-6">

                            {
                                filteredQuestions.map((item, index) => (

                                    <div
                                        key={item._id}
                                        className="bg-white rounded-2xl shadow-lg p-6"
                                    >

                                        <div className="flex justify-between items-start gap-4">

                                            <h2 className="text-xl font-bold">
                                                Q{index + 1}. {item.question}
                                            </h2>

                                            <button
                                                onClick={() =>
                                                    setOpenAnswer(
                                                        openAnswer === item._id
                                                            ? null
                                                            : item._id
                                                    )
                                                }
                                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg whitespace-nowrap"
                                            >
                                                {
                                                    openAnswer === item._id
                                                        ? "Hide Answer"
                                                        : "Show Answer"
                                                }
                                            </button>

                                        </div>

                                        {
                                            openAnswer === item._id && (

                                                <div className="mt-5 bg-green-50 border-l-4 border-green-600 rounded-lg p-5">

                                                    <h3 className="font-bold text-green-700 mb-2">
                                                        Answer
                                                    </h3>

                                                    <p className="text-gray-700 leading-7">
                                                        {item.answer}
                                                    </p>

                                                </div>

                                            )
                                        }

                                    </div>

                                ))
                            }

                        </div>

                    )
                }

            </div>

        </div>

    );

}

export default Questions;