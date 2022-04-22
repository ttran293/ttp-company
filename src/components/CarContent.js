import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { formatPrice } from "../utils/helpers";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const CartContent = () => {
  const { cart, clearCart, total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  const form = useRef();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x09u69m",
        "template_ibnvw3e",
        form.current,
        "nm5KVzdfCESJIZ_mo"
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
      <form ref={form} onSubmit={sendEmail}>
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
                <a href="mailto:thanhnamtran997@gmail.com?subject=Đơn hàng&body=Thông tin liên lạc:">
                  <button
                    onClick={handleOpen}
                    className="btn bounce"
                    type="button"
                  >
                    Xác nhận đơn hàng
                  </button>
                </a>
              ) : (
                <button
                  type="button"
                  className="btn"
                  onClick={loginWithRedirect}
                >
                  đăng nhập
                </button>
              )}

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
              >
                <Box sx={style}>
                  <p id="modal-modal-description" sx={{ mt: 2 }}>
                    Xin in đơn hàng và đính kèm đơn Hàng của bạn cùng thông tin
                    liên lạc trong email này. <br></br>VLXD Thanh Thanh Phương sẽ liên lạc bạn sớm nhất có thể! 
                  </p>
                </Box>
              </Modal>
            </article>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-questions {
    display: flex;
    flex-direction: flex-column;
    align-items: center;
  }

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
  .info-form {
    margin-left: 2rem;
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
    @-webkit-keyframes bounce {
      to {
        -webkit-transform: scale(1.01);
      }
    }
    @-moz-keyframes bounce {
      to {
        -moz-transform: scale(1.05);
      }
    }
    @keyframes bounce {
      to {
        transform: scale(1.08);
      }
    }
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
      -webkit-animation: bounce 0.3s infinite alternate;
      -moz-animation: bounce 0.3s infinite alternate;
      animation: bounce 0.3s infinite alternate;
    }
  }
`;
export default CartContent;
