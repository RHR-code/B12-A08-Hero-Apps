import React from "react";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-white md:p-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
      <div className="p-10">
        <img className="w-15" src={logo} alt="" />
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:items-center md:gap-5 justify-between m-10 border-b border-dashed mb-5 ">
        <div className="flex flex-col md:flex-row  gap-20 mb-10">
          <nav className="flex flex-col  gap-2">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col gap-2">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Websites</a>
            <a className="link link-hover">Collections</a>
            <a className="link link-hover">ELements</a>
          </nav>
        </div>
        <div className="mb-10 md:mb-0">
          <h4>Got A Project In Mind</h4>
          <h1 className="text-6xl md:text-9xl font-bold mt-5">Let's Talk</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between p-10 items-start gap-5 md:gap-5 lg:gap-0">
        <div>
          <nav className="flex md:flex-row flex-col gap-3 md:gap-10 mb-10">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <div className="flex items-start flex-col md:flex-row md:items-center gap-5">
            <img className="w-20" src={logo} alt="" />
            <span className="text-5xl font-bold">HERO.IO</span>
            <span className="md:w-3 -ml-2">Building Productive Apps</span>
          </div>
        </div>
        <div className="flex gap-10 items-center  md:text-5xl ">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
