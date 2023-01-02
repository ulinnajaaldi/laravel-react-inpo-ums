import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";

export default function Homepages(props) {
    console.log(props);
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <Head title={props.title} />
            <div>
                {props.news ? (
                    props.news.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className="p-5 m-2 border shadow-lg"
                            >
                                <p className="text-2xl">{data.title}</p>
                                <p className="text-sm">{data.description}</p>
                                <i>{data.category}</i>
                                <i>{data.author}</i>
                            </div>
                        );
                    })
                ) : (
                    <p>Data Kosong</p>
                )}
            </div>
        </div>
    );
}
