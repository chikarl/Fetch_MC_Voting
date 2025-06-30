import React, { useState, useEffect, use } from "react";
import axios from "axios";
import styled from "styled-components";
import beauty from "../assets/Hair spray-bro 1.png";
import art from "../assets/Artist-rafiki 1.png";
import tech from "../assets/Online tech talks-amico 1.png";
import edu from "../assets/Learning-bro (1) 1.png";
import music from "../assets/Music-amico 1.png";

const categories = [
  { title: "Art", image: art },
  { title: "Beauty", image: beauty },
  { title: "Technology", image: tech },
  { title: "Education", image: edu },
  { title: "Music", image: music },
];

const CategoriesSection = () => {
  // const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://crowdfund.fetchproduction.com/wp-json/wp/v2/voting_category"
      )
      .then((response) => {
        setCategories(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
    setLoading(true);
  }, []);
  // console.log(categories);

  return (
    <Wrapper>
      <div className="container categories-section">
        <div className="categories-grid">
          <div>
            <h2 className="section-title">
              Voting <br /> Categories
            </h2>
          </div>
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              <img src={cat.image} alt={cat.title} />
              <p>{cat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .categories-section {
    padding: 100px 20px;
    background-color: #fff;
    text-align: center;
  }

  .section-title {
    text-align: left;
  }

  .categories-grid {
    display: grid;
    grid-template-columns: 33.33% 33.33% 33.33%;
    gap: 40px;
    text-transform: uppercase;
  }

  .category-card {
    background: #7d7d7d0f;
    border-radius: 28px;
    padding: 20px;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .category-card:hover {
    transform: translateY(-5px);
  }

  .category-card img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .category-card p {
    font-weight: 600;
    color: #000;
    font-size: 32px;
  }
`;
export default CategoriesSection;
