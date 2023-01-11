import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import CardAuth from "@/Components/Card/card.auth.component";

export default function Dashboard(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [notif, setNotif] = useState(false);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
        };
        Inertia.post("/news", data);
        setTitle("");
        setDescription("");
        setCategory("");
        setNotif(true);
    };

    useEffect(() => {
        if (!props.myNews) {
            Inertia.get("/news");
        }
        return;
    }, []);

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-base-100 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="flex flex-col gap-4 m-10">
                            {!notif ? (
                                <h1>Masukan Berita</h1>
                            ) : (
                                <div className="alert alert-success shadow-lg">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="stroke-current flex-shrink-0 h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        <span>{props.flash.message}</span>
                                    </div>
                                </div>
                            )}
                            <input
                                type="text"
                                placeholder="Title"
                                className="input input-bordered w-full bg-neutral-content text-accent-content"
                                onChange={(title) =>
                                    setTitle(title.target.value)
                                }
                                value={title}
                            />
                            <input
                                type="text"
                                placeholder="Description"
                                className="input input-bordered w-full bg-neutral-content text-accent-content"
                                onChange={(description) =>
                                    setDescription(description.target.value)
                                }
                                value={description}
                            />
                            <input
                                type="text"
                                placeholder="Category"
                                className="input input-bordered w-full bg-neutral-content text-accent-content"
                                onChange={(category) =>
                                    setCategory(category.target.value)
                                }
                                value={category}
                            />
                            <button
                                className="btn btn-accent"
                                onClick={() => handleSubmit()}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        {props.myNews && props.myNews.length > 0 ? (
                            props.myNews.map((news, index) => (
                                <CardAuth
                                    key={index}
                                    title={news.title}
                                    description={news.description}
                                    category={news.category}
                                    dataEdit={{ id: news.id }}
                                    dataDelete={{ id: news.id }}
                                />
                            ))
                        ) : (
                            <p>Data Kosong</p>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
