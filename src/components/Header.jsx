import React from 'react';

import { AiOutlineMessage, AiOutlineNotification, AiOutlinePlus, AiOutlineVideoCamera } from 'react-icons/ai';
import { FaSearch, FaUserCircle } from "react-icons/fa";

function Header() {
    return (
        <div className="bg-[#1F2228]  py-5 px-2 text-white">
            <div className="flex gap-5 flex-wrap md:flex-nowrap justify-between">
                <div className="flex justify-center md:justify-start items-center gap-3 w-full">
                    <div className="h-8 w-8 flex justify-center items-center">
                        <img className="object-cover" src="/images/icons/app-logo.svg" alt="emerge" />
                    </div>
                    <div className="flex gap-3.5 text-lg">
                        <span className="block font-semibold ">
                            Emerge EHR
                        </span>
                        <span className="border-l-2  my-0.5 block border-[#34373D]"></span>
                        <span className="block capitalize font-medium">
                            Contacts
                        </span>
                    </div>
                </div>
                <div className="flex flex-wrap md:flex-nowrap w-full items-center gap-5">
                    <div className="relative w-full">
                        <input
                            type="text"
                            className="bg-[#35383E] block rounded-full py-2 pl-9 pr-3 w-full text-white focus:outline-none"
                            placeholder="Search lead, contact, and more"
                        />
                        <div className="h-6 w-6 absolute top-6 left-2.5 transform -translate-y-1/2 text-white">
                            <FaSearch className='hover:cursor-pointer' />
                        </div>
                    </div>
                    <div className='flex flex-wrap md:flex-nowrap items-center w-full justify-center md:justify-between'>
                        <div className='bg-[#FF7043] p-3 rounded-full hover:cursor-pointer'>
                            <AiOutlinePlus fontWeight={'bold'} />
                        </div>
                        <div className="h-10 w-px bg-[#34373D] mx-4"></div>
                        <div className="flex items-center gap-4">
                            <AiOutlineMessage size={20} color="#707173" className="hover:cursor-pointer" />
                            <AiOutlineNotification size={20} color="#707173" className="hover:cursor-pointer" />
                            <AiOutlineVideoCamera size={20} color="#707173" className="hover:cursor-pointer" />
                        </div>
                        <div className="h-10 w-px bg-[#34373D] mx-4"></div>
                        <div className="flex justify-center w-full md:w-auto md:justify-start items-center gap-4">
                            <FaUserCircle className="w-8 h-8 text-gray-600 rounded-full shrink-0 hover:cursor-pointer" />
                            <div className="flex flex-col">
                                <div className="text-lg font-bold">John Doe</div>
                                <div className="text-sm text-gray-500">Software Engineer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header