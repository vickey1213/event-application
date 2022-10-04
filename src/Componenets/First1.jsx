import React from "react";
import Landingpageimage from "../assets/image/Landing page image.svg";
import "../assets/css/First1.css";
import { Link } from "react-router-dom";

const First1 = () => {
  return (
    // <div>
    //    <div className='landingImage'>
    //    <img  className='image' src={Landingpageimage} alt="" />
    //    </div>
    //    <div className='contain'>
    //         <h1 className='event'>Imagine if  <br /><span className='snap'>snapchat</span> <br />  has event</h1>
    //         </div>
    //         <div>
    //             <h3 className='host'>Easily host and share events with your friends across any social media.</h3>

    //         </div>
    // </div>
    <div className="mainDiv">
      <img className="image" src={Landingpageimage} alt="" />
      <h1 className="event">
        Imagine if <br />
        <span className="snap">snapchat</span>
        <br /> has event
      </h1>
      <h3 className="host">
        Easily host and share events with your friends across any social media.
      </h3>
      {/* <div className="button">
        <button className="btn">create my events</button>
      </div> */}
      <Link to="/create">      <button className="button" ><span className="buttonText">🎉create my events</span></button></Link>
    </div>
  );
};

export default First1;
