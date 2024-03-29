import React, { useRef, useState } from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from "@emailjs/browser";
import { motion as m } from "framer-motion";

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        //email service key
        "service_sh1fpau",
        //email template key
        "template_zi1o07n",
        form.current,
        //public key
        "lKv8JPeSrWaDKlsN7"
      )
      .then(
        (result) => {
          console.log(result.text);

          setShowMessage(true);
        },
        (error) => {
          alert("something went wrong");
        }
      );
    // document.getElementById("contact-form").style.display = "none";
    // document.getElementById("success-message").style.display = "inline";
  };
  return (
    <div className="contact bg-gradient-to-b from-[#832388]  to-[#E3436B]  h-[95vh] flex flex-col  items-center relative ">
      <h3 className="text-white font-aboreto font-bold justify-center  lg:top-4 lg:text-[60px] tracking-[12px] absolute text-center uppercase top-1 z-20">
        Contact
      </h3>

      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.8, easy: "easyOut" }}
        className="contact bg-[url('./images/romeo-1.png')] bg-opacity-40 bg-left   m-auto  h-[70vh] lg:w-[100vw] rounded-lg text-center items-center flex flex-col justify-center relative "
      >
        <div className="overlay absolute lg:w-[100vw] lg:h-[70vh] md:h-[95vh] h-[95vh] w-[100%]  bg-black bg-opacity-50  " />
        {showMessage ? (
          <div id="success-message" className="flex top-1">
            <h4 className="text-center  text-3xl pb-4 text-white">
              Thank you for reaching out! <br /> I will get back with you as
              soon as I am able!
            </h4>
          </div>
        ) : (
          <div className="flex flex-col  relative font-roboto  lg:h-[60vh] ">
            <div className="flex items-center text-[10px] lg:text-[20px] text-white space-x-4 justify-center ">
              <PhoneIcon className="text-yellow-500 h-5   w-5 animate-pulse" />
              <p className="font-extralight">‭+1 (504) 510-1424‬</p>
            </div>

            <div className="flex items-center text-[10px] lg:text-[20px] text-white space-x-5 justify-center">
              <MapIcon className="text-yellow-500 h-5 w-5 animate-pulse" />
              <p className="font-extralight">New Orleans. LA</p>
            </div>

            <div className="flex items-center text-[10px] lg:text-[20px] text-white space-x-5 justify-center">
              <EnvelopeIcon className="text-yellow-500 h-8 w-5 animate-pulse" />
              <p className="font-extralight ">creolehunter7@gmail.com</p>
            </div>
            <div className="flex items-center text-white space-x-5 justify-center"></div>
            <form
              className=" flex p-7 relative flex-col h-[400px] w-[80vw] lg:h-[55vh] md:h-[60vh] md:w-[30vw] lg:w-[30vw] bottom-6 pt-10 "
              id="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <label className="p-2 text-white flex">Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="w-full rounded-lg p-2 bg-gray-300"
              />
              <label className="p-2 text-white flex">Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="E-mail"
                className="w-full rounded-lg p-2 bg-gray-300 "
              />
              <label className="p-2 text-white flex">Message</label>
              <textarea
                rows="20"
                cols="40"
                name="message"
                className="w-full rounded-lg bg-gray-300 pb-3 h-[500px] p-3"
              />
              <button
                type="submit"
                value="Send"
                onClick={sendEmail}
                className="border-black rounded-lg p-2 bg-orange-400  m-5 w-[90px] flex justify-center self-center text-center"
              >
                Send
              </button>
            </form>
          </div>
        )}
      </m.div>
    </div>
  );
};

export default Contact;
