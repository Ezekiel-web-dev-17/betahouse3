import "./NavBar.css";
import logo from "../../utils/bhlogo.png";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import {
  AiFillCloseCircle,
  AiOutlineCloseCircle,
  AiOutlineMenu,
} from "react-icons/ai";
import CartIcon from "../cart/CartIcon";
import { useEffect, useState } from "react";

const NavBar = () => {
  const firstname = localStorage.getItem("firstName");
  const lastname = localStorage.getItem("lastName");
  const [profileDrop, setProfileDrop] = useState(true);
  useEffect(() => {
    const close = document.querySelector("#close");
    const menu = document.querySelector(".menu");
    const main = document.querySelector(".nav-main");
    close.addEventListener("click", () => {
      close.classList.add("d-none");
      menu.classList.remove("d-none");
      main.classList.add("d-none");
    });
    menu.addEventListener("click", () => {
      menu.classList.add("d-none");
      main.classList.remove("d-none");
      close.classList.remove("d-none");
    });
    main.addEventListener("click", () => {
      menu.classList.remove("d-none");
      main.classList.add("d-none");
      close.classList.add("d-none");
    });
  });

  return (
    <nav className="d-flex justify-content-between align-items-center py-sm-3 py-1 text-white-50 position-fixed top-0 w-100 ">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>

      <div className=" nav-main d-sm-flex d-none gap-sm-5">
        <ul className="links-ul flex-sm-row align-items-center d-flex mb-0">
          <li className=" text-decoration-none list-unstyled text-white">
            <Link to="/">Home</Link>
          </li>
          <li className=" text-decoration-none list-unstyled text-white">
            <Link to="/properties">Properties</Link>
          </li>
          <li className=" text-decoration-none list-unstyled text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" text-decoration-none list-unstyled text-white">
            <Link to="/blog">Blog</Link>
          </li>
          <li className=" text-decoration-none list-unstyled text-white">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>

        <div className="cart-user d-flex gap-4 align-items-center">
          {firstname && lastname != null ? (
            <>
              <div className="d-flex gap-4 align-items-center mb-3">
                <BsPersonCircle
                  className=" text-white fs-4"
                  onClick={() => {
                    setProfileDrop(true);
                  }}
                />
                <p
                  className="mb-0 text-white me-sm-0 me-4"
                  onClick={() => {
                    setProfileDrop(true);
                  }}
                >
                  {firstname.toUpperCase()}
                </p>

                <CartIcon />
                {firstname && lastname && profileDrop && (
                  <div
                    className=" position-absolute d-flex flex-column align-items-start w-100 p-3 rounded-3"
                    style={{
                      bottom: `${window.innerWidth > 400 ? "-25vh" : "10vh"}`,
                      maxWidth: "fit-content",
                      backgroundColor: "#0a5835",
                      boxShadow: "-2px -2px 5px #083613, 2px 2px 5px #3d9f7f",
                    }}
                  >
                    <div className="border-bottom border-2 border-opacity-25 border-black w-100 d-flex justify-content-between">
                      <h5 className="text-white text-start">Profile</h5>
                      <AiFillCloseCircle
                        color="white"
                        fontSize="20px"
                        onClick={() => {
                          setProfileDrop(false);
                        }}
                      />
                    </div>
                    <p className="text-white border-bottom border-2 border-black border-opacity-25 w-100 text-start">
                      <i className=" text-light">User:</i>{" "}
                      {`${firstname} ${lastname}`}
                    </p>
                    <p
                      className="text-white border-bottom border-2 border-black  border-opacity-25 w-100 text-start"
                      style={{ fontSize: "12px" }}
                    >
                      <i className=" text-light fs-6">Email:</i>{" "}
                      {`${localStorage
                        .getItem("userEmail")
                        .slice(0, -10)
                        .slice(0, 15)}`}
                    </p>
                    <button
                      className="bg-danger px-3 py-1 rounded-3 border-0 fst-italic text-white fw-medium logout-btn"
                      style={{ placeSelf: "center", fontSize: "14px" }}
                      onClick={() => {
                        localStorage.clear();
                        setProfileDrop(false);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/sign-up">
                <button className="sign-up px-sm-4 px-2 py-1 py-sm-2 rounded-2 border-1 border-white text-white bg-transparent mb-3">
                  Sign up
                </button>
              </Link>
              <Link to="/sign-in">
                <button className="login-btn border-0 px-sm-4 px-2 py-1 py-sm-2 rounded-2 text-white mb-3">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      <AiOutlineCloseCircle
        id="close"
        className="closer1 close d-sm-none position-relative end-0 d-none me-2 mb-0 text-white fs-1"
      />
      <AiOutlineMenu className="menu d-sm-none position-relative end-0 me-2 mb-0 text-white fs-1" />
    </nav>
  );
};

export default NavBar;
