import Head from 'next/head'
import BackgroundAnimation from '../components/Background'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import { AiFillGithub, } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-dark-bg z-0">
      {/* HEADER */}
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" relative h-screen overflow-hidden">

        <Header className=""/>

                                {/* LANDING  */}
        <main className=" flex flex-col text-center h-screen">

          <div className=" absolute w-screen z-50 mt-24 xl:mt-40  sm:pt-6">
              <Introduction />
              <Link href="/contactme">
                <button class="transition duration-300 ease-in-out bg-transparent hover:bg-yellow-500 text-yellow-600 font-semibold hover:text-white py-2 px-4 border border-yellow-600 hover:border-transparent rounded-sm mt-8 text-2xl lg:4xl">
                  Let's Talk
                </button>
              </Link>
          </div>
                          {/* Background Animation */}

            <BackgroundAnimation className="object-cover z-10 h-100 w-full absolute" />

        </main>


        {/* FOOTER */}
        <div className="absolute bottom-0   h-20 w-screen  bg-gradient-to-t from-[#06202A] text-yellow-600 items-center text-center flex">
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
      </div>

    </div>
  )
}
