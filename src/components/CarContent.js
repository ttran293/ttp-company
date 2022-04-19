import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { formatPrice } from "../utils/helpers";

const CartContent = () => {
  const { cart, clearCart, total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  function handleClick() {
    document.title = "Don-hang";
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

          <div className="link-container-part">
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

        <div className="total-container">
          <article className="total-card">
            <h5 className="label-card">
              Tổng phụ : <span>{formatPrice(total_amount)}</span>
            </h5>
            <p className="label-card">
              Phí giao hàng : <span>{formatPrice(shipping_fee)}</span>
            </p>
            <hr />
            <h4 className="label-card total-num">
              Tổng cộng :{" "}
              <span>{formatPrice(total_amount + shipping_fee)}</span>
            </h4>
            <hr></hr>
            {myUser ? (
              <Link to="/checkout" className="btn">
                Gửi đơn hàng
              </Link>
            ) : (
              <button type="button" className="btn" onClick={loginWithRedirect}>
                đăng nhập
              </button>
            )}
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .total-container {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
  }

  .total-card {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  .label-card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  .total-num {
    margin-top: 2rem;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
  .content {
    display: none;
  }
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-container-part {
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
    display: inline-block;
    padding: 0.25rem 0.5rem;
  }
  .print-btn {
    display: none;
  }
  @media (min-width: 776px) {
    .total-container {
      justify-content: flex-end;
    }
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
      padding: 0.25rem 0.5rem;
    }
    .print-btn {
      background: var(--clr-green-dark);
      display: inline-block;
      padding: 0.25rem 0.5rem;
    }
  }
`;
export default CartContent;
