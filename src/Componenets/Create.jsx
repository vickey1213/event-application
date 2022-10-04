import React, { useState } from "react";
import "../assets/css/form.css";
import cake from "../assets/image/bCake.png";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import { FcCalendar } from 'react-icons/fc';
import { GoLocation } from 'react-icons/go';

export const Create = () => {
  // state for user data
  const [user, setUser] = useState({});
  console.log(user)

  // state for phone input
  const [status, setStatus] = useState(false);

  // handler for getting user data
  const getUserDetails = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  // handler for submitting user data
  const submitUserData = (e) => {
    e.preventDefault();
    console.log(user);
    // window.open("/events","_self")
    // <Link to="/events"></Link>
    setStatus(!status);
  };
  return (
    <>
      {!status ? <div className="formContainer">
        <h1 className="formHeader">Create Event</h1>
        <form action="/form" method="post" onSubmit={submitUserData}>
          <div className="name_div">
            <div className="icons_div">
              <PersonIcon className="icons" />
              <input
                onChange={getUserDetails}
                name="ename"
                type="text"
                placeholder=" Event Name"
                className="inputs"
                required
              />
            </div>
            <div className="icons_div hname">
              <PersonIcon className="icons" />
              <input
                onChange={getUserDetails}
                name="hname"
                type="text"
                placeholder=" Host Name"
                className="inputs"
                required
              />
            </div>
          </div>
          <div className="email_div">
            <EmailIcon className="icons" />
            <input
              onChange={getUserDetails}
              type="email"
              name="email"
              placeholder=" Email"
              className="inputs longInputs"
              required
            />
          </div>
          <div className="dobPhone_div">
            <div className="dob_div">
              <label htmlFor="dob">Start Date & Time </label>
              <input
                onChange={getUserDetails}
                type="datetime-local"
                name="dob"
                className="inputs"
                required
              />
            </div>
          </div>
          <div className="dobPhone_div">
            <div className="dob_div">
              <label htmlFor="dob">End Date & Time</label>
              <input
                onChange={getUserDetails}
                type="datetime-local"
                name="dob"
                className="inputs"
                required
              />
            </div>
          </div>
          <div className="dob_div">
          <label htmlFor="location">Location</label>
              <input
                onChange={getUserDetails}
                type="text"
                name="location"
                className="inputs"
                required
              />
          </div>
          <div className="email_div terms">
            <input type="checkbox" name="terms" id="" required />
            <label htmlFor="terms">I agree with terms and conditions</label>
          </div>
          <div className="email_div submit">
            <input type="submit" value="Submit" className="inputs" />
          </div>
        </form>
      </div>:null}
      {Object.keys(user).length>0 && status ? <div className="eventMain">
        
            <h1 className="birthday">Birthday Bash</h1>
            <p className="bname">hosted by {user.ename}</p>
        
        
            <FcCalendar className="calender"/>
            <p className="date">{user.dob}</p>
        
        
            <GoLocation/>
            <p>{user.address}</p>
        
        <img className="eventImage" src={cake} alt="" />
    </div>:null}

        
    </>
  );
};
