import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-base-300 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
                    : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-base-content hover:text-opacity-80 hover:border-gray-300 focus:outline-none focus:text-opacity-50 focus:border-gray-300 transition duration-150 ease-in-out"
            }
        >
            {children}
        </Link>
    );
}
