import React, { useState } from 'react'
import { InputLabel, MenuItem, Modal, Select } from "@mui/material";
import visa from "../../assets/img/visa.png";
import mastercard from "../../assets/img/mastercard.png";
import { Link } from 'react-router-dom';
import { CiEdit, CiTrash } from 'react-icons/ci';
import Box from "@mui/material/Box";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: "10px",
    maxWidth: "700px",
    width: "100%",
};

const Payment = () => {
    const [method, setMethod] = React.useState("mastercard");
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handlemethod = (event) => {
        setMethod(event.target.value);
    };

    const paymentmethod = [
        {
            name: "Visa",
            avatar: visa,
            expdate: "Exp. date 06/2025",
        },
        {
            name: "mastercard",
            avatar: mastercard,
            expdate: "Exp. date 06/2025",
        },
    ];

    return (
        <div>
            <div>
                <div className="flex justify-between border-b border-[#E9EAEB] pb-5 items-center flex-wrap gap-4">
                    <div>
                        <p className="text-lg font-semibold text-[#181D27]">
                            Payment method
                        </p>
                        <p className="text-[#535862] text-sm">
                            Update and add your payment methods.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3 items-center ms-auto justify-end mt-4">
                    <button
                        onClick={handleOpen}
                        className="text-[#ffffff] font-semibold text-sm border border-[#0F91D2] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#0F91D2] rounded-[8px] py-3 px-4"
                    >
                        Add New
                    </button>
                </div>
                <div>
                    {paymentmethod.map((method, index) => (
                        <div key={index} className="py-5 border-b border-[#E9EAEB]">
                            <div className="flex items-center justify-between py-3 px-4 bg-[#FAFAFA] min-h-[60px] rounded-[8px]">
                                <div className="flex gap-3 items-center">
                                    <img
                                        className="size-6 max-w-6 object-contain"
                                        src={method.avatar}
                                        alt=""
                                    />
                                    <div>
                                        <p className="font-medium text-[#343434]">
                                            {method.name}
                                        </p>
                                        {method.expdate && (
                                            <p className="text-[#535862] text-sm">
                                                {method.expdate}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex">
                                    <Link to="">
                                        {" "}
                                        <CiEdit className="text-[24px] me-2" />
                                    </Link>
                                    <Link to="">
                                        {" "}
                                        <CiTrash className="text-[24px]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
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
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <div className="p-4">
                                <p className="text-lg font-semibold text-[#181D27]">
                                    Payment method
                                </p>
                                <p className="text-[#535862] text-sm">
                                    Update your card details.
                                </p>
                                <form action="">
                                    <div className="mt-4">
                                        <div>
                                            <label className="text-sm font-semibold">
                                                Select Payment Method
                                            </label>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={method}
                                                onChange={handlemethod}
                                                sx={{ width: "100%" }}
                                            >
                                                <MenuItem value={"mastercard"}>
                                                    <div className="flex">
                                                        <img
                                                            src={mastercard}
                                                            alt=""
                                                            className="me-2 w-[35px]"
                                                        />
                                                        <p>Mastercard</p>
                                                    </div>
                                                </MenuItem>
                                                <MenuItem value={"visa"}>
                                                    <div className="flex">
                                                        <img
                                                            src={visa}
                                                            alt=""
                                                            className="me-2 w-[35px]"
                                                        />
                                                        <p>Visa</p>
                                                    </div>
                                                </MenuItem>
                                            </Select>
                                        </div>
                                        <div className="mt-4">
                                            <label
                                                className="text-sm font-semibold"
                                                htmlFor="fnamec"
                                            >
                                                Name on card
                                            </label>
                                            <input
                                                className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                                placeholder="Name Here"
                                                type="text"
                                                name="fnamec"
                                                id="fnamec"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <label
                                                className="text-sm font-semibold"
                                                htmlFor="numberc"
                                            >
                                                Card number
                                            </label>
                                            <input
                                                className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                                placeholder="Card number"
                                                type="number"
                                                name="numberc"
                                                id="numberc"
                                            />
                                        </div>
                                        <div className="flex justify-between mt-4">
                                            <div>
                                                <label
                                                    className="text-sm font-semibold"
                                                    htmlFor="cvv"
                                                >
                                                    CVV
                                                </label>
                                                <input
                                                    className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                                    placeholder="CVV"
                                                    type="number"
                                                    name="cvv"
                                                    id="cvv"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    className="text-sm font-semibold"
                                                    htmlFor="exp"
                                                >
                                                    Expiry
                                                </label>
                                                <input
                                                    className="border border-[#D5D7DA] p-3 rounded-[8px] w-full shadow-[0px_1px_2px_0px_#0A0D120D] focus:outline-none"
                                                    placeholder="Expiry"
                                                    type="date"
                                                    name="exp"
                                                    id="exp"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="flex flex-wrap gap-3 items-center ms-auto justify-end mt-4">
                                    <button
                                        onClick={handleClose}
                                        className="text-[#414651] font-semibold text-sm border border-[#D5D7DA] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#FFFFFF] rounded-[8px] py-3 px-4"
                                    >
                                        Cancel
                                    </button>
                                    <button className="text-[#ffffff] font-semibold text-sm border border-[#0F91D2] shadow-[0px 1px_2px_0px_#0A0D120D] bg-[#0F91D2] rounded-[8px] py-3 px-4">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Payment
