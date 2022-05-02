import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpg'
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <Fade left>
        <article className="content">
          <h1>
            Hãy thiết kế <br />
            ngôi nhà của bạn
          </h1>
          <p>
            Thanh Thanh Phương là{" "}
            <mark>một trong số nhà phân phối số 1 khu vực miền Nam</mark>. Chúng
            tôi chuyên phân phối và cung cấp vật liệu xây dựng, trang trí nội và
            ngoại thất.
          </p>
          <Link to="/products" className="btn hero-btn">
            xem thêm
          </Link>
        </article>
      </Fade>
      <Fade right>
        <article className="img-container">
          <img src={heroBcg} alt="main hero" className="main-img" />
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

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-1);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
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
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
   
    }
  }
`;

export default Hero
