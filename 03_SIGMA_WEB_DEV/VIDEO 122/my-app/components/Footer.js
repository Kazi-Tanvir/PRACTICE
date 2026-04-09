import Link from "next/link";

import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="px-6 md:px-16 lg:px-24 xl:px-32">
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
                    <div>
                        <img className="w-34 md:w-32" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/dummyLogoColored.svg" alt="dummyLogoColored" />
                        <p className="max-w-410px mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?</p>
                    </div>
                    <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
                        <div>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">Quick Links</h3>
                            <ul className="text-sm space-y-1">
                                <li><Link href="#" className="hover:underline transition">Home</Link></li>
                                <li><Link href="#" className="hover:underline transition">Best Sellers</Link></li>
                                <li><Link href="#" className="hover:underline transition">Offers & Deals</Link></li>
                                <li><Link href="#" className="hover:underline transition">Contact Us</Link></li>
                                <li><Link href="#" className="hover:underline transition">FAQs</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">Need Help?</h3>
                            <ul className="text-sm space-y-1">
                                <li><Link href="#" className="hover:underline transition">Delivery Information</Link></li>
                                <li><Link href="#" className="hover:underline transition">Return & Refund Policy</Link></li>
                                <li><Link href="#" className="hover:underline transition">Payment Methods</Link></li>
                                <li><Link href="#" className="hover:underline transition">Track your Order</Link></li>
                                <li><Link href="#" className="hover:underline transition">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">Follow Us</h3>
                            <ul className="text-sm space-y-1">
                                <li><Link href="#" className="hover:underline transition">Instagram</Link></li>
                                <li><Link href="#" className="hover:underline transition">Twitter</Link></li>
                                <li><Link href="#" className="hover:underline transition">Facebook</Link></li>
                                <li><Link href="#" className="hover:underline transition">YouTube</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
                    Copyright 2025 © PrebuiltUI All Right Reserved.
                </p>
            </footer>
        </div>
    )
}

export default Footer



