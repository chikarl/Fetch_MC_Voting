import React from "react";
import {
  FaRegListAlt,
  FaUserCheck,
  FaSortNumericUpAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import styled from "styled-components";

const steps = [
  {
    icon: <FaRegListAlt size={28} color="#000" />,
    title: "1. Choose Campaign",
  },
  {
    icon: <FaUserCheck size={28} color="#000" />,
    title: "2. Identify your preferred candidate",
  },
  {
    icon: <FaSortNumericUpAlt size={28} color="#000" />,
    title: "3. Select the number of votes",
  },
  {
    icon: <FaMoneyCheckAlt size={28} color="#000" />,
    title: "4. Make Payment",
  },
];

const HowItWorks = () => {
  // const steps = [
  //   {
  //     icon: (
  //       <svg
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg">
  //         <path d="M3 3H21V21H3V3Z" fill="#000" />
  //         <path d="M6 6H8V8H6V6Z" fill="#fff" />
  //         <path d="M6 10H8V12H6V10Z" fill="#fff" />
  //         <path d="M6 14H8V16H6V14Z" fill="#fff" />
  //         <path d="M10 6H12V8H10V6Z" fill="#fff" />
  //         <path d="M10 10H12V12H10V10Z" fill="#fff" />
  //         <path d="M10 14H12V16H10V14Z" fill="#fff" />
  //         <path d="M14 6H16V8H14V6Z" fill="#fff" />
  //         <path d="M14 10H16V12H14V10Z" fill="#fff" />
  //         <path d="M14 14H16V16H14V14Z" fill="#fff" />
  //         <polygon points="18,8 22,12 18,16" fill="#000" />
  //       </svg>
  //     ),
  //     title: "1. Choose Campaign",
  //   },
  //   {
  //     icon: (
  //       <svg
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg">
  //         <circle cx="12" cy="8" r="4" fill="#000" />
  //         <path d="M12 14c-4 0-8 2-8 6v2h16v-2c0-4-4-6-8-6z" fill="#000" />
  //       </svg>
  //     ),
  //     title: "2. Identify your preferred candidate",
  //   },
  //   {
  //     icon: (
  //       <svg
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg">
  //         <polygon points="5,12 10,7 10,17" fill="#000" />
  //         <polygon points="19,12 14,7 14,17" fill="#000" />
  //       </svg>
  //     ),
  //     title: "3. Select the number of votes",
  //   },
  //   {
  //     icon: (
  //       <svg
  //         width="24"
  //         height="24"
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg">
  //         <circle
  //           cx="12"
  //           cy="12"
  //           r="10"
  //           stroke="#000"
  //           strokeWidth="2"
  //           fill="none"
  //         />
  //         <path d="M8 12l2 2 4-4" stroke="#000" strokeWidth="2" fill="none" />
  //         <circle cx="18" cy="6" r="3" fill="#000" />
  //         <path d="M16 4l2 2 4-4" stroke="#fff" strokeWidth="1.5" fill="none" />
  //       </svg>
  //     ),
  //     title: "4. Make Payment",
  //   },
  // ];

  return (
    <Wrapper>
      <div className=" container how-it-works-container">
        <h2 className="how-it-works-title">HOW IT WORKS</h2>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className={`step-item step-${index + 1}`}>
              <div className="step-icon">{step.icon}</div>

              <p className="step-title">{step.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .how-it-works-container {
    /* max-width: 800px; */
    /* margin: 0 auto; */
    padding: 80px 20px;
    /* font-family: system-ui, -apple-system, sans-serif; */
  }

  /* .how-it-works-title {
    font-size: 48px;
    font-weight: 900;
    color: #000;
    margin-bottom: 80px;
    text-align: left;
    letter-spacing: -0.02em;
  } */

  .steps-container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: flex-start;
  }

  .step-item {
    display: flex;
    align-items: center;
    gap: 36px;
    /* width: 550px; */
    padding: 12px 16px;
    transition: all 0.3s ease;
    background-color: #fff8f8;
    border-radius: 24px;
    padding-right: 50px;
  }

  /* Progressive indentation for each step */
  .step-1 {
    margin-left: 0px;
  }

  .step-2 {
    margin-left: 20%;
  }

  .step-3 {
    margin-left: 40%;
  }

  .step-4 {
    margin-left: 60%;
  }

  .step-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #f8d7da;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 15px rgba(248, 215, 218, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .step-icon:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(248, 215, 218, 0.6);
  }

  .step-title {
    font-size: 24px;
    /* font-weight: 600; */
    color: #000;
    margin: 0;
    line-height: 1.2;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .how-it-works-container {
      padding: 40px 16px;
    }

    .how-it-works-title {
      font-size: 36px;
      margin-bottom: 60px;
    }

    .steps-container {
      gap: 40px;
    }

    .step-item {
      gap: 24px;
    }

    /* Reduce indentation on mobile */
    .step-1 {
      margin-left: 0px;
    }

    .step-2 {
      margin-left: 20px;
    }

    .step-3 {
      margin-left: 40px;
    }

    .step-4 {
      margin-left: 60px;
    }

    .step-icon {
      width: 60px;
      height: 60px;
    }

    .step-title {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    .how-it-works-title {
      font-size: 28px;
      margin-bottom: 40px;
    }

    .step-item {
      flex-direction: column;
      text-align: center;
      gap: 16px;
    }

    /* Remove indentation on very small screens */
    .step-1,
    .step-2,
    .step-3,
    .step-4 {
      margin-left: 0px;
    }

    .step-icon {
      width: 50px;
      height: 50px;
    }

    .step-title {
      font-size: 16px;
    }
  }
`;
export default HowItWorks;
