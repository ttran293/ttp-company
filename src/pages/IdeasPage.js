import  React  from "react";
import { useEffect } from "react";
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

import idea1 from "../assets/room/metalic.jpg";
import idea2 from "../assets/room/metalic2.jpg";

import idea3 from "../assets/room/organic1.jpg";
import idea4 from "../assets/room/organic2.jpg";
import idea5 from "../assets/room/organic3.jpg";

import idea6 from "../assets/room/popart.jpg";
import idea7 from "../assets/room/popart2.jpg";
import idea8 from "../assets/room/popart3.jpg";

import idea10 from "../assets/room/minimal.jpg";
import idea9 from "../assets/room/minimal2.jpg";



const IdeasPage = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

          <div className="container">
            <img src={idea1} alt="marble1" width={500} height={200} />
          </div>
          <div className="container">
            <img src={idea2} alt="marble1" width={500} height={200} />
          </div>
          <div className="container">
            <img src={idea3} alt="marble1" width={500} height={200} />
          </div>
          <div className="container">
            <img src={idea4} alt="marble1" width={500} height={200} />
          </div>
          <div className="container">
            <img src={idea5} alt="marble1" width={500} height={200} />
          </div>
          <div className="container">
            <img src={idea6} alt="marble1" width={500} height={200} />
          </div>
          <div className="container">
            <img src={idea7} alt="marble1" width={500} height={200} />
          </div>
          <div className="container">
            <img src={idea8} alt="marble1" width={500} height={200} />
          </div>
          <div className="container">
            <img src={idea9} alt="marble1" width={500} height={200} />
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
