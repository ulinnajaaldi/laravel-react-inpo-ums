import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Pagination({ meta }) {
    const prev = meta.links[0] ? meta.links[0].url : null;
    const next = meta.links[meta.links.length - 1]
        ? meta.links[meta.links.length - 1].url
        : null;
    const current = meta.current_page;
    const lastPage = meta.last_page;

    return (
        <div className="btn-group m-5">
            <Link href={prev} className="btn " disabled={current === 1}>
                «
            </Link>
            <button className="btn ">Page {current}</button>
            <Link href={next} className="btn " disabled={current === lastPage}>
                »
            </Link>
        </div>
    );
}
