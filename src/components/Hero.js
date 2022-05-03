import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpg";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <Wrapper className="section-center">
    
      <Fade left>
        <article className="content">
          <h1>
            Lựa chọn chất liệu phù hợp <br />
            cho ngôi nhà của bạn
          </h1>
          <p>
            Thanh Thanh Phương chuyên phân phối và cung cấp các loại gạch ốp
            tường cùng sơn tường không những mang lại không gian sạch sẽ mà còn
            toát lên sự sang trọng, hiện đại trong từng góc cạnh.
          </p>
          {/* <Link to="/products" className="btn hero-btn">
            xem thêm
          </Link> */}
        </article>
      </Fade>
      <Fade right>
        <article className="img-container">
          <img src={heroBcg} alt="main hero" className="main-img" />
         
        </article>
      </Fade>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
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
      transition: var(--transition);
      overflow: hidden;
    }
    .main-img:hover {
      transform: scale(1.05);
    }
  }
`;

export default Hero;
