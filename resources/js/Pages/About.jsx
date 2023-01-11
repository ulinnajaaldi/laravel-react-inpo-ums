import Navbar from "@/Components/Navbar/navbar.component";
import { Head } from "@inertiajs/inertia-react";
import { BsGithub } from "react-icons/bs";
import React from "react";

export default function About() {
    const datas = [
        {
            id: 1,
            name: "Aldilla Ulinnaja",
            image: "https://i.ibb.co/6YCMJ2V/Whats-App-Image-2022-10-14-at-20-14-08.png",
            nim: "L200200090",
            kelas: "PWBF B",
            todo: "Add feature CRUD, Set up authentication (register login), Change all structure website and style",
        },
        {
            id: 2,
            name: "Rizqy Ramadhan F.A. ",
            image: "https://i.ibb.co/3sb8Cbc/Whats-App-Image-2023-01-11-at-20-19-29.jpg",
            nim: "L200200093",
            kelas: "PWBF B",
            todo: "Initial install base code (Laravel + React), Configure database, Train to card components with faker",
        },
        {
            id: 3,
            name: "Tegar Drajad Syah V.",
            image: "https://i.ibb.co/DMfb0fn/Whats-App-Image-2023-01-12-at-00-52-59.jpg",
            nim: "L200200097",
            kelas: "PWBF B",
            todo: "Add feature pagination, Make navbar components, Change style card components",
        },
    ];
    return (
        <div>
            <Head title={"About"} />
            <div className="flex flex-row justify-between">
                <div className="basis-[20%]">
                    <Navbar />
                </div>
                <div className="flex items-start justify-start px-10 bg-base-200 basis-[80%] flex-col">
                    {datas.map((data) => (
                        <div className="hero bg-base-200 flex" key={data.id}>
                            <div className="hero-content flex-col lg:flex-row">
                                <img
                                    src={data.image}
                                    className="max-w-sm rounded-lg shadow-2xl"
                                />
                                <div>
                                    <h1 className="text-5xl font-bold">
                                        {data.name}
                                    </h1>
                                    <p className="text-sm opacity-80 text-center">
                                        {data.kelas} / {data.nim}
                                    </p>
                                    <p className="py-6">
                                        Work in application development:
                                        {data.todo
                                            .split(", ")
                                            .map((todo, index) => (
                                                <li key={index}>{todo}</li>
                                            ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <a
                        href="https://github.com/ulinnajaaldi/laravel-react-portal-berita.git"
                        target="blank"
                        className="flex items-center justify-center gap-3 w-full border-t p-4"
                    >
                        <BsGithub size={30} />
                        <p className="text-xl font-bold">Repository Code</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
