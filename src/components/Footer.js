import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          >
            <BsFacebook />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          >
            <BsTwitter />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <BsGoogle />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <BsInstagram />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          >
            <BsLinkedin />
          </a>
          <a
            className="btn text-white btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          >
            <BsGithub />
          </a>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a
          className="text-white"
          href="https://mdbootstrap.com/"
          target="_blank"
        >
          Shivam's Retoler Website
        </a>
      </div>
    </footer>
  );
};

export default Footer;
