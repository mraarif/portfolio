import React from "react"
import { FaGithubSquare, FaInstagram, FaLinkedin, FaStackOverflow, FaTwitterSquare } from "react-icons/fa"

import "../layout.css"

const MobileSocialLinks = ({ contacts }) => {
  return (
    <div className="bottom-bar py-1">
      <a className=" text-primary" href={contacts.linkedin}>
        <span title="Linked In">
          <FaLinkedin size={26} style={{ color: "white" }}/>
        </span>
      </a>
      <a className="text-light" href={contacts.github}>
        <span title="GitHub">
          <FaGithubSquare size={26} style={{ color: "white" }}/>
        </span>
      </a>
      <a className="text-warning" href={contacts.stackoverflow}>
        <span title="Stack Overflow">
          <FaStackOverflow size={26} style={{ color: "white" }}/>
        </span>
      </a>
      <a className="text-info" href={contacts.twitter}>
        <span title="Twitter">
          <FaTwitterSquare size={26} style={{ color: "white" }}/>
        </span>
      </a>
      <a className="text-success" href={contacts.instagram}>
        <span title="instagram">
          <FaInstagram size={26} style={{ color: "white" }}/>
        </span>
      </a>
    </div>
  )
}

export default MobileSocialLinks
