import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { useUserContext } from '../context/user_context'
import { formatPrice } from '../utils/helpers'
import { useHistory } from 'react-router-dom'
import CartItem from './CartItem'

const CheckoutForm = () => {
  const { cart, total_amount, shipping_fee, clearCart } = useCartContext();
  const { myUser } = useUserContext();
  const history = useHistory();

  return (
    <div>
      <h4>Xin chào, {myUser && myUser.name}</h4>
      <p>Tổng thanh toán: {formatPrice(shipping_fee + total_amount)}</p>
      <div className="content">
        <h5>Sản phẩm</h5>
        <h5>Đơn Giá</h5>
        <h5>Số lượng</h5>
        <h5>Số tiền</h5>
        <span></span>
      </div>
      <hr />
      {cart.map((item) => {
        return <CartItem key={item.id} checkout={true} {...item} />;
      })}
    </div>
  );
}

const StripeCheckout = () => {
  return (
    <Wrapper className="section section-center">
      <CheckoutForm />
    </Wrapper>
  );
}

const Wrapper = styled.section`
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
`;

export default StripeCheckout
