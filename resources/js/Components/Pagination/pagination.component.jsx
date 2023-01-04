import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Pagination({ meta }) {
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="btn-group">
            <Link href={prev} className="btn ">
                «
            </Link>
            <button className="btn ">{current}</button>
            <Link href={next} className="btn ">
                »
            </Link>
        </div>
    );
}
