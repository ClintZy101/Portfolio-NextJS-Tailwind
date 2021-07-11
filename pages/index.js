import Head from 'next/head'
import BackgroundAnimation from '../components/Background'
import Header from '../components/Header'
import Introduction from '../components/Introduction'


export default function Home() {
  return (
    <div className="bg-dark-bg z-0">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="h-screen overflow-hidden relative">
    <Header />
      <main className=" flex-col relative text-center">
        <div className=" absolute  w-screen z-50 mt-10 sm:mt-20 lg:mt-24 ">
        <Introduction />
        </div>
        <div className="">
        <BackgroundAnimation className="object-cover z-10 h-100 w-full absolute" />
        </div>
      </main>
      <div className="absolute bottom-0   h-20 w-screen  bg-gradient-to-t from-[#06202A]"></div>
    </div>
      
   
        {/* bg-gradient-to-l from-[#06202A] */}
    </div>
  )
}
