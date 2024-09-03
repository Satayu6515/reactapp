import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
    return (
        <>
            <div className="w-64 h-screen bg-yellow-200 text-white-800">
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
                </div>
                <nav className="mt-10">
                    <Link to="/Dashboard" className="block py-3 px-4 hober:bg-gray-700">
                        Dashboard
                    </Link>
                    <Link to="/users" className="block py-3 px-4 hover:bg-gray-700">
                        Users
                    </Link>
                    <Link to="/About" className="block py-3 px-4 hover:bg-gray-700">
                        About
                    </Link>
                    <Link to="/Contact" className="block py-3 px-4 hover:bg-gray-700">
                        Contact
                    </Link>

                </nav>


            </div>
        
        </>
    );
}