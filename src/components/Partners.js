import React from "react";
import styled from "styled-components";
import dongtam from "../assets/partners/dongtam.jpg";
import hatien from "../assets/partners/hatien.png";
import inax from "../assets/partners/inax.png";
import insee from "../assets/partners/insee.png";
import spec from "../assets/partners/spec.png";
import weber from "../assets/partners/weber.jpg";
import kuto from "../assets/partners/kuto.png";
import Fade from "react-reveal/Fade";

const Partners = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <Fade top>
          <h3>Đối tác kinh doanh</h3>
          <p>
            Thanh Thanh Phương cộng tác với nhiều doanh nghiệp và tổ chức lớn
            trên thế giới để cung cấp nhiều mặt hàng mới nhất.
          </p>
        </Fade>
        <Fade top>
          {" "}
          <div className="partners-logo-container">
            <img src={inax} alt="partner logo" className="partners-logo" />
            <img src={insee} alt="partner logo" className="partners-logo" />
            <img src={dongtam} alt="partner logo" className="partners-logo" />
            <img src={hatien} alt="partner logo" className="partners-logo" />
            <img src={spec} alt="partner logo" className="partners-logo" />
            <img src={kuto} alt="partner logo" className="partners-logo" />
            <img src={weber} alt="partner logo" className="partners-logo" />
          </div>
        </Fade>
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
    margin: 22rem auto 20rem auto;
    
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
