import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";
import React, { useState, useEffect } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

export default function Guest({ children }) {
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
        <div className="flex items-center justify-center h-[100vh] pt-6 sm:pt-0 bg-base-100">
            <div className="absolute right-10 top-5">
                <button onClick={toggleTheme}>
                    {theme === "dark" ? (
                        <BiMoon size={25} />
                    ) : (
                        <BiSun size={25} />
                    )}
                </button>
            </div>
            <div className="flex flex-col items-center justify-center bg-base-200 bg-opacity-60 h-full">
                <Link href="/" className="text-xl font-extrabold">
                    Inpo UMS
                </Link>
                <p className="w-8/12 pt-4 opacity-80 text-sm text-center">
                    Social networking services in the form of online microblogs
                    that can be used by users to send information
                </p>
                <img
                    src="https://i.ibb.co/4Tm0yz7/Login-amico-svg.png"
                    alt="Login-amico-svg"
                    className="w-96"
                />
            </div>
            <div className="bg-base-100 h-full w-1/2 flex flex-col items-center justify-center">
                <div className="w-[26rem] mt-6 px-6 py-4 overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
