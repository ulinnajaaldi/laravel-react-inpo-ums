import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/inertia-react";
import { BiSun, BiMoon } from "react-icons/bi";
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
        <div className="navbar bg-base-100 mb-5 shadow-md px-10 sticky top-0 z-40">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Inpo UMS</a>
            </div>
            <div className="flex-none gap-4">
                <div
                    className="flex items-center justify-center tooltip tooltip-left"
                    data-tip="Change Theme"
                >
                    <button onClick={toggleTheme}>
                        {theme === "dark" ? (
                            <BiMoon size={25} />
                        ) : (
                            <BiSun size={25} />
                        )}
                    </button>
                </div>

                {!user ? (
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img src="https://i.ibb.co/K76Vk3R/profil-svg.jpg" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <div>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Register
                                    </Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                ) : (
                    <div className="dropdown dropdown-end">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full flex items-center justify-center bg-primary-focus text-primary-content text-xl">
                                <p>{user.name.slice(0, 1)}</p>
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
                                    <Link href="" as="button">
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
