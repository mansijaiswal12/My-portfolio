import React from "react";

import { NavLink } from "react-router-dom";

const Projectprops = ({title,img,para,link}) => {
  return (
    <div className=" flex">
      <div className="max-w-sm  bg-white border mt-8 ml-6 mr-6 mb-4 border-slate-100 rounded-lg shadow dark:bg-gray-800 dark:border-slate-100">
        <div>
          <img
            className="rounded-t-lg"
            src={img}
            alt="project image"
          />
        </div>
        <div className="p-5">
          <p>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h3>
          </p>
          <p className="mb-3 font-normal  text-gray-700 dark:text-slate-100">
           {para}
          </p>
          <NavLink to={link}>
           
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#B440E2] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#B440E2] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              View
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Projectprops;
