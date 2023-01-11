import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { BiSun, BiMoon } from "react-icons/bi";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import "./navbar.css";

export default function Navbar({ user }) {
    const [theme, setTheme] = useState(
        window.localStorage.getItem("theme") || "light"
    );

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="h-screen bg-base-100 shadow-md px-5  sticky top-0 z-40 flex flex-col justify-between pt-3 pb-20">
            <div className="flex items-center justify-between">
                <Link
                    href="/"
                    className="px-5 py-3 text-xl font-extrabold hover:bg-base-200 hover:rounded-full cursor-default"
                >
                    Inpo UMS
                </Link>
                <button onClick={toggleTheme} className="pr-5">
                    {theme === "dark" ? (
                        <div className="p-2 hover:bg-base-200 rounded-full">
                            <BiMoon size={25} />
                        </div>
                    ) : (
                        <div className="p-2 hover:bg-base-200 rounded-full">
                            <BiSun size={25} />
                        </div>
                    )}
                </button>
            </div>
            <div className="flex flex-col gap-2">
                {!user ? (
                    <div>
                        <Link
                            href="about"
                            className="flex gap-4 px-5 py-3 hover:bg-base-200 hover:rounded-full"
                        >
                            <BsPeople size={25} />
                            <p>About Us</p>
                        </Link>

                        <div className="dropdown dropdown-right dropdown-end">
                            <label
                                tabIndex={0}
                                className="flex gap-4 items-center px-5 py-3 hover:bg-base-200 hover:rounded-full"
                            >
                                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                    <img src="https://i.ibb.co/w6nbqQr/image.png" />
                                </div>
                                <div>
                                    <p className="text-sm">Any information?</p>
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
                            >
                                <div>
                                    <li>
                                        <Link href={route("login")} as="button">
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href={route("register")}
                                            as="button"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className="dropdown dropdown-right dropdown-end">
                        <label
                            tabIndex={0}
                            className="flex gap-4 items-center px-5 py-3 hover:bg-base-200 hover:rounded-full"
                        >
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-focus text-primary-content">
                                {(
                                    user.email.split("@")[0].charAt(0) +
                                    user.email
                                        .split("@")[0]
                                        .charAt(
                                            user.email.split("@")[0].length - 1
                                        )
                                ).toUpperCase()}
                            </div>
                            <div>
                                <p className="text-sm font-bold">{user.name}</p>
                                <p className="text-sm font-extralight opacity-80">
                                    {user.email}
                                </p>
                            </div>
                            <div>
                                <IoEllipsisHorizontalSharp />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <div>
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        className="justify-between"
                                        as="button"
                                    >
                                        Dashboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("profile.edit")}
                                        as="button"
                                    >
                                        Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}
