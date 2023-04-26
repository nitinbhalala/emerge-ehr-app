import React from 'react';

import { AiOutlineMail } from 'react-icons/ai';
import AccordianList from './AccordianList';
import { IoMdCall } from 'react-icons/io';

const ItemData = [
    {
        index: 0,
        title: "Deals",
        deals: 2
    },
    {
        index: 1,
        title: "Tickets",
        content: "Nulla facilisi. Sed eget elit in nibh tincidunt auctor.",
        deals: 2
    },
    {
        index: 2,
        title: "Attachments",
        content: "Maecenas non est non lacus bibendum varius.",
        deals: 0
    },
    {
        index: 3,
        title: "Playbook",
        content: "Maecenas non est non lacus bibendum varius.",
        deals: 0
    },
];

function RightSideBar() {
    return (
        <div className="w-full  float-right md:max-w-[23%]  bg-white ">
            <div className="p-4 px-6">
                <span className='font-medium capitalize'>company</span>

                <div className='flex items-center gap-3 py-2'>
                    <div className='rounded-full p-1 flex justify-center items-center bg-[#F3F4F6] h-9 w-9'>
                        <img className='h-full w-full' src="images/icons/google-icon.svg" alt="google" />
                    </div>
                    <div>
                        <span className='block text-sm first-letter:capitalize font-medium'>Google inc.</span>
                        <span className='block text-sm text-[#A7A7A7] hover:cursor-pointer'>google.com</span>
                    </div>
                </div>

                {/* email and mobile container */}
                <div className="py-4 relative">
                    <div className='border border-[#d8dadf] px-4 py-3 rounded-lg  flex flex-col gap-2 shadow-md'>
                        <div className='flex items-center gap-4'>
                            <AiOutlineMail color='#CDD1D7' />
                            <span className='bloc'> emailkuyahut@gmail.com</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <IoMdCall color='#CDD1D7' />
                            <span className='bloc'>(405) 555-0128</span>
                        </div>
                    </div>
                </div>

            </div>

            <hr className="border-l border-[#ebedf0] w-full" />

            {ItemData.map((item, index) => {
                return <AccordianList key={index} itemData={item} />
            })}

        </div>
    )
}

export default RightSideBar