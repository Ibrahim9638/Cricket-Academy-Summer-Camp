import React from "react";
import about1 from "../../assets/about/about1.jpg";
import about2 from "../../assets/about/about2.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-8 my-10">
      <div>
        <img
          className="w-[460px]"
          style={{ transform: "rotate(-10deg)" }}
          src={about1}
          alt=""
        />
      </div>
      <div className="space-y-4">
        <h5 className="text-xl font-bold uppercase">About Us</h5>
        <h2 className="uppercase text-5xl font-extrabold tracking-wider">
          WE HAVE 25 YEARS OF <br />{" "}
          <span className="text-red-600">EXPERIENCE</span> IN Cricket
        </h2>
        <p style={{ textShadow: "2px 2px 10px #000000", margin: '30px 0' }}>
          The cricket academy is established with a vision to provide quality
          coaching and training to aspiring cricketers.The academy hires
          experienced coaches and trainers who have played at professional
          levels and have a deep understanding of the academy.
        </p>
        <button className="btn  btn-neutral text-white">About Us</button>
        <img
          className="w-[460px] lg:ml-10 rounded"
          src={about2}
          style={{ transform: "rotate(-10deg)" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
