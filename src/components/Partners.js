import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import heroBcg from "../assets/hero-bcg.jpg";


const Partners = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Partners</h3>
        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 10rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default Partners