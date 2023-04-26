import React, { useState } from 'react';

import { IoMdCall, IoMdMore } from 'react-icons/io';
import { FaChevronLeft } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const optionList = [
    { icon: <AiOutlinePlus />, name: 'Log' },
    { icon: <AiOutlineMail />, name: 'email' },
    { icon: <IoMdCall />, name: 'call' },
    { icon: <IoMdMore className='rotate-90' />, name: 'more' },
];

const leadData = [
    { index: 0, title: "email", value: "emailkuyahut@gmail.com" },
    { index: 1, title: "phone", value: "(405) 555-0128" },
    { index: 2, title: "lead owner", value: "Ester Howard" },
    { index: 3, title: "job title", value: "Content Writer" },
    { index: 4, title: "annual revenue", value: "$ 5000" },
    { index: 4, title: "lead source", value: "Online Store" },
]
function LeftSideBar() {

    const [activeTab, setActiveTab] = useState('leads');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className="w-full h-full md:max-w-[23%]  bg-white ">

            <div className="p-4 px-6">
                <div className='flex gap-2 items-center'>
                    <div className="flex w-8 h-8 justify-center hover:shadow-md hover:cursor-pointer transition-all duration-500 items-center border-gray-300 border rounded-full p-2">
                        <FaChevronLeft className='' width={20} height={20} />
                    </div>
                    <span className='font-medium hover:cursor-pointer'>Back to lads</span>
                </div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <div className='flex flex-col items-center'>
                    <img src="images/user.png" className="h-20 w-20 rounded-full" alt="user" />
                    <span className="font-medium capitalize block py-1">jerome bell</span>
                    <div className="flex gap-1 items-center">
                        <img className='h-4 w-4' src="images/icons/google-icon.svg" alt="google" />
                        <span className="capitalize text-sm text-[#B6B6B9]">Google</span>
                    </div>
                </div>
                {/* icon button list */}
                <div className="flex justify-center gap-2.5">
                    {optionList.map((option, index) => {
                        return <div key={index} className="flex flex-col gap-0.5 items-center p-2">
                            <div className="bg-[#F9FAFB] h-8 border-[#8C94A1] border w-8 rounded-full flex items-center justify-center hover:cursor-pointer">
                                {option.icon}
                            </div>
                            <div className="text-[#8C94A1] font-semibold capitalize">{option.name}</div>
                        </div>
                    })}
                </div>

                {/* convert contact btn */}
                <div className="bg-[#FF7043] first-letter:capitalize py-3.5 text-lg font-normal text-white rounded-lg px-10 text-center hover:cursor-pointer hover:shadow-md">
                    convert to contact
                </div>

                {/* activity status */}
                <div className="flex items-center space-x-2 py-2">
                    <div className={`h-2 w-2 rounded-full bg-[#4ADE80] `}></div>
                    <span className="text-[#8C94A1] text-sm">Last activity: 2 Jan 2020 at 09:00 AM</span>
                </div>

                {/* tabbar */}
                <div className="w-full px-10">
                    <div className="flex w-full justify-between">
                        <button
                            className={`py-2 font-medium first-letter:capitalize px-4 relative w-full  ${activeTab === 'leads' ? 'text-black' : 'text-gray-500'
                                }`}
                            onClick={() => handleTabClick('leads')}
                        >
                            Leads info
                            {activeTab === 'leads' && (
                                <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-black"></div>
                            )}
                        </button>
                        <button
                            className={`py-2 font-medium first-letter:capitalize px-4 relative w-full ${activeTab === 'address' ? 'text-black' : 'text-gray-500'
                                }`}
                            onClick={() => handleTabClick('address')}
                        >
                            Address info
                            {activeTab === 'address' && (
                                <div className="absolute bottom-0 left-0 w-full h-1 rounded-full bg-black"></div>
                            )}
                        </button>
                    </div>
                    <div className="text-[#A7A7A7] py-4 flex flex-col gap-2">

                        {leadData.map((item, index) => {
                            const { title, value } = item;
                            return <div key={index}>
                                <span className="block capitalize">{title ?? ''}</span>
                                <span className="block font-medium text-black">{value ?? ""}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSideBar