import React from "react";
import styled from "styled-components";
import CampaignsSection from "../components/CampaignsSections";

function Campaigns() {
  return (
    <Wrapper>
      <div className="container">
        <input type="text" />
        <div className="row">
          <div className="filter">Category </div>
          <div className="campaigns">
            <CampaignsSection />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .row {
    display: flex;
    flex-direction: row;
    /* width: 100%; */
  }
  .filter {
    width: 280px;
    background-color: #f6f6ff;
    padding: 30px;
  }
  .campaigns {
    width: calc(100% - 280px);
  }
`;
export default Campaigns;
