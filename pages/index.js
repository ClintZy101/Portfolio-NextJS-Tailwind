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

        <Footer />
 
      </div>
    </div>
  )
}
