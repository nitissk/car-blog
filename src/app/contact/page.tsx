"use client";

import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    country: "",
    subject: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      valid = false;
    } else {
      newErrors.name = "";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Country validation
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
      valid = false;
    } else if (formData.country.trim().length < 2) {
      newErrors.country = "Country must be at least 2 characters";
      valid = false;
    } else {
      newErrors.country = "";
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
      valid = false;
    } else {
      newErrors.subject = "";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    } else {
      newErrors.message = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      toast.promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve("Success");
            // Reset form after submission
            setFormData({
              name: "",
              email: "",
              country: "",
              subject: "",
              message: "",
            });
            formRef.current?.reset();
          }, 1500);
        }),
        {
          loading: "Sending message...",
          success: <b>Message sent successfully! We&apos;ll get back to you soon.</b>,
          error: <b>Could not send message. Please try again.</b>,
        }
      );
    } else {
      toast.error("Please fix the errors in the form");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-3 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-2">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mt-2 text-xl text-gray-500">
            Have questions? We&apos;re here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Owner Details - Left Side */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Office</h2>

            <div className="space-y-2">
              {/* Address Card */}
              <div className="flex items-start p-2 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors duration-200">
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                  <FiMapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">
                    123 Auto Street, Connaught Place<br />
                    New Delhi, 110001 , India
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start p-4 rounded-lg bg-green-50/50 hover:bg-green-50 transition-colors duration-200">
                <div className="flex-shrink-0 p-2 bg-green-100 rounded-lg">
                  <FiPhone className="h-5 w-5 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">
                    +91 98765 43210 (Mobile)<br />
                    +91 11 2345 6789 (Office)
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start p-4 rounded-lg bg-purple-50/50 hover:bg-purple-50 transition-colors duration-200">
                <div className="flex-shrink-0 p-2 bg-purple-100 rounded-lg">
                  <FiMail className="h-5 w-5 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">
                    info@evdrive.com (General)<br />
                    support@evdrive.com (Support)
                  </p>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="flex items-start p-4 rounded-lg bg-amber-50/50 hover:bg-amber-50 transition-colors duration-200">
                <div className="flex-shrink-0 p-2 bg-amber-100 rounded-lg">
                  <FiClock className="h-5 w-5 text-amber-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                  <p className="mt-1 text-gray-600 leading-relaxed">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                  </p>
                </div>
              </div>

              {/* About Section */}
              <div className="mt-3 p-1 rounded-lg bg-gray-50 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">About EV Drive</h3>
                <p className="text-gray-600 leading-relaxed">
                  EV Drive is a premier automotive blog headquartered in New Delhi, India. 
                  We specialize in delivering cutting-edge news, comprehensive reviews, 
                  and expert analysis on electric vehicles and sustainable mobility solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Country <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    ${errors.country ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Your country"
                />
                {errors.country && (
                  <p className="mt-1 text-sm text-red-600">{errors.country}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    ${errors.subject ? "border-red-500" : "border-gray-300"}`}
                  placeholder="What is this regarding?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    ${errors.message ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}