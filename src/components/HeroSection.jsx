import React from "react";
import left from "../assets/left_1.jpg";
import right from "../assets/left.png";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="hero-container">
        {/* Left Circular Image */}
        <div className="hero-circle hero-left">
          <img src={left} alt="Group Left" />
        </div>

        {/* Right Circular Image */}
        <div className="hero-circle hero-right">
          <img src={left} alt="Group Right" />
        </div>

        {/* Center Text Content */}
        <div className="hero-content">
          <h1>
            Your Voice, Your Impact.
            <br />
            Vote and Support.
          </h1>

          <p>
            Participate in campaigns, make your vote count, <br />
            and contribute directly
          </p>
          <button>Explore Campaigns</button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .hero-container {
    position: relative;
    width: 100%;
    height: 700px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .hero-circle {
    position: absolute;
    border-radius: 50%;
    overflow: hidden;

    width: 740px;
    height: 740px;
  }

  .hero-left {
    left: -211px;
    top: 211px;
  }

  .hero-right {
    top: -212px;
    right: -300px;
  }

  .hero-circle img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero-content {
    z-index: 2;
    max-width: 90%;
  }

  .hero-content h1 {
    font-size: 64px;
    font-weight: bold;
    color: #2d1d8f;
    line-height: 1.2;
    background-color: white;
  }
  .hero-content p {
    background-color: white;
    padding: 0 0 20px 0;
  }
  .hero-content button {
    background-color: #c70000;
    color: white;
    font-weight: 600;
    padding: 15px 25px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .hero-content button:hover {
    background-color: #a00000;
  }
`;
export default HeroSection;
