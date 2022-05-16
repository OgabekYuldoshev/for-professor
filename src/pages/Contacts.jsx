import { HiLocationMarker } from "react-icons/hi";
import { FaUserAlt, FaSuitcase } from "react-icons/fa";
import { BsFillTelephoneFill, BsUiRadios } from "react-icons/bs";
import { MdEmail, MdSearch } from "react-icons/md";
import React from "react";

const Projects = () => {
  const map =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191884.74398629114!2d69.13928236958517!3d41.28277055580637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1652696504250!5m2!1sen!2s" width="100%" height="450" style="border:0;" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>';
  return (
    <>
      <h1 className="text-2xl underline">Contact Us</h1>

      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        Address
      </h2>
      <div className="grid gap-5">
        <div className="bg-white p-8 rounded-lg">
          <div className="mb-8 cursor-pointer flex gap-8 transform duration-300 flex items-center">
            <HiLocationMarker className="text-3xl text-blue-500" />
            <h2 className="font-bold text-base">
              Department of Computer Science and Engineering, Institute of
              Technology, Nirma University, S G Highway , Ahmedabad – 382481,
              Gujarat, India
            </h2>
          </div>
          <div dangerouslySetInnerHTML={{ __html: map }} />
        </div>
      </div>

      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        Faculty Advisor
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {/* UserName */}

        <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
          <FaUserAlt className="text-3xl text-blue-500" />
          <div className="text-base">
            <h2 className="font-bold">Sudeep Tanwar</h2>
            <p className="text-gray-500">SMIEEE</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
          <BsUiRadios className="text-7xl text-blue-500" />
          <div className="text-base">
            <h2 className="font-bold">Professor</h2>
            <p className="text-gray-500">
              Department of Computer Science and Engineering, Institute of
              Technology, Nirma University, S-G Highway, Post-Chandlodia,
              Ahmedabad, 382481, Gujarat, India
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
          <FaSuitcase className="text-3xl text-blue-500" />
          <div className="text-base">
            <h2 className="font-bold">Visiting Professor</h2>
            <p className="text-gray-500">
              Jan Wyżykowski University, Polkowice, Poland and University of
              Pitesti, Pitesti, Romania
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
          <BsFillTelephoneFill className="text-3xl text-blue-500" />
          <div className="text-base">
            <h2 className="font-bold">Contact no.</h2>
            <p className="text-gray-500">+91-8392837867, +91-9410229390</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
          <MdEmail className="text-3xl text-blue-500" />
          <div className="text-base">
            <h2 className="font-bold">Email</h2>
            <p className="text-gray-500">
              sudeep.tanwar@nirmauni.ac.in, sudeep149@rediffmail.com
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-lg my-8 bg-white text-center p-2 rounded bg-blue-500 text-white">
        ST Lab
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
          <MdEmail className="text-3xl text-blue-500" />
          <div className="text-base">
            <h2 className="font-bold">sudeeptanwarlab@gmail.com</h2>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg cursor-pointer flex gap-8 hover:-translate-y-2 hover:shadow-lg transform duration-300 flex items-center">
          <MdSearch className="text-3xl text-blue-500" />
          <div className="text-base">
            <h2 className="font-bold">Sudeep Tanwar's Research Group</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
