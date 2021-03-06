import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import bed from '../assets/bedroom.jpg'
import Fade from "react-reveal/Fade";

const Hero3 = () => {
  return (
    <Wrapper className="section-center">
      <Fade left>
        <article className="img-container">
          <img src={bed} alt="main hero" className="main-img" />
        </article>
      </Fade>
      <Fade right>
        <article className="content">
          <h3 >Cảm giác ấm cúng</h3>
          <p>
            Thanh Thanh Phương chia sẻ cách thiết kế và đồ nội thất để tạo nên
            một không gian ấm cúng và trọn vẹn khi những người thân yêu trong
            gia đình được gần gũi nhau
          </p>
          {/* <Link to="/products" className="btn hero-btn">
            xem thêm
          </Link> */}
        </article>
      </Fade>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  .content {
    text-align: center;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-1);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 15rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    h1 {
      margin-bottom: 2rem;
      color: var(--clr-black);
    }
    h1:hover {
      -webkit-text-stroke: 1px black;
      -webkit-text-fill-color: white;
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
      transition: var(--transition);
      overflow: hidden;
    }
    .main-img:hover {
      transform: scale(1.05);
    }
  }
`;

export default Hero3
