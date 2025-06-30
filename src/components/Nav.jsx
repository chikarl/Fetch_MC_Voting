import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { RiMenu4Fill } from "react-icons/ri";

function Nav() {
  console.log(logo);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="flex-row">
          <div>
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </div>
          <div className="menu">
            <RiMenu4Fill className="hamburger" onClick={toggleMenu} />
            <ul className={isOpen ? "active" : ""}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/campaigns">Explore Campaigns</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .flex-row {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
  }
  .menu {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
    padding: 0;
  }

  li a {
    color: black;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
  }

  .hamburger {
    display: none;
    cursor: pointer;
    font-size: 20px;
    margin-right: 20px;
  }

  @media only screen and (max-width: 1024px) {
    .menu {
      position: relative;
    }
    .logo {
      display: block;
    }
    .logo img {
      width: 120px;
    }
    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 100%;
      background-color: #4c25ef;
      padding: 10px;
      width: 100%;
      min-width: 70px;
    }
    ul a {
      text-align: center;
    }

    ul.active {
      display: flex;
    }

    .hamburger {
      display: block;
    }
    img {
      width: 250px;
    }
  }
`;

export default Nav;
