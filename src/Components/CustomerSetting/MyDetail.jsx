import React from 'react'
import SettingsPreview from '../MUI/SettingsPreview'

const MyDetail = () => {
    return (
        <div>
            <div>
                <div className="flex justify-between border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
                    <div>
                        <p className="text-lg font-semibold text-[#181D27]">
                            Personal Profile
                        </p>
                        <p className="text-[#535862] text-sm">
                            update your personal profile details.
                        </p>
                    </div>
                </div>
                <div className="max-w-[1000px]">
                    <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                        <div>
                            <label className="text-sm font-semibold" htmlFor="fname">
                                Full Name
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                defaultValue={"Mike Bird"}
                                type="text"
                                name="fname"
                                id="fname"
                            />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                        <div>
                            <label className="text-sm font-semibold" htmlFor="Email">
                                Email address
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                defaultValue={"mikebird@example.com"}
                                type="email"
                                name="Email"
                                id="Email"
                            />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                        <div>
                            <label className="text-sm font-semibold" htmlFor="Phone">
                                Phone Number
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                defaultValue={"+92 311 555 66622"}
                                type="tel"
                                name="Phone"
                                id="Phone"
                            />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-2 py-8 border-b">
                        <div>
                            <p className="text-sm font-semibold text-[#414651]">
                                Your photo
                            </p>
                            <p className="text-[#535862] text-sm">
                                This will be displayed on your profile.
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <SettingsPreview />
                        </div>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-2 py-8 border-b">
                        <div>
                            <label className="text-sm font-semibold" htmlFor="Location">
                                Location
                            </label>
                        </div>
                        <div className="sm:col-span-2">
                            <input
                                className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                defaultValue={"USA, New York, 823"}
                                type="text"
                                name="Location"
                                id="Location"
                            />
                        </div>
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
    )
}

export default MyDetail