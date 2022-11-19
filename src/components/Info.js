import React from "react";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope"
import profile from "../images/profile.jpg" 

export default function Info() {
    return (
        <div className="info">
            <img src={ profile } alt="profile pic" id="profile"/>
            <h1 id="name">Name</h1>
            <h3 id="info-desc">description</h3>
            <p id="website">website</p>
            <button id="mail-btn"><FaEnvelope id="mail-icon"/><span id="text">Email</span></button>
        </div>
    )
}