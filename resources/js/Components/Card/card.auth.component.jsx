import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function CardAuth(props) {
    const category = props.category.split(" ");

    return (
        <div className="flex items-center justify-between gap-4 border shadow-md p-4 rounded-xl">
            <div className="flex flex-col w-[800px] ">
                <div className="flex gap-2 items-center">
                    <h2 className="font-bold text-lg">{props.title}</h2>
                    <p className="font-extralight text-sm">{props.author}</p>
                </div>
                <div className="flex flex-col gap-5">
                    <div>{props.description}</div>
                    <div className="card-actions justify-start">
                        {category.map((data, index) => (
                            <div
                                className="badge badge-outline text-xs"
                                key={index}
                            >
                                {data}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-3">
                <Link
                    href={route("edit.news")}
                    method="get"
                    data={props.dataEdit}
                    className="btn btn-warning hover:scale-90"
                    as="button"
                >
                    Edit
                </Link>
                <Link
                    href={route("delete.news")}
                    method="post"
                    data={props.dataDelete}
                    className="btn btn-error hover:scale-90"
                    as="button"
                >
                    Delete
                </Link>
            </div>
        </div>
    );
}
