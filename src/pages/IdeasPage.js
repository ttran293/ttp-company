import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'


import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import marble1 from "../assets/marble/marble1.jpg";
import marble2 from "../assets/marble/marble2.jpg";
import marble4 from "../assets/marble/marble4.jpg";

import marble5 from "../assets/marble/marble5.jpg";
import marble8 from "../assets/marble/marble8.jpg";
import marble9 from "../assets/marble/marble9.jpg";



const IdeasPage = () => {
  return (
    <main>
      <Slide left>
        <PageHero title="Góc Cảm Hứng" />
      </Slide>

      <Wrapper className="page section section-center">
        <div className="section-center featured">
          <div className="container">
            <img src={marble1} alt="marble1" width={500} height={200} />
            {/* <Link to={`/products/${id}`} className="link">
            <FaSearch />
          </Link> */}
          </div>
          <div className="container">
            <img src={marble2} alt="marble1" width={500} height={200} />

            {/* <Link to={`/products/${id}`} className="link">
            <FaSearch />
          </Link> */}
          </div>
          <div className="container">
            <img src={marble4} alt="marble1" width={500} height={200} />

            {/* <Link to={`/products/${id}`} className="link">
            <FaSearch />
          </Link> */}
          </div>
          <div className="container">
            <img src={marble5} alt="marble1" width={500} height={200} />
          </div>
          <div className="container">
            <img src={marble8} alt="marble1" width={500} height={200} />
          </div>
          <div className="container">
            <img src={marble9} alt="marble1" width={500} height={200} />
          </div>
        </div>
      </Wrapper>
    </main>
  );
}

const Wrapper = styled.section`
  .container {
    position: relative;
    background: var(--clr-white);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
    overflow: hidden;
  }
  .container:hover img {
    transform: scale(1.05);
  }
  .container:hover .link {
    opacity: 1;
  }
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    ${
      "" /* img {
      height: 225px;
    } */
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 992px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;
export default IdeasPage;
