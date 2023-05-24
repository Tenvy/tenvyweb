import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faInstagram, } from "@fortawesome/free-brands-svg-icons";
import styles from "@/styles/Home.module.css";

const ContactDetail = () => {
	let [username,setUsername] = useState("")
	let [email,setEmail] = useState("")
	let [messages,setMessages] = useState("")
	let [required,setRequired] = useState(false)
	let [send,setSend] = useState(null)

  const form = useRef();
	const sendButton = useRef();

  const serviceId = process.env.SERVICE_ID
  const templateId = process.env.TEMPLATE_ID
  const userPublicKey = process.env.USER_PUBLIC_KEY  

  const sendEmail = (e) => {
    e.preventDefault();
		
		if (username.length == 0 || email.length == 0 || messages.length == 0 ) {
			setRequired(true)
			return
		}

    emailjs
      .sendForm(
        `${serviceId}`,
        `${templateId}`,
        form.current,
        `${userPublicKey}`
      )
      .then(
        (result) => {
					setSend(true)
					sendButton.current.innerHTML = "Email Sent!"
        },
        (error) => {
					setSend(true)
					sendButton.current.innerHTML = "Failed to Sent!"
        }
      );
  };

  return (
    <div className={`container mx-auto ${styles.animateFadeIn}`}>
      <div className="w-full p-4 md:p-20 flex justify-center items-start md:items-center md:h-screen pt-[100px] pb-[100px]">
        <div className=" bg-white bg-opacity-5 rounded flex flex-col md:flex-row">
          <div className="bg-white rounded text-black">
            <div className="p-6">
              <div className="text-2xl font-bold pb-2">Contact Information</div>
              <div className="text-sm">
                Tell me a bit about yourself, and we'll get in touch as soon as
                possible.
              </div>
            </div>
            <div className="py-6 px-10 flex flex-col gap-5">
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faPhone} className="w-5" />
                <span>+62 821-4557-5985</span>
              </div>
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-5" />
                <span>tenvystack@gmail.com</span>
              </div>
            </div>
            <div className="p-6 flex gap-4 items-center">
              <a href="https://instagram.com/riskiksn/" target="_blank">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-6"
                  style={{ color: "#000000" }}
                />
              </a>
              <a
                href="https://discord.com/users/816154291928432690"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="w-7"
                  style={{ color: "#000000" }}
                />
              </a>
              <a href="https://github.com/tenvy" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-6"
                  style={{ color: "#000000" }}
                />
              </a>
            </div>
          </div>
          <div className="p-6 md:w-[80%]">
            <form ref={form} className="h-full flex flex-col justify-between" onSubmit={sendEmail}>
							<div className="lg:h-full">
							<label className="text-2xl font-bold mb-2">Send me an email</label>
              <div className="flex flex-col lg:flex-row my-2 gap-4">
                <input
									onChange={e=>setUsername(e.target.value)}
                  className={`bg-transparent border-b outline-none ${required&&username.length<=0? "border-red-600" : ""} focus:placeholder:text-gray-400 placeholder:text-white border-gray-400 focus:border-white duration-200 p-1`}
                  type="text"
                  name="username"
                  placeholder="Enter Name"
                />
								<input
								onChange={e=>setEmail(e.target.value)}
                  className={`bg-transparent border-b outline-none ${required&&email.length<=0? "border-red-600" : ""} focus:placeholder:text-gray-400 placeholder:text-white border-gray-400 focus:border-white duration-200 p-1`}
                  type="email"
                  name="email_id"
                  placeholder="Enter Email"
                />
              </div>
								<div className="flex flex-col gap-1 lg:h-[60%]">
									<label>Messages</label>
									<textarea onChange={e=>setMessages(e.target.value)} className={`bg-transparent resize-none lg:h-full border rounded outline-none ${required&&messages.length<=0? "border-red-600" : ""} focus:placeholder:text-gray-400 placeholder:text-white border-gray-400 focus:border-white duration-200 p-1`} name="message" />
								</div>
								</div>
							<div className="flex items-center justify-between">
      				  <input className="bg-white cursor-pointer text-black py-1 px-4 rounded mt-2 font-semibold" type="submit" value="Send" />
								<div ref={sendButton} className={`mt-2 ${send? "opacity-100":"opacity-0"} duration-200`}></div>
							</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
