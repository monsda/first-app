import React from "react";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";

export default function Footer() {
    return (
        <div className="footer">
            <FaTwitterSquare />
            <FaFacebookSquare />
            <FaInstagramSquare />
            <FaLinkedin />
            <FaGithubSquare />
        </div>
    )
}