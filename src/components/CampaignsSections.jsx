import React from "react";
import { FaCalendarDays, FaUserGroup } from "react-icons/fa6";
import styled from "styled-components";
import bg_img from "../assets/bg_image.jpg";

const campaigns = Array(6).fill({
  title: "African Beauty Contest",
  description:
    "Brief explanation of the contest. Description should carry key information and should be limited to 3 lines...",
  votePrice: "2,500CFA/Vote",
  participants: 15,
  date: "23/05/2025",
  image: bg_img,
});

const CampaignsSection = () => {
  return (
    <Wrapper>
      <section className="container campaigns-section">
        <div className="campaigns-grid">
          {campaigns.map((item, index) => (
            <div className="campaign-card" key={index}>
              <div className="card-image">
                <img src={item.image} alt={item.title} />
                <span className="vote-price">{item.votePrice}</span>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>
                  {item.description}
                  <a href="#readmore">read more</a>
                </p>
                <div className="card-info">
                  <span>
                    <FaUserGroup />
                    {item.participants} Participants
                  </span>
                  <span>
                    <FaCalendarDays /> {item.date}
                  </span>
                </div>
                <div className="card-buttons">
                  <button className="vote-btn">Vote Now</button>
                  <button className="learn-btn">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .campaigns-section {
    padding: 20px 20px;
    background-color: #fff;
    text-align: center;
  }

  .campaigns-section h2 {
    margin-bottom: 40px;
  }

  .campaigns-grid {
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); */
    /* grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); */
    grid-template-columns: 33.33% 33.33% 33.33%;

    gap: 25px;
    justify-items: center;
  }

  .campaign-card {
    width: 100%;
    max-width: 408px;
    border-radius: 32px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
    transition: transform 0.3s;
    border: 0.5px solid #000000;
  }

  .campaign-card:hover {
    transform: translateY(-5px);
  }

  .card-image {
    position: relative;
  }

  .card-image img {
    width: 100%;
    height: 330px;
    object-fit: cover;
  }

  .vote-price {
    position: absolute;
    bottom: 18px;
    right: 10px;
    background: #fff;
    padding: 8px;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 48px;
  }

  .card-content {
    padding: 15px;
    text-align: left;
  }

  .card-content h3 {
    font-size: 24px;
    font-weight: bold;
    /* margin-bottom: 8px; */
  }

  .card-content p {
    margin-bottom: 12px;
  }

  .card-content a {
    color: #000;
    font-weight: bold;
    text-decoration: none;
  }

  .card-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    align-self: center;
    margin-bottom: 15px;
    color: #000000;
  }
  .card-info span {
    display: flex;
    font-weight: 600;
  }

  .card-info svg {
    font-size: 22px;
    margin-right: 10px;
  }

  .card-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  button {
    font-size: 16px;
    font-weight: 300;
    width: 50%;
    border-radius: 12px;
    border: none;
    padding: 15px 14px;
    cursor: pointer;
    color: #fff;
  }
  .vote-btn {
    background: #b20000;
  }

  .learn-btn {
    background: #1b23c6;
  }
`;
export default CampaignsSection;
