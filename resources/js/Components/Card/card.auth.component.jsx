import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function CardAuth(props) {
    console.log("card auth: ", props);
    return (
        <div className="card w-full md:w-96 bg-base-100 shadow-xl">
            <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{props.category}</div>
                </div>
                <div className="flex gap-3">
                    <Link
                        href={route("edit.news")}
                        method="get"
                        data={props.dataEdit}
                        className="btn btn-success"
                        as="button"
                    >
                        Edit
                    </Link>
                    <Link
                        href={route("delete.news")}
                        method="post"
                        data={props.dataDelete}
                        className="btn btn-success"
                        as="button"
                    >
                        Delete
                    </Link>
                </div>
            </div>
        </div>
    );
}
