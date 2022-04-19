import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  function handleClick(){
    window.print();
  }
  return (
    <Wrapper className="section section-center">
      <div>
        <div className="content">
          <h5>Sản phẩm</h5>
          <h5>Đơn Giá</h5>
          <h5>Số lượng</h5>
          <h5>Số tiền</h5>
          <span></span>
        </div>
        <hr />
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <hr />
        <div className="link-container">
          <Link to="/products" className="link-btn">
            Tiếp tục mua sắm
          </Link>

          <div>
            <button
              type="button"
              className="link-btn clear-btn"
              onClick={clearCart}
            >
              Bỏ giỏ hàng
            </button>

            <button
              type="button"
              className="link-btn print-btn"
              onClick={handleClick}
            >
              In đơn hàng
            </button>
          </div>
        </div>
        <CartTotals />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .content {
    display: none;
  }
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
  .print-btn {
    background: var(--clr-green-dark);
  }
  @media (min-width: 776px) {
    .content {
      display: grid;
      grid-template-columns: 275px 150px 390px 150px;
      justify-items: center;
      column-gap: 2rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
      }
    }

    .link-container {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
    }
    .link-btn {
      background: transparent;
      border-color: transparent;
      text-transform: capitalize;
      padding: 0.25rem 0.5rem;
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      letter-spacing: var(--spacing);
      font-weight: 400;
      cursor: pointer;
    }
    .clear-btn {
      background: var(--clr-black);
      margin-right: 1rem;
    }
    .print-btn {
      background: var(--clr-green-dark);
    }
  }
`;
export default CartContent;
