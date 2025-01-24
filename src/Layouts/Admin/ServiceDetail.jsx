import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router";
import servicedet from "../../assets/img/service-det.png";

function ServiceDetail() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl myhead font-semibold">
          Aliquam erat volutpat. Ut semper ipsum in vestibulum laoreet.
        </h2>
        <div className="flex items-center">
          <Link
            to="#"
            className="bg-[#FA2841] px-3 py-3 text-[#fff] rounded-md me-2"
          >
            <FaRegTrashCan />
          </Link>
          <Link
            to="#"
            className="bg-[#0F91D2] px-3 py-3 text-[#fff] rounded-md"
          >
            <FaPencilAlt />
          </Link>
        </div>
      </div>
      <div className="grid mt-4 grid-cols-1 md:grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <img src={servicedet} alt="" className="rounded-xl" />
          <div className="flex flex-wrap mt-3">
            <p className="px-3 py-1 font-semibold text-sm rounded-full me-2 text-[#0F91D2] bg-[#E7F4FB]">
              Cleaning
            </p>
            <p className="px-3 py-1 font-semibold text-sm rounded-full me-2 text-[#343434] bg-[#EBEBEB]">
              Residential
            </p>
          </div>
        </div>
        <div className="col-span-12 bg-[#FAFAFA] md:col-span-4 border rounded-lg">
          <div class="max-w-sm mx-auto p-4  ">
            <div class="flex bg-[#fff] rounded-xl border justify-center mb-4">
              <button class="px-4 py-2 font-semibold myhead rounded-full text-gray-800">
                Basic
              </button>
              <button class="px-4 py-2 myblack rounded-full font-medium text-gray-600">
                Standard
              </button>
              <button class="px-4 py-2 myblack rounded-full font-medium text-gray-600">
                Premium
              </button>
            </div>
            <div>
              <div className="flex justify-between">
                <h2 class="text-2xl font-medium myhead">Plan Title</h2>
                <p className="text-3xl myhead font-bold">$200</p>
              </div>
              <p class="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tellus diam, dignissim tincidunt quam vel, rutrum egestas lacus.
                Phasellus accumsan fermentum dolor eu gravida. Vivamus dignissim
                augue sed orci interdum vehicula.
              </p>
              <ul class="mt-4 myblack text-sm space-y-1">
                <li class="flex items-center">
                  <span class="mr-2">•</span> 3 Workers
                </li>
                <li class="flex items-center">
                  <span class="mr-2">•</span> Delivered Within 2days
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="mt-4 text-xl myhead font-semibold">Deal Description</h2>
        <p className="mt-2">
          Donec pulvinar consequat metus eget cursus. Donec nec quam eu arcu
          elementum tempor eu pharetra mauris. Morbi et gravida purus, nec
          sagittis risus. Nulla placerat justo ut dui aliquam efficitur. Mauris
          aliquet mattis odio nec malesuada. Morbi at dui tristique, dignissim
          enim ac, varius nulla. Donec venenatis libero nec ligula laoreet
          laoreet. Sed quis lorem in mi suscipit dictum id nec diam. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Nam at vehicula neque. Proin molestie venenatis sem, ut imperdiet
          leo efficitur vel. Vestibulum nec elementum lacus.
        </p>
        <h2 className="mt-4 text-xl myhead font-semibold">Deal Description</h2>
        <ul class="mt-4 myblack text-sm space-y-1">
          <li class="flex items-center">
            <span class="mr-2">•</span> 3 Workers
          </li>
          <li class="flex items-center">
            <span class="mr-2">•</span> Delivered Within 2days
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServiceDetail;
