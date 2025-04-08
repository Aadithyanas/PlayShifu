import React from 'react';
import { Globe, MessageCircle, CheckCircle, CreditCard, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <div className="w-full bg-pink-700 text-white px-6 py-2">
            {/* Stats Section */}
            <div className="flex justify-center gap-8 mb-8 flex-wrap">

                <img className='w-56' src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F2m-plus.webp&w=1920&q=75" alt="" />


                <img className='w-56' src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F35-plus-countries.webp&w=1920&q=75" alt="" />

                <img className='w-56' src="https://www.playshifu.com/_next/image?url=https%3A%2F%2Fd3no6xaq2ua3a6.cloudfront.net%2Fimages%2Fpages%2Fcommon%2Ffooter%2F20-plus-educational-toys.webp&w=1920&q=75" alt="" />
            </div>

            {/* Features */}
            <div className="flex justify-center gap-8 py-2 mb-2 -mt-10 flex-wrap border-b border-pink-500">
                <div className="flex items-center gap-2">
                    <div className="bg-yellow-400 p-2 rounded-full">
                        <MessageCircle size={24} className="text-pink-600" />
                    </div>
                    <span>Free Shipping</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="bg-yellow-400 p-2 rounded-full">
                        <Globe size={24} className="text-pink-600" />
                    </div>
                    <span>30 Days Return</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="bg-yellow-400 p-2 rounded-full">
                        <CheckCircle size={24} className="text-pink-600" />
                    </div>
                    <span>6 Months Warranty</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="bg-yellow-400 p-2 rounded-full">
                        <CreditCard size={24} className="text-pink-600" />
                    </div>
                    <span>Secure Checkout</span>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="flex items-center justify-center ml-20 px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8 max-w-[70rem] w-full items-start mx-auto text-white">

                    {/* Newsletter Section */}
                    <div className="md:col-span-1 text-start ">
                        <p className="mb-4">
                            Get notified of new launches, product updates, contests, and more exciting news!
                        </p>
                        <button className="bg-yellow-400 text-pink-600 px-2  py-2 rounded-full font-medium">
                            Join our WhatsApp Community
                        </button>
                    </div>

                    {/* Shop Links */}
                    <div className="md:col-span-1 text-start">
                        <h3 className="text-xl font-bold mb-4 text-yellow-300">Shop</h3>
                        <ul className="space-y-2">
                            <li>Problem Solving Toys</li>
                            <li>Stem Toys</li>
                            <li>Social & Emotional Development Toys</li>
                            <li>Birthday Gift Toys</li>
                            <li>Super Saver Deals</li>
                            <li>Best Seller Toys</li>
                        </ul>
                    </div>

                    {/* More Links */}
                    <div className="md:col-span-1 text-start">
                        <h3 className="text-xl font-bold mb-4 text-yellow-300">More</h3>
                        <ul className="space-y-2">
                            <li>Device Compatibility</li>
                            <li>Free-E-Books</li>
                            <li>Parent Hub</li>
                            <li>Blogs</li>
                            <li>About Us</li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div className="md:col-span-1 text-start">
                        <h3 className="text-xl font-bold mb-4 text-yellow-300">Support</h3>
                        <ul className="space-y-2">
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                            <li>Return Policy</li>
                            <li>Terms & Conditions</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Footer Bottom */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-pink-500">
                {/* Social Media Icons */}
                <div className="flex gap-4 mb-4 md:mb-0">
                    <Facebook className="bg-white bg-opacity-10 p-2 rounded-full" size={36} />
                    <Linkedin className="bg-white bg-opacity-10 p-2 rounded-full" size={36} />
                    <Instagram className="bg-white bg-opacity-10 p-2 rounded-full" size={36} />
                    <Youtube className="bg-white bg-opacity-10 p-2 rounded-full" size={36} />
                </div>

                {/* Copyright */}
                <div>© 2025 PlayShifu.com</div>

                {/* Payment Methods */}
                <div className="flex gap-2 mt-4 md:mt-0">
                    <div className="bg-white p-1 rounded">
                        <img src="https://download.logo.wine/logo/Apple_Pay/Apple_Pay-Logo.wine.png" alt="Apple Pay" className="h-6" />
                    </div>
                    <div className="bg-white p-1 rounded">
                        <img src="https://mona.solutions/wp-content/uploads/2017/03/MasterCard-logo.jpg" alt="Mastercard" className="h-6" />
                    </div>
                    <div className="bg-white p-1 rounded">
                        <img src="data:image/png;base64,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" alt="Visa" className="h-6" />
                    </div>
                    <div className="bg-white p-1 rounded">
                        <img src="/api/placeholder/50/30" alt="Google Pay" className="h-6" />
                    </div>
                </div>
            </div>

            {/* WhatsApp Button */}
            <div className="fixed bottom-4 right-4">
                <button className="bg-green-500 p-3 rounded-full">
                    <MessageCircle size={28} className="text-white" />
                </button>
            </div>
        </div>
    );
}