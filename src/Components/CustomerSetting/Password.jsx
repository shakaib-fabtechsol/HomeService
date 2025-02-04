import React from 'react'

const Password = () => {
    return (
        <div>
            <div>
                <div className="">
                    <h2 className="font-bold text-xl myhead">Password</h2>
                    <p className="myblack">update your account password</p>
                </div>
                <div className="">
                    <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                        <div className="col-span-12 md:col-span-4 lg:col-span-3">
                            <div className="flex">
                                <label htmlFor="password" className="font-semibold">
                                    Current Password
                                </label>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-8 lg:col-span-6">
                            <input
                                type="password"
                                id="password"
                                placeholder=""
                                className="myinput focus-none w-full"
                            />
                        </div>
                    </div>
                    <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                        <div className="col-span-12 md:col-span-4 lg:col-span-3">
                            <div className="flex">
                                <label htmlFor="confirmpassword" className="font-semibold">
                                    New Password
                                </label>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-8 lg:col-span-6">
                            <input
                                type="password"
                                id="confirmpassword"
                                placeholder=""
                                className="myinput focus-none w-full"
                            />
                        </div>
                    </div>
                    <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                        <div className="col-span-12 md:col-span-4 lg:col-span-3">
                            <div className="flex">
                                <label
                                    htmlFor="confirmnewpassword"
                                    className="font-semibold"
                                >
                                    Confirm New Password
                                </label>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-8 lg:col-span-6">
                            <input
                                type="password"
                                id="confirmnewpassword"
                                placeholder=""
                                className="myinput focus-none w-full"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mt-3">
                    <button
                        type="reset"
                        className="border border-[#cdcdcd] rounded-lg w-[100px] sm:w-[150px] py-[10px] me-4 font-semibold bg-[#ffffff]"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="border border-[#0F91D2] rounded-lg w-[100px] sm:w-[150px] py-[10px] text-[#ffffff] font-semibold bg-[#0F91D2]"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Password