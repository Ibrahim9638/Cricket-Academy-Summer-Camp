import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/Ai';
import { BsPeopleFill } from 'react-icons/Bs';
import { MdEventSeat } from 'react-icons/Md';
import { TbCurrencyTaka } from 'react-icons/Tb';

const PopularClassCard = ({classInfo}) => {
    const { _id, image, InstructorEmail, price, status, enrolledStudent,className,seats } =
    classInfo;
    return (
        <div className="card bg-base-100 shadow-xl border h-[500px] ">
        <figure>
          <img src={classInfo.image} className="h-full w-full"  alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{classInfo.className}</h2>

          <div className="flex items-center">
            <i>
              <BsPeopleFill></BsPeopleFill>
            </i>
            <span className="text-md ml-2 font-semibold">
              {classInfo.enrolledStudent} Students
            </span>
            
          </div>
          <div className="flex items-center">
            <i>
              <MdEventSeat></MdEventSeat>
            </i>
            <span className="text-md ml-2 font-semibold">
              {classInfo.seats} Seats Available
            </span>
          </div>

          <div className="flex items-center">
            <i>
              <TbCurrencyTaka></TbCurrencyTaka>
            </i>
            <span className="text-md ml-2 font-semibold">
              {classInfo.price}/- Taka 
            </span>
          </div>

          <p >Cricket is played between two teams, each consisting of eleven players.</p>
          <p className="font-bold">Instructor: {classInfo.InstructorName}</p>
          <div className="card-actions justify-end mt-2">
            <button
              
              className="btn btn-primary border-0 border-b-4 border-red-600 "
            >
              <AiOutlineShoppingCart className="text-lg"></AiOutlineShoppingCart>{" "}
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default PopularClassCard;