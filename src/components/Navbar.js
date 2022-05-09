import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Trang Chủ</Link>
          </li>
          <li>
            <Link to="/about">Giới Thiệu</Link>
          </li>
          <li >
            <Link to="#">Phòng</Link>
          </li>
          <li>
            <Link to="/products">Sản Phẩm</Link>
          </li>
          <li>
            <Link to="/about">Blog</Link>
          </li>
          <li>
            <Link to="/about">Góc Cảm hứng</Link>
          </li>
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: white;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      color: var(--clr-grey-3);
    }
  }
  img {
    width: 150px;
    margin-left: -50px;
    margin-top: 10px;
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    img {
      width: 300px;
      margin-top: 15px;
      margin-left: -120px;
    }
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-black);
        font-size: 1.25rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        font-weight: 500;
        text-decoration: none;
        &:hover {
          border-bottom: 2px solid var(--clr-black);
        }
      }
    }

    .cart-btn-wrapper {
      display: grid;
    }
  }
`;

export default Navbar;
