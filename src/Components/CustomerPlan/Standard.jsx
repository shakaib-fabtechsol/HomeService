import React from 'react'

const Standard = () => {
    return (
        <div className='h-full'>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-medium myhead">
                            Plan Title
                        </h2>
                        <p className="text-3xl myhead font-bold">$400</p>
                    </div>
                    <p className="text-sm myblack mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi tellus diam, dignissim tincidunt quam vel, rutrum
                        egestas lacus. Phasellus accumsan fermentum dolor eu
                        gravida. Vivamus dignissim augue sed orci interdum
                        vehicula.
                    </p>
                    <ul className="mt-4 myblack text-sm list-disc space-y-1 pl-5">
                        <li>3 Workers</li>
                        <li>Delivered Within 2 Days</li>
                    </ul>
                </div>
                <button className="bg-[#0F91D2] text-white border border-[#D5D7DA] shadow-[0px_1px_2px_0px_#0A0D120D] p-2 rounded-[8px] text-sm font-semibold">
                    Continue
                </button>
            </div>
        </div>
    )
}

export default Standard