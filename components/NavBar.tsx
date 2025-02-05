import React from "react";
import Image from "next/image";
import {UserButton } from "@clerk/nextjs";

function NavBar() {
    return (
        <div className="flex justify-between p-5 shadow-md bg-gradient-to-r from-gray-800 to-gray-500"> 
            <img src="/logo.png" alt="logo" width={100} height={200} />

        <div className="flex gap-20">
            <h2 className=
            "hover:bg-red-500 px-5 cursor-pointer p-5 rounded-3xl hover:text-white">
                Home</h2>
            <h2 className=
            "hover:bg-red-500 px-5 cursor-pointer p-5 rounded-3xl hover:text-white"> About</h2>
            <h2 className=
            "hover:bg-red-500 px-5 cursor-pointer p-5 rounded-3xl hover:text-white"> Contact</h2>
            <h2 className=
            "hover:bg-red-500 px-5 cursor-pointer p-5 rounded-3xl hover:text-white"> History</h2>
        </div>
        <UserButton />
       </div> 
    );
}

export default NavBar;