import React from "react";
import test from "../assets/video/test.mp4";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <PageWrapper>
      <main>
        <video autoPlay loop muted playsInline id="myVideo">
          <source src={test} type="video/mp4" />
        </video>

        <h1 className="titleLanding">
          Hãy thiết kế <br />
          ngôi nhà của bạn
        </h1>
        <p>
          Thanh Thanh Phương là{" "}
          <mark>một trong số nhà phân phối số 1 khu vực miền Nam</mark>. Chúng
          tôi chuyên phân phối và cung cấp vật liệu xây dựng, trang trí nội và
          ngoại thất.
        </p>
      </main>
    </PageWrapper>
  );
};


const PageWrapper = styled.div`
  .titleLanding {
    z-index: 101;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 30%;
    color: var(--clr-white);
  }
  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: 100;
  }
  @media (min-width: 576px) {
    #myVideo {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      z-index: 100;
    }
  }
`;

export default LandingPage;
