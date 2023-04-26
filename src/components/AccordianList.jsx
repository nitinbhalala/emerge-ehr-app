import React, { useState } from 'react'

import { AiOutlinePlus } from 'react-icons/ai';
import { FaChevronLeft } from 'react-icons/fa';
// import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

function AccordianList({ itemData }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [deals, setDeals] = useState(itemData.deals);

    const addDeal = () => {
        setDeals(deals + 1);
        itemData.deals = itemData.deals + 1;
    };

    const toggleAccordion = (index) => {
        setActiveIndex((prevState) => (prevState === index ? null : index));
    };



    return (
        <div className="w-full">
            <div className="m-2">
                <div
                    className="flex items-center justify-between p-2 cursor-pointer"
                    onClick={() => toggleAccordion(itemData.index)}
                >
                    <div className="flex items-center gap-3">
                        <div className="font-medium">{itemData.title ?? ""}</div>
                        {deals !== 0 && <span className="bg-[#F3F4F6] px-3 py-px rounded-md">{deals}</span>}
                    </div>
                    {activeIndex === itemData.index ? (
                        // <MinusIcon className="h-5 w-5 text-gray-500 mr-2" />
                        <div className="flex items-center gap-2  text-[#CAD0D7]">
                            <span className="blokc first-letter:capitalize">close</span><FaChevronLeft className='rotate-90' />
                        </div>
                    ) : (
                        // <PlusIcon className="h-5 w-5 text-gray-500 mr-2" />
                        <div className="flex items-center gap-2 text-[#CAD0D7]">
                            <span className="block first-letter:capitalize">view</span>
                            <FaChevronLeft className='-rotate-90' />
                        </div>
                    )}
                </div>
                {activeIndex === itemData.index && (
                    <div className="p-2 flex flex-col gap-2">
                        <button onClick={addDeal} className="border w-full rounded-sm border-gray-300 shadow-md flex items-center justify-center py-2">
                            <AiOutlinePlus />
                            <span className="mx-2 first-letter:capitalize">create new deal</span>
                        </button>

                        {new Array(deals).fill('').map((item, index) => {
                            return <div key={index} className="border w-full rounded-sm border-gray-200 gap-3 shadow-md flex flex-col justify-center py-2 px-4">
                                <div className="flex items-center justify-between w-full">
                                    <span className="block first-letter:capitalize">closing date: 18 jan 2021</span>
                                    <span className="block px-3 py-1 text-[#66A7FA] bg-[#EFF6FF] rounded-full first-letter:capitalize">Contract sent</span>
                                </div>
                                <div >
                                    <h3 className="text-lg font-medium">web development</h3>
                                    <h3 className="text-lg font-medium">$ 120,000</h3>
                                </div>
                            </div>
                        })}

                    </div>
                )}
            </div>
        </div>
    )
}

export default AccordianList
