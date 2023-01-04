import React, { useState } from "react";
import Navbar from "@/Components/Navbar/navbar.component";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function EditNews(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id,
            title,
            description,
            category,
        };
        Inertia.post("/news/update", data);
        setTitle("");
        setDescription("");
        setCategory("");
    };

    return (
        <div>
            <Navbar user={props.auth.user} />
            <Head title={props.title} />
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div className="flex flex-col gap-4 m-10">
                    <input
                        type="text"
                        placeholder="Title"
                        className="input input-bordered w-full"
                        onChange={(title) => setTitle(title.target.value)}
                        defaultValue={props.myNews.title}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="input input-bordered w-full"
                        onChange={(description) =>
                            setDescription(description.target.value)
                        }
                        defaultValue={props.myNews.description}
                    />
                    <input
                        type="text"
                        placeholder="Category"
                        className="input input-bordered w-full"
                        onChange={(category) =>
                            setCategory(category.target.value)
                        }
                        defaultValue={props.myNews.category}
                    />
                    <button className="btn" onClick={() => handleSubmit()}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}
