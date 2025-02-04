import React from 'react'

const Payment = () => {
  return (
    <div>
        <div>
            <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
              <p className="text-lg font-semibold text-[#181D27]">
                Payment/Payout Info
              </p>
              <p className="text-[#535862] text-sm">
                update your payment detail
              </p>
            </div>
            <div className="">
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Service Title
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Muhammad Hussnain"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Select Bank*
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <select id="Bank" className="myinput focus-none w-full">
                    <option value="" disabled selected hidden>
                      Select a bank
                    </option>
                    <option value="bank1">Bank 1</option>
                    <option value="bank2">Bank 2</option>
                    <option value="bank3">Bank 3</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Branch Name/Code
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter"
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid border-b py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Account Number*
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter here..."
                    className="myinput focus-none w-full"
                  />
                </div>
              </div>
              <div className="grid py-4 grid-cols-1 md:grid-cols-12">
                <div className="col-span-12 md:col-span-4 lg:col-span-3">
                  <div className="flex">
                    <label htmlFor="Title" className="font-semibold">
                      Bank Routing Number*
                    </label>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-6">
                  <input
                    type="text"
                    id="Title"
                    placeholder="Enter here..."
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

export default Payment