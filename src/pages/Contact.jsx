import { useState } from "react"
import { data } from "../firebase/config"
import confetti from 'canvas-confetti'

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        data.collection('contact').add({name: name, email: email, message: message}).then(() => {
            confetti();
            
        }).catch(err => {
            alert(err.message);
        })

        setName('')
        setEmail('')
        setMessage('')
        
    }
    
  return (
    <>
    <div className="flex justify-center items-center w-screen h-screen bg-gray-900" id='background_colored'>
    <form onSubmit={handleSubmit} method='POST' className="w-full md:w-1/2 max-sm:w-1/2 border border-amber-500 p-6 bg-gray-900 rounded">
    <h2 className="text-2xl pb-3 font-semibold">
        Send me a message:
    </h2>
    <div>
        <div className="flex flex-col mb-3">
        <label htmlFor="name">Name</label>
        <input 
            type="text" id="name" required
            onChange={(e) => setName(e.target.value)} value={name}
            className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-amber-500 focus:outline-none focus:bg-gray-800 focus:text-amber-500"
            autoComplete="off"/>
        </div>
        <div className="flex flex-col mb-3">
        <label htmlFor="email">Email</label>
        <input 
            type="email" id="email" required
            onChange={(e) => setEmail(e.target.value)} value={email}
            className="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-amber-500 focus:outline-none focus:bg-gray-800 focus:text-amber-500"
            autoComplete="off"/>
        </div>
        <div className="flex flex-col mb-3">
        <label htmlFor="message">Message</label>
        <textarea 
            rows="4" id="message" required
            onChange={(e) => setMessage(e.target.value)} value={message}
            className="resize-none px-3 py-2 bg-gray-800 border border-gray-900 focus:border-amber-500 focus:outline-none focus:bg-gray-800 focus:text-amber-500"
        ></textarea>
        </div>
    </div>
    <div className="w-full pt-3">
        <button type="submit" className="w-full bg-gray-900 border border-amber-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-amber-500 hover:text-white text-xl cursor-pointer">
        Send
        </button>
    </div>
    </form>
</div>
</>
  )
}
