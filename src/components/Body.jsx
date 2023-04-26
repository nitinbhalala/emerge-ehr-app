import React, { useState } from 'react'

import { FaChevronLeft, FaSearch } from 'react-icons/fa'
import BodyAccordian from './BodyAccordian';


const tabs = [
    { id: 0, label: 'Activity' },
    { id: 1, label: 'Notes' },
    { id: 2, label: 'Emails' },
    { id: 3, label: 'Calls' },
    { id: 4, label: 'Task' },
    { id: 5, label: 'Meetings' },
];


const ItemData = [
    {
        index: 0,
        title: "upcoming activity",
        dataItem: 2
    },
    {
        index: 1,
        title: "Activity history",
        dataItem: 1
    },
];
function Body() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            <div className="relative">
                <input
                    type="text"
                    className="pl-8 w-full text-lg pb-2 border-b border-gray-300 focus:outline-none focus:border-gray-500"
                    placeholder="Search activity, notes, email and more"
                />
                <FaSearch className="absolute h-5 w-5 top-1 text-gray-400" />
            </div>

            {/* tabbar */}
            <div className="bg-[#EAEEF6] flex-wrap flex-col md:flex-row flex w-full rounded-md p-1  my-5">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`${activeTab === tab.id ? 'bg-white shadow-[#0000000d_0px_6px_24px_0px,#00000014_0px_0px_0px_1px]' : 'bg-transparent transition-all duration-100'
                            } flex-1 rounded-md text-center  py-4 cursor-pointer capitalize`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>

            {/* selecttab */}
            <div className="flex gap-3 items-center">
                <button className="relative bg-white shadow-[#0000000d_0px_6px_24px_0px,#00000014_0px_0px_0px_1px] my-5 first-letter:capitalize text-base font-medium py-4 px-3 pr-8 rounded-md">

                    filter activity 21/25
                    <div className="absolute right-2 top-0 flex justify-center items-center  h-full">
                        <FaChevronLeft className="-rotate-90" />
                    </div>

                </button>
                <button className="relative bg-white shadow-[#0000000d_0px_6px_24px_0px,#00000014_0px_0px_0px_1px] my-5 first-letter:capitalize text-base font-medium py-4 px-3 pr-8 rounded-md">

                    All users
                    <div className="absolute right-2 top-0 flex justify-center items-center  h-full">
                        <FaChevronLeft className="-rotate-90" />
                    </div>

                </button>
            </div>

            {ItemData.map((item, index) => {
                return <BodyAccordian key={index} itemData={item} />
            })}

        </div>

    )
}

export default Body