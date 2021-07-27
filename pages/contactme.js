import React from 'react';
import emailjs from 'emailjs-com';
import Header from '../components/Header';
import BackgroundAnimation from '../components/Background';



export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_wrgzppw', e.target, 'user_TY0h4HGZ0vIsZoWZ4Y94Q')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className=" bg-dark-bg z-0 ">
      <Header />


      <main className="h-screen  text-center">

                    {/* CONTACT FORM  */}
        <div className=" absolute  w-screen z-50 mt-10  ">

          <form className="" onSubmit={sendEmail} 
          className="bg-transparent text-white border border-yellow-600 w-3/4 mx-auto p-5 rounded-sm gap-4 grid grid-cols-1">
            <h1 className="text-2xl">Message Form</h1>
            
            <div>
              <input type="text" name="name" placeholder="Name" className="bg-transparent text-white outline-none w-full h-10 items-center flex border border-yellow-600 p-2" />
            </div>
            <div>
              <input type="email" name="email" placeholder="Email" className="bg-transparent text-white outline-none w-full h-10 items-center flex border border-yellow-600 p-2" />
            </div>
            <div>
              <input type="text" name="subject" placeholder="Subject" className="bg-transparent text-white outline-none w-full h-10 items-center flex border border-yellow-600 p-2"/>
            </div>
            <div>
              <textarea type="text" name="message" placeholder="Message" 
              // rows={3}
              className="h-20 bg-transparent text-white outline-none w-full items-center flex border border-yellow-600 p-2"></textarea>
            </div>
            <input
              type="submit"
              value="Send Message"
              class="transition duration-300 ease-in-out bg-transparent hover:bg-yellow-500 text-yellow-600 font-semibold hover:text-white  border border-yellow-600 hover:border-transparent rounded-sm mt-6 text-2xl lg:4xl cursor-pointer w-3/4 mx-auto">
            </input>
          </form>

        </div>

        {/* Background Animation */}
       
          <BackgroundAnimation className="object-cover z-10 h-100 w-full absolute" />

      </main>
    </div>


  );
}