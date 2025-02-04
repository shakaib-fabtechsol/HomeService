import React from 'react'
import SettingsPreview from '../MUI/SettingsPreview'

const AdditionalPhoto = () => {
    return (
        <div>
            <div>
                <div className="border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
                    <p className="text-lg font-semibold text-[#181D27]">
                        Additional Photos
                    </p>
                    <p className="text-[#535862] text-sm">
                        upload additional photos.
                    </p>
                </div>
                <div className="py-8 border-b">
                    <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                        <div>
                            <p className="text-sm font-semibold text-[#414651]">
                                Upload Technician Photos
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <SettingsPreview />
                        </div>
                    </div>
                </div>
                <div className="py-8 border-b">
                    <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                        <div>
                            <p className="text-sm font-semibold text-[#414651]">
                                Upload Vehicle Photos
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <SettingsPreview />
                        </div>
                    </div>
                </div>
                <div className="py-8 border-b">
                    <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                        <div>
                            <p className="text-sm font-semibold text-[#414651]">
                                Upload Facility Photos
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <SettingsPreview />
                        </div>
                    </div>
                </div>
                <div className="py-8 border-b">
                    <div className="grid md:grid-cols-3 gap-2 max-w-[1000px]">
                        <div>
                            <p className="text-sm font-semibold text-[#414651]">
                                Upload Project Photos
                            </p>
                        </div>
                        <div className="md:col-span-2">
                            <SettingsPreview />
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

export default AdditionalPhoto