import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import livingroom3 from "../assets/livingroom3.jpg";
import livingroom2 from "../assets/livingroom2.jpg";
import livingrom from "../assets/livingroom.jpg";
import Fade from "react-reveal/Fade";

const Hero2 = () => {
  return (
    <Wrapper className="section-center">
      <Fade left>
        <article className="img-container">
          <img src={livingrom} alt="main hero" className="main-img" />
        </article>
      </Fade>
      <Fade bottom>
        <article className="img-container">
          <img src={livingroom3} alt="main hero" className="main-img" />
        </article>
      </Fade>
      <Fade right>
        <article className="img-container">
          <img src={livingroom2} alt="main hero" className="main-img" />
        </article>
      </Fade>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  footer p {
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
    font-size: 2rem;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-1);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    ${"" /* height: calc(100vh - 5rem); */}
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8rem;

    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }

    mark {
      background-color: var(--clr-grey-9);
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      position: relative;

      display: block;
      object-fit: cover;
      -webkit-transition: 0.3s ease-in-out;
      transition: 0.3s ease-in-out;
      overflow: hidden;
    }
    .main-img:hover {
      transform: scale(1.05);
    }
  }
`;

export default Hero2
