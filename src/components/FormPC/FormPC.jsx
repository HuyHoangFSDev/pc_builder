import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import PCBuilded from "../PCBuilded/PCBuilded";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import "./FormPC.css";

export default function FormPC() {
  const [submit, setSubmit] = useState(false);
  const [dollars, setDollars] = useState(1000);
  const [loaded, setLoaded] = useState(false);


  const handleSubmit = () => {
    setSubmit(true);
    setTimeout(
      () => {
        setLoaded(true)
      }, 3000
    )
  };

  const handleChange = (e) => {
    setDollars(e);
  };

  return (
    <div>
      {submit ? ( 
          (loaded === true) ? <PCBuilded/> :
          <Loader/>
      ) : (
        <div>
          <div className="input-container">
            <p className="title">How many dollars you want to spend?</p>
            <div className="input-wrapper">
              <input
                type="number"
                onChange={(e) => handleChange(e.target.value)}
                value={dollars}
                className="input-with-icon"
              />
              <RiMoneyDollarCircleFill className="icon" />
            </div>
          </div>
          <br/>
          <div className="select-container">
            <p className="title">PC type</p>
            <select className="select">
              <option value={0}>Gaming</option>
              <option value={1}>Workstation</option>
            </select>
          </div>
          <p>More options coming soon...</p>
          <button className="submit" onClick={handleSubmit}>Get my PC</button>
        </div>
      )}
    </div>
  );
}
