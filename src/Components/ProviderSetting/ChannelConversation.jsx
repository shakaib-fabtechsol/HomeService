import React from 'react'

const ChannelConversation = () => {
    return (
        <div>
            <div>
                <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
                    <p className="text-lg font-semibold text-[#181D27]">
                        Channels for Conversations
                    </p>
                    <p className="text-[#535862] text-sm">
                        Update your Channels details.
                    </p>
                </div>
                <div className="">
                    <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                            <div className="flex items-center">
                                <p className="font-semibold me-2">Call Pro</p>
                                <label className="switch def-switch relative flex items-center">
                                    <input type="checkbox" className="hidden peer" />
                                    <span className="slider round"></span>
                                    <span className="absolute left-[70px] text-sm mt-1 font-semibold text-gray-700 peer-checked:hidden">
                                        Off
                                    </span>
                                    <span className="absolute right-[-35px] text-sm mt-1 font-semibold text-gray-700 hidden peer-checked:inline">
                                        On
                                    </span>
                                </label>
                            </div>
                            <p className="mt-3">
                                Enable the toggle to make your phone number visible to the
                                public. Each time a customer (only one time per customer)
                                uses this channel will incur a charge of $xxx. This charge
                                is waived if your average deal revenue is above $xxx for the
                                past 60 day period.
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                            <input
                                type="text"
                                id="Title"
                                placeholder="Enter Call Number"
                                className="myinput focus-none w-full"
                            />
                        </div>
                    </div>
                    <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                            <div className="flex items-center">
                                <p className="font-semibold me-2">Text Pro</p>
                                <label className="switch def-switch relative flex items-center">
                                    <input type="checkbox" className="hidden peer" />
                                    <span className="slider round"></span>
                                    <span className="absolute left-[70px] text-sm mt-1 font-semibold text-gray-700 peer-checked:hidden">
                                        Off
                                    </span>
                                    <span className="absolute right-[-35px] text-sm mt-1 font-semibold text-gray-700 hidden peer-checked:inline">
                                        On
                                    </span>
                                </label>
                            </div>
                            <p className="mt-3">
                                Enable the toggle to make your text number visible to the
                                public. Each time a customer (only one time per customer)
                                uses this channel will incur a charge of $xxx. This charge
                                is waived if your average deal revenue is above $xxx for the
                                past 60 day period.
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                            <input
                                type="text"
                                id="Title"
                                placeholder="Enter Text Number"
                                className="myinput focus-none w-full"
                            />
                        </div>
                    </div>
                    <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                            <div className="flex items-center">
                                <p className="font-semibold me-2">Instant Chat</p>
                                <label className="switch def-switch relative flex items-center">
                                    <input type="checkbox" className="hidden peer" />
                                    <span className="slider round"></span>
                                    <span className="absolute left-[70px] text-sm mt-1 font-semibold text-gray-700 peer-checked:hidden">
                                        Off
                                    </span>
                                    <span className="absolute right-[-35px] text-sm mt-1 font-semibold text-gray-700 hidden peer-checked:inline">
                                        On
                                    </span>
                                </label>
                            </div>
                            <p className="mt-3">
                                Enable the toggle to make your instant chat visible to the
                                public. Each time a customer (only one time per customer)
                                uses this channel will incur a charge of $xxx. This charge
                                is waived if your average deal revenue is above $xxx for the
                                past 60 day period.
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-6"></div>
                    </div>
                    <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                            <div className="flex items-center">
                                <p className="font-semibold me-2">Email Pro</p>
                                <label className="switch def-switch relative flex items-center">
                                    <input type="checkbox" className="hidden peer" />
                                    <span className="slider round"></span>
                                    <span className="absolute left-[70px] text-sm mt-1 font-semibold text-gray-700 peer-checked:hidden">
                                        Off
                                    </span>
                                    <span className="absolute right-[-35px] text-sm mt-1 font-semibold text-gray-700 hidden peer-checked:inline">
                                        On
                                    </span>
                                </label>
                            </div>
                            <p className="mt-3">
                                Enable the toggle to make your email address visible to the
                                public. Each time a customer (only one time per customer)
                                uses this channel will incur a charge of $xxx. This charge
                                is waived if your average deal revenue is above $xxx for the
                                past 60 day period.
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                            <input
                                type="email"
                                id="Title"
                                placeholder="Enter Email here"
                                className="myinput focus-none w-full"
                            />
                        </div>
                    </div>
                    <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                            <div className="flex items-center">
                                <p className="font-semibold me-2">Direct Form</p>
                                <label className="switch def-switch relative flex items-center">
                                    <input type="checkbox" className="hidden peer" />
                                    <span className="slider round"></span>
                                    <span className="absolute left-[70px] text-sm mt-1 font-semibold text-gray-700 peer-checked:hidden">
                                        Off
                                    </span>
                                    <span className="absolute right-[-35px] text-sm mt-1 font-semibold text-gray-700 hidden peer-checked:inline">
                                        On
                                    </span>
                                </label>
                            </div>
                            <p className="mt-3">
                                Enable the toggle to make your direct form visible to the
                                public. Each time a customer (only one time per customer)
                                uses this channel will incur a charge of $xxx. This charge
                                is waived if your average deal revenue is above $xxx for the
                                past 60 day period.
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-6"></div>
                    </div>
                    <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12 gap-6">
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
                            <div className="flex items-center">
                                <p className="font-semibold me-2">Address</p>
                                <label className="switch def-switch relative flex items-center">
                                    <input type="checkbox" className="hidden peer" />
                                    <span className="slider round"></span>
                                    <span className="absolute left-[70px] text-sm mt-1 font-semibold text-gray-700 peer-checked:hidden">
                                        Off
                                    </span>
                                    <span className="absolute right-[-35px] text-sm mt-1 font-semibold text-gray-700 hidden peer-checked:inline">
                                        On
                                    </span>
                                </label>
                            </div>
                            <p className="mt-3">
                                Enable the toggle to make your address visible to the
                                public.
                            </p>
                        </div>
                        <div className="col-span-12 lg:col-span-6 2xl:col-span-6">
                            <input
                                type="text"
                                id="Title"
                                placeholder="Enter Address here"
                                className="myinput focus-none w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button
                        type="reset"
                        className="border border-[#cdcdcd] rounded-lg w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                    >
                        {" "}
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="border border-[#0F91D2] rounded-lg w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChannelConversation