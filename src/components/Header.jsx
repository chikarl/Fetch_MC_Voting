import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <div></div>
      <h1>
        Your Voice, Your Impact. <br />
        Vote and Support.
      </h1>
      <p>
        Participate in campaigns, make your vote count, and contribute directly
      </p>
      <button>Explore Campaigns</button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Header;
