import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
import { BiStar } from "react-icons/bi";
import pic from "../../assets/images/man1.jpg"
import pic2 from "../../assets/images/man2.jpg"

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className="text-white border-[1px] shadow-sm p-3 rounded-sm bg-gray-900 absolute top-0 right-0 cursor-pointer"
      onClick={onClick}
    ><BsArrow90DegRight/></div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className="text-white border-[1px] shadow-sm p-3 rounded-sm bg-gray-900 absolute top-0 right-10 z-10 cursor-pointer"
      onClick={onClick}
    ><BsArrow90DegLeft/></div>
  );
}

const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
  return (
    <div className="w-full md:w-1/2 mx-auto">
    <Slider {...settings} className="">
      {/* TESTIMONIAL 1  */}
      <div className="h-[350px] w-full bg-gray-950">
       <div className="flex items-center">
        <div className="w-2/3 h-2/3 bg-black mx-auto p-4 flex flex-col pt-[100px] mt-16 gap-2 rounded-md">
          {/* IMG  */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] shadow-md shadow-black border-green-600 bg-black top-5 absolute">
          <img src={pic2} alt="" className="w-full h-full object-cover"/>
          </div>
          {/* INNER  */}
          <div className="flex justify-between items-center">
          <h2 className="text-lg md:text-xl text-red-500">Amazing Service</h2>
          <div className="flex gap-1 text-green-500 text-xs">
            <BiStar/>
            <BiStar/>
            <BiStar/>
            <BiStar/>
          </div>
          </div>
          <p className="text-xs font-thin">We started this opencollective to support the development work of react-slick. One of the core contributor is working full time on this project to fix all the open issues and improving documentation.</p>
        </div>
       </div>
      </div>

  {/* TESTIMONIAL 2  */}
  <div className="h-[350px] w-full bg-gray-950">
       <div className="flex items-center">
        <div className="w-2/3 h-2/3 bg-black mx-auto p-4 flex flex-col pt-[100px] mt-16 gap-2 rounded-md">
          {/* IMG  */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] shadow-md shadow-black border-green-600 bg-black top-5 absolute">
          <img src={pic} alt="" className="w-full h-full object-cover"/>
          </div>
          {/* INNER  */}
          <div className="flex justify-between items-center">
          <h2 className="text-xl text-red-500">Amazing Service</h2>
          <div className="flex gap-1 text-green-500 text-xs">
            <BiStar/>
            <BiStar/>
            <BiStar/>
            <BiStar/>
          </div>
          </div>
          <p className="text-xs font-thin">We started this opencollective to support the development work of react-slick. One of the core contributor is working full time on this project to fix all the open issues and improving documentation.</p>
        </div>
       </div>
      </div>


   {/* TESTIMONIAL 3  */}
      <div className="h-[350px] w-full bg-gray-950">
       <div className="flex items-center">
        <div className="w-2/3 h-2/3 bg-black mx-auto p-4 flex flex-col pt-[100px] mt-16 gap-2 rounded-md">
          {/* IMG  */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-[3px] shadow-md shadow-black border-green-600 bg-black top-5 absolute">
          <img src={pic2} alt="" className="w-full h-full object-cover"/>
          </div>
          {/* INNER  */}
          <div className="flex justify-between items-center">
          <h2 className="text-xl text-red-500">Amazing Service</h2>
          <div className="flex gap-1 text-green-500 text-xs">
            <BiStar/>
            <BiStar/>
            <BiStar/>
            <BiStar/>
          </div>
          </div>
          <p className="text-xs font-thin">We started this opencollective to support the development work of react-slick. One of the core contributor is working full time on this project to fix all the open issues and improving documentation.</p>
        </div>
       </div>
      </div>
    </Slider>
  </div>
  )
}

export default TestimonialSlider