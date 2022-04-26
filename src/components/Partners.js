import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import dongtam from "../assets/partners/dongtam.jpg";
import hatien from "../assets/partners/hatien.png";
import inax from "../assets/partners/inax.png";
import insee from "../assets/partners/insee.png";
import spec from "../assets/partners/spec.png";
import toto from "../assets/partners/toto.png";
import weber from "../assets/partners/weber.jpg";

const settings = {
  arrows: false,
  autoplay: true,
  dots: true,
  duration: 100,
};

const Partners = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>Đối tác kinh doanh</h3>
        <p>
          Thanh Thanh Phương cộng tác với nhiều doanh nghiệp và tổ chức lớn trên
          thế giới để cung cấp nhiều mặt hàng mới nhất.
        </p>
        <div className="partners-logo-container">
          <img src={inax} alt="nice table" className="partners-logo" />
          <img src={insee} alt="nice table" className="partners-logo" />
          <img src={dongtam} alt="nice table" className="partners-logo" />
          <img src={hatien} alt="nice table" className="partners-logo" />
          <img src={spec} alt="nice table" className="partners-logo" />
          <img src={toto} alt="nice table" className="partners-logo" />
          <img src={weber} alt="nice table" className="partners-logo" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 5rem;
  padding-bottom: 0rem;
  padding-left: 0;
  padding-right: 0;
  width: 100%;
  text-align:center;

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
  .partners-logo-container {

  }
  .partners-logo {
    display:block;
    margin: 0 auto;
    height: 75px;
  }
  @media (min-width: 576px) {
    padding-top: 22rem;
    .partners-logo-container {
        display: flex;
        align-items: center;
        margin: 4rem auto;
    }
    
    .partners-logo {
        height: 75px;
        opacity: 1;
        filter: grey; /* IE6-9 */
        -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
        filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
         -webkit-filter: grayscale(100%);
    }
    .partners-logo:hover {
        -webkit-filter: grayscale(0);
        filter: none;
    }
`;

export default Partners;
