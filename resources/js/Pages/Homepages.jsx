import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar/navbar.component";
import Card from "@/Components/Card/card.component";
import Pagination from "@/Components/Pagination/pagination.component";

export default function Homepages(props) {
    return (
        <div>
            <Navbar user={props.auth.user} />
            <Head title={props.title} />
            <div className="flex items-center justify-center px-10">
                <div className=" grid grid-cols-1 gap-5">
                    <Card news={props.news.data} />
                </div>
            </div>
            <div className="text-center">
                <Pagination meta={props.news.meta} />
            </div>
        </div>
    );
}
