import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'

import marble1 from "../assets/marble/marble1.jpg";
import marble2 from "../assets/marble/marble2.jpg";
import marble4 from "../assets/marble/marble4.jpg";

import marble5 from "../assets/marble/marble5.jpg";
import marble8 from "../assets/marble/marble8.jpg";
import marble9 from "../assets/marble/marble9.jpg";

import Fade from "react-reveal/Fade";


const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext()
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  return (
    <Wrapper className="section">
      <Fade>
        <div className="title">
          <h3>
            Từ những bản mẫu <br></br>hoàn hảo nhất
          </h3>

          <div className="underline"></div>
        </div>
      </Fade>

      <Fade>
        <div className="section-center featured">
          <div className="container">
            <img src={marble1} alt="marble1" width={300} height={200} />
            {/* <Link to={`/products/${id}`} className="link">
            <FaSearch />
          </Link> */}
          </div>
          <div className="container">
            <img src={marble2} alt="marble1" width={300} height={200} />

            {/* <Link to={`/products/${id}`} className="link">
            <FaSearch />
          </Link> */}
          </div>
          <div className="container">
            <img src={marble4} alt="marble1" width={300} height={200} />

            {/* <Link to={`/products/${id}`} className="link">
            <FaSearch />
          </Link> */}
          </div>
          <div className="container">
            <img src={marble5} alt="marble1" width={300} height={200} />
          </div>
          <div className="container">
            <img src={marble8} alt="marble1" width={300} height={200} />
          </div>
          <div className="container">
            <img src={marble9} alt="marble1" width={300} height={200} />
          </div>
        </div>
        <Link to="/IdeasPage" className="btn">
          xem tất cả
        </Link>
      </Fade>
    </Wrapper>
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
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
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
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts
