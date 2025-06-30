import React from "react";
import styled from "styled-components";
import bg_image from "../assets/bg_image.jpg";

function SingleCampaign() {
  return (
    <Wrapper>
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <h1>African Beauty Contest</h1>
          <p>
            Participate in campaigns, make your vote count,
            <br /> and contribute directly
          </p>
          <button>Explore Campaigns</button>
        </div>
      </div>
      <div className="container">
        <div className="flex-row">
          <h3>African Beauty Contest</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            itaque, corporis ullam iure quia tenetur a consequuntur ea ab
            numquam eligendi dolor blanditiis cupiditate iusto at consectetur
            quos ipsum eaque! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Hic commodi mollitia, ratione est consectetur non, porro
            expedita, ipsam magnam fugiat blanditiis accusantium eos doloribus.
            Aspernatur enim possimus quis rem, quae nesciunt, sunt molestias
            totam sed ab obcaecati tenetur soluta quia laboriosam quos vel
            pariatur qui, debitis saepe facere facilis tempore?
          </p>
        </div>

        <div>
          <h2>Meet the Contestants</h2>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .hero-section {
    position: relative;
    height: 80vh;
    background-image: url(${bg_image});
    background-size: cover;
    background-position: center;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6); /* Dark overlay */
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content h1 {
    font-size: 64px;
    font-weight: bold;
    color: #2d1d8f;
    line-height: 1.2;
  }
  .flex-row {
    display: flex;
    flex-direction: fow;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
    gap: 20px;
  }
  h3 {
    width: calc();
  }
  .flex-row p {
    width: calc(100% - 280px);
  }
  h3 {
    font-size: 32px;
    font-weight: bold;
    color: #2d1d8f;
    margin-bottom: 20px;
  }
  .content p {
    font-size: 20px;
    text-align: center;
    padding: 0 0 20px 0;
  }
  .content button {
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

  .content button:hover {
    background-color: #a00000;
  }
`;
export default SingleCampaign;
