import React from 'react'
import { FiCommand } from "react-icons/fi";
import { TiHomeOutline, TiLightbulb, TiTimesOutline, TiUserOutline, TiThMenuOutline } from "react-icons/ti";
import NavOptions from './NavOptions';
import Link from 'next/link'

const Header = () => {

    return (
        <header className="font-sans font-semibold flex items-center justify-between  text-yellow-600 p-5 mx-5 text-xl lg:text-2xl  ">
            <Link href="/">
                <span className="items-center  flex cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out text-2xl lg:text-3xl">
                    <FiCommand className="mx-px" />
                    <h1 className="font-serif">CT</h1>
                </span>
            </Link>


            <div className="flex space-x-5">
                <Link href="/">
                    <div className="">
                        <NavOptions title="Home" />
                        <TiHomeOutline size={32}
                            className="transition duration-300 ease-in-out p-px  cursor-pointer  md:hidden hover:scale-105 hover:text-yellow-500 hover:border hover:border-yellow-500 rounded-sm" />
                    </div>
                </Link>

                <div>
                    <NavOptions title="Projects" />
                    <TiLightbulb size={32}
                        className="transition duration-300 ease-in-out  p-px cursor-pointer  md:hidden hover:scale-105 hover:text-yellow-500 hover:border hover:border-yellow-500 rounded-sm" />
                </div>
                <div>
                    <NavOptions title="About" />
                    <TiUserOutline size={32}
                        className="transition duration-300 ease-in-out  p-px cursor-pointer  md:hidden hover:scale-105 hover:text-yellow-500 hover:border hover:border-yellow-500 rounded-sm" />
                </div>


            </div>


        </header>
    )
}

export default Header
