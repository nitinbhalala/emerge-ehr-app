import React, { useState } from 'react'
import { FaChevronLeft } from 'react-icons/fa';
import { FiLayers } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdMore } from 'react-icons/io';
function BodyAccordian({ itemData }) {
    const [activeIndex, setActiveIndex] = useState(0);



    const toggleAccordion = (index) => {
        setActiveIndex((prevState) => (prevState === index ? null : index));
    };
    return (
        <div className="w-full">
            <div className="m-2">
                <h2 className="capitalize font-medium text-lg my-4">{itemData.title}</h2>
                <div className="flex flex-col gap-5">
                    {new Array(itemData.dataItem).fill('').map((_, index) => {
                        return <div key={index} className="w-full">
                            <div
                                className="flex items-center justify-between p-3 bg-white cursor-pointer border rounded-t-md"
                                onClick={() => toggleAccordion(itemData.index + index)}
                            >
                                <div className="flex items-center gap-5">
                                    <FaChevronLeft color='#8A98A8' className={`${activeIndex === itemData.index + index ? "-rotate-90" : "-rotate-180"}`} />
                                    <div className="p-3 bg-[#BFDBFE] rounded-full">
                                        <FiLayers color="#5887F8" className="font-bold" />
                                    </div>
                                    <span className="block text-lg font-normal">Task created Easther Howard</span>
                                </div>
                                <div className="flex items-center gap-3 ">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#DCDEE2] block">Due: </span>
                                        <AiOutlineCalendar />
                                        <span className="block">Today, 12:00 pm</span>
                                        <IoMdMore color='#A2A8B4' className='rotate-90' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center flex-col  p-3 bg-white border rounded-b-md'>
                                <div className='flex gap-5 items-center py-2 justify-start w-full'>
                                    <div className='bg-[#F3F4F6] shrink-0 h-8 w-8 rounded-full border border-[#E6E8EC]' />
                                    <div>
                                        <p className='tetx-lg font-medium'>Prepare quote for Jerome Bell</p>
                                        <span className='text-[#CCCED6]'>She's interested in out new product line and wants our very best price,Please include a detaild breakdown of costs.</span>
                                    </div>
                                </div>
                                {activeIndex === itemData.index + index && <div className='mt-10 border flex  w-full justify-between border-[#EBEDF0] py-4 px-6 rounded-lg'>
                                    <div className=''>
                                        <span className='block text-[#CCCAD3]'>Reminder</span>
                                        <div className='flex items-center gap-2 '>
                                            <span className='block'>No reminder</span>
                                            <FaChevronLeft color='#CCCAD3' className='-rotate-90' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <span className='block text-[#CCCAD3]'>Task Priority</span>
                                        <div className='flex items-center gap-2 '>
                                            <div className='h-5 w-5 rounded-md bg-orange-500'></div>
                                            <span className='block'>High</span>
                                            <FaChevronLeft color='#CCCAD3' className='-rotate-90' />
                                        </div>
                                    </div>
                                    <div className=''>
                                        <span className='block text-[#CCCAD3]'>Assigned to</span>
                                        <div className='flex items-center gap-2 '>
                                            <div className='h-5 w-5 rounded-md bg-yellow-500'></div>
                                            <span className='block'>Esther Howard</span>
                                            <FaChevronLeft color='#CCCAD3' className='-rotate-90' />
                                        </div>
                                    </div>

                                </div>
                                }
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default BodyAccordian