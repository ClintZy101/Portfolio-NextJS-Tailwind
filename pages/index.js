import Head from 'next/head'
import BackgroundAnimation from '../components/Background'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Link from 'next/link'
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-dark-bg z-0">

      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" relative h-screen overflow-hidden">

        <Header />

        {/* LANDING  */}
        <main className=" relative text-center h-screen bg-center ">

          <div className=" absolute w-screen z-50 top-48">

              <Introduction />
            
              <Link href="/contactme">
                <button class="bg-gray-800 transition duration-300 ease-in-out bg-transparent hover:bg-yellow-500 text-yellow-600 font-semibold hover:text-white py-2 px-4 mx-auto border border-yellow-600 hover:border-transparent rounded-sm mt-8 text-2xl lg:4xl">
                  Let's Talk
                </button>
              </Link>
          </div>
          {/* Background Animation */}

          <BackgroundAnimation className="object-cover z-10 w-full absolute" />

        </main>

        <Footer />

      </div>
    </div>
  )
}
