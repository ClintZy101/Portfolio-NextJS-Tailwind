import Link from 'next/link'
import React from 'react'
import { AiFillGithub, } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="absolute bottom-0   h-20 w-screen  bg-gradient-to-t from-[#06202A] text-white items-center text-center flex">
            <div className="w-screen items-center flex justify-center space-x-5 ">
                <Link href="https://github.com/clintzy101" passHref={true}>
                    <AiFillGithub size={32} className="cursor-pointer hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out" />
                </Link>
                <Link href="https://www.facebook.com/clinton.taypoc" passHref={true}>
                    <FaFacebook size={32} className="cursor-pointer hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out" />
                </Link>
                <Link href="https://twitter.com/Clint83115277" passHref={true}>
                    <FaTwitter size={32} className="cursor-pointer hover:text-yellow-500 hover:scale-110 transition duration-300 ease-in-out" />
                </Link>
            </div>
        </div>
    )
}

export default Footer
