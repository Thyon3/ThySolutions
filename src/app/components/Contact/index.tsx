'use client'
import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-darkmode">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                        <h2 className="text-4xl font-bold mb-6 text-black">Get in Touch</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Have a project in mind? Need a tech partner to design, build, and host your software?
                            Wed love to hear from you.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <span className="text-lg">hello@thysolutions.com</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </span>
                                <span className="text-lg">Remote-first  working with clients worldwide</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <form className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-sm">
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2">Full Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all dark:bg-gray-700 dark:border-gray-600" placeholder="John Doe" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all dark:bg-gray-700 dark:border-gray-600" placeholder="john@example.com" />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-semibold mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary outline-none transition-all dark:bg-gray-700 dark:border-gray-600" placeholder="Your message here..."></textarea>
                            </div>
                            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-dark transition-all">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
