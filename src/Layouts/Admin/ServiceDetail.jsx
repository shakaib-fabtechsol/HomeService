import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router";
import servicedet from "../../assets/img/service-det.png";

function ServiceDetail() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between">
        <h2 className="text-xl myhead font-semibold lg:me-2">
          Aliquam erat volutpat. Ut semper ipsum in vestibulum laoreet.
        </h2>
        <div className="flex items-center justify-end mt-3 lg:mt-0">
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
        <div className="col-span-12 xl:col-span-8">
          <img src={servicedet} alt="" className="rounded-xl w-full" />
          
        </div>
        <div className="col-span-12 bg-[#FAFAFA] xl:col-span-4 border rounded-lg">
          <div class="py-5 lg:px-6 px-4">
            <div class="flex bg-[#fff] rounded-xl border justify-around mb-4">
              <button class="sm:px-2 py-2 font-semibold myhead rounded-full myhead">
                Basic
              </button>
              <button class="sm:px-2 py-2 myblack rounded-full font-medium myblack">
                Standard
              </button>
              <button class="sm:px-2 py-2 myblack rounded-full font-medium myblack">
                Premium
              </button>
            </div>
            <div>
              <div className="flex justify-between">
                <h2 class="text-2xl font-medium myhead">Plan Title</h2>
                <p className="text-3xl myhead font-bold">$200</p>
              </div>
              <p class="text-sm myblack mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                tellus diam, dignissim tincidunt quam vel, rutrum egestas lacus.
                Phasellus accumsan fermentum dolor eu gravida. Vivamus dignissim
                augue sed orci interdum vehicula.
              </p>
              <ul class="mt-4 myblack text-sm list-disc space-y-1 pl-5">
                <li>3 Workers</li>
                <li>Delivered Within 2 Days</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-wrap mt-3">
            <p className="px-3 py-1 font-semibold text-sm rounded-full me-2 text-[#0F91D2] bg-[#E7F4FB]">
              Cleaning
            </p>
            <p className="px-3 py-1 font-semibold text-sm rounded-full me-2 text-[#343434] bg-[#EBEBEB]">
              Residential
            </p>
          </div>
        <h2 className="mt-4 text-xl myhead font-semibold">Deal Description</h2>
        <p className="mt-2 myblack">
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
        <h2 className="mt-4 text-xl myhead font-semibold">Fine Print</h2>
        <ul class="mt-4 myblack text-sm list-disc space-y-1 pl-5">
          <li>Pellentesque maximus augue in tellus fermentum viverra.</li>
          <li>Nunc euismod erat et volutpat tincidunt.</li>
          <li>In sit amet enim in nisl fermentum venenatis et ut dui.</li>
          <li>
            Phasellus vel orci pretium, tristique magna at, porttitor neque.
          </li>
          <li>
            Integer mollis ligula eu tortor porttitor, sit amet elementum dolor
            feugiat.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ServiceDetail;
