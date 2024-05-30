import React, { createContext, useState } from "react";
import { IoMdDesktop } from "react-icons/io";
import { IoIosFlash } from "react-icons/io";
import FormPC from "../components/FormPC/FormPC";
import './Home.css';

export default function Home() {
  return (
    <div>
      <h1>
        <span>
          <IoMdDesktop className="desktop-icon"/>
        </span>
        <span>
          <IoIosFlash className="flash-icon"/>
        </span>
      </h1>

      <h1>
        <span>PC Builder </span>
        <span className="ai">AI</span>
      </h1>
      <p>Get the most bang for your buck</p>
      <FormPC />
    </div>
  );
}
