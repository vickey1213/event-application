import React, { useState } from "react";
import "../assets/form.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import "react-phone-number-input/style.css";
import PhoneInput, {
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";

export const Form = () => {
  // state for user data
  const [user, setUser] = useState({});

  // state for phone input
  const [value, setValue] = useState();

  // handler for getting user data
  const getUserDetails = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      pno: value,
    });
  };

  // handler for submitting user data
  const submitUserData = (e) => {
    // e.preventDefault();
    console.log(user);
  };
  return (
    <>
      <div className="formContainer">
        <h1 className="formHeader">Registration From</h1>
        <form action="/form" method="post" onSubmit={submitUserData}>
          <div className="name_div">
            <div className="icons_div">
              <PersonIcon className="icons" />
              <input
                onChange={getUserDetails}
                name="fname"
                type="text"
                placeholder=" First Name"
                className="inputs"
                required
              />
            </div>
            <div className="icons_div lName">
              <PersonIcon className="icons" />
              <input
                onChange={getUserDetails}
                name="lname"
                type="text"
                placeholder=" Last Name"
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
              <label htmlFor="dob">DOB </label>
              <input
                onChange={getUserDetails}
                type="date"
                name="dob"
                className="inputs"
                required
              />
            </div>
            <PhoneInput
              placeholder="Phone Number"
              className="phone_input"
              value={value}
              onChange={setValue}
              required
            />
          </div>
          <div className="email_div">
            <textarea
              onChange={getUserDetails}
              name="address"
              cols="70"
              rows="7"
              placeholder=" Address"
              className="inputs textarea"
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
      </div>
    </>
  );
};
