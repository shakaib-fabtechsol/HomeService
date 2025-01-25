import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function CreateNewDeals() {
  return (
    <div>
      <div className="flex items-center">
        <Link to="/services">
          <FaArrowLeft className="me-4 text-xl" />
        </Link>
        <h2 className="text-2xl font-semibold">Create New Deal</h2>
      </div>
      <p className="text-[#535862] mt-4 ms-8">Create, manage, and organize your deals effortlessly.</p>
      
    </div>
  );
}

export default CreateNewDeals
