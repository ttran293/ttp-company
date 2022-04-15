import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import CartTotals from './CartTotals'

const CartContent = () => {
  const { cart, clearCart } = useCartContext()
  return (
    <Wrapper className="section section-center">
      <div className="content">
        <h5>Sản phẩm</h5>
        <h5>Giá</h5>
        <h5>Số lượng</h5>
        <h5>Tổng cộng</h5>
        <span></span>
      </div>
      <hr />
      {/* <CartColumns /> */}
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          Tiếp tục mua sắm
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={clearCart}
        >
          Bỏ giỏ hàng
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  @media (min-width: 776px) {
    .content {
      display: grid;
      grid-template-columns: 295px 100px 450px 100px;
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
    }
  }
`;
export default CartContent
