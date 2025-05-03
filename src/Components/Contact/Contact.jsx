import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      console.log("Form data being sent:", formData);
      const response = await axios.post(
        "https://portfolio-backend-cyan-sigma.vercel.app/api/v1/contact",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Message sent successfully!");

      setSubmissionStatus({
        success: true,
        message: response.data.message,
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmissionStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      });
      console.error("Error during contact form submission:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto flex flex-col lg:flex-row py-5 lg:py-10 lg:mt-10">
      <div className="w-full lg:w-1/2">
        <div className="text-left max-w-xl px-6">
          <h2 className="font-general-medium text-2xl text-black dark:text-white mt-12 mb-8">
            Contact details
          </h2>
          <ul className="font-general-regular">
            <li className="flex">
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {/* Your Address Icon */}
              </i>
              <span className="text-lg mb-4 text-black dark:text-white">
                Your Address, Your City, Your Country
              </span>
            </li>
            <li className="flex">
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {/* Email Icon */}
              </i>
              <span className="text-lg mb-4 text-black dark:text-white">
                sulabhambule02@gmail.com
              </span>
            </li>
            <li className="flex">
              <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">
                {/* Phone Icon */}
              </i>
              <span className="text-lg mb-4 text-black dark:text-white">
                7972XXX..
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="leading-loose">
          <form
            className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
            onSubmit={handleSubmit}
          >
            <p className="font-general-medium text-black dark:text-white text-2xl mb-8">
              Contact Form
            </p>
            <div className="font-general-regular mb-4">
              <label
                className="block text-lg text-black dark:text-white mb-1"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-black dark:text-secondary-light bg-ternary-light dark:bg-ter-dark rounded-md shadow-sm text-md"
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                aria-label="Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="font-general-regular mb-4">
              <label
                className="block text-lg text-black dark:text-white mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-gray-50 dark:bg-ter-dark rounded-md shadow-sm text-md"
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                aria-label="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="font-general-regular mb-4">
              <label
                className="block text-lg text-black dark:text-white mb-1"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-gray-50 dark:bg-ter-dark rounded-md shadow-sm text-md"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                aria-label="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="mt-6">
              <label
                className="block text-lg text-black dark:text-white mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-gray-50 dark:bg-ter-dark rounded-md shadow-sm text-md"
                id="message"
                name="message"
                cols="14"
                rows="6"
                aria-label="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          {submissionStatus && (
            <div
              className={`mt-4 ${
                submissionStatus.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {submissionStatus.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
