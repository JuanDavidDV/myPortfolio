import { useState } from "react";
import emailjs from "@emailjs/browser";
import github from "../assets/images/github.png";
import linkedin from "../assets/images/linkedin.png";
import { MdOutlineEmail } from "react-icons/md";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      return; // Prevent submission if any field is empty
    }

    // Clear previous error message
    setError("");

    // Send the email using emailjs
    try {
      // Send the email using emailjs
      const response = await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          from_email: email,
          to_name: "Juan David",
          message: message,
        },
        import.meta.env.VITE_APP_EMAILJS_USER_ID
      );
  
      // Reset the form fields after a successful response
      console.log("Email sent successfully!", response);
  
      // Reset form state
      setName("");
      setEmail("");
      setMessage("");
  
      // Show alert after resetting the form
      alert("Email has been sent!");
    } catch (error) {
      console.error("Error sending email:", error);
      setError("There was an issue sending your message. Please try again.");
    }
  };

  return (
    <section id="contact" className="flex items-center justify-center bg-gradient-to-b from-teal-950 to-black pt-40 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Contact Me</h2>
        <div className="flex gap-10 justify-center items-center pb-2">
          <a href="https://github.com/JuanDavidDV" target="_blank">
            <img src={github} className="w-9 opacity-60 hover:opacity-100 rounded-xl"/>
          </a>
          <a href="https://www.linkedin.com/in/juan-david-dv/" target="_blank">
            <img src={linkedin} className="w-12 opacity-60 hover:opacity-100 rounded-xl"/>
          </a>
          <a href="mailto:juandadazav@gmail.com">
            <MdOutlineEmail className="pt-1 text-5xl opacity-60 hover:opacity-100 rounded-xl" />
          </a>
        </div>
        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 text-red-600 bg-red-100 rounded-md text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input
              id="name"
              type="text"
              placeholder="Please enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Please enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              cols="30"
              rows="5"
              placeholder="Please enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 text-white bg-teal-500 rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
