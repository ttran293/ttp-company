import React from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.png";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";


const Footer = () => {
  return (
    <Wrapper>
      <div class="footer-distributed section-center">
        <div class="footer-left">
          <h3>Thanh Thanh Phương</h3>

          <p class="footer-links">
            {/* <a href="#">Trang chủ</a> | <a href="#">Blog</a> |{" "}
            <a href="#">Giới thiệu</a> | <a href="#"> Liên lạc</a> */}
          </p>

          <div class="footer-icons">

            <a href="https://www.facebook.com/vlxdthanhthanhphuong">
              <FacebookIcon />
            </a>
            <a href="https://www.facebook.com/vlxdthanhthanhphuong">
              <YouTubeIcon />
            </a>
            <a href="https://www.facebook.com/vlxdthanhthanhphuong">
              <InstagramIcon />
            </a>
          </div>
          <p class="footer-company-name">
            © {new Date().getFullYear()} Thanh Thanh Phương
          </p>
        </div>

        <div class="footer-center">
          <div>
            <RoomIcon />
            <p>
              <span>11C Phan Chu Trinh, Quang Vinh</span>
              thành phố Biên Hòa, tỉnh Đồng Nai, Việt Nam
            </p>
          </div>

          <div className="footer-info">
            <PhoneIcon /> <p> 0613980368</p>
          </div>
          <div className="footer-info">
            <EmailIcon />{" "}
            <p>
              <a href="mailto:thanhnamtran997@gmail.com">
                vlxdthanhthanhphuong@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>Thanh Thanh Phương</span>
            một trong số nhà phân phối lớn nhất Khu vực miền Nam chuyên phân
            phối và cung cấp vlxd & trang trí nội, ngoại thất, thiết bị cho các
            công trình xây dựng lớn và những công trình dân dụng. Để nhận thông
            tin về những sản phẩm mới ra mắt và nắm bắt những mặt hàng đang giảm
            giá tại đây
          </p>

          <div className="content">
            
            <form
              className="contact-form"
              action="your form spree id"
              method="POST"
            >
              <input
                type="email"
                className="form-input"
                placeholder="Email của bạn"
                name="_replyto"
              />
              <button type="submit" className="submit-btn">
                đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin-top: 5rem;

  background-color: var(--clr-primary-10);

  .footer-distributed {
    width: 100%;
    text-align: left;
    padding: 50px 0px 60px 0px;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: inline-block;
    vertical-align: top;
  }

  /* Footer left */

  .footer-distributed .footer-left {
    width: 30%;
  }

  .footer-distributed h3 {
    color: var(--clr-black);
    margin: 0;
  }

  /* The company logo */

  .footer-distributed .footer-left img {
    width: 30%;
  }

  .footer-distributed h3 span {
    color: var(--clr-black);
  }

  /* Footer links */

  .footer-distributed .footer-links {
    color: var(--clr-black);
    margin: 20px 0 12px;
  }

  .footer-distributed .footer-links a {
    display: inline-block;
    line-height: 1.8;
    text-decoration: none;
    color: inherit;
  }

  .footer-distributed .footer-company-name {
    color: var(--clr-black);
    margin: 0;
  }

  /* Footer Center */

  .footer-distributed .footer-center {
    width: 35%;
  }

  .footer-distributed .footer-center p {
    display: inline-block;
    color: var(--clr-black);
    vertical-align: middle;
    margin: 0;
    margin-left: 1rem;
  }

  .footer-distributed .footer-center p span {
    display: block;
  }

  .footer-distributed .footer-center p a {
    color: var(--clr-black);
    text-decoration: none;
  }

  .footer-info {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  /* Footer Right */

  .footer-distributed .footer-right {
    width: 30%;
  }

  .footer-distributed .footer-company-about {
    color: var(--clr-black);
    margin: 0 0 1rem 0;
  }

  .footer-distributed .footer-company-about span {
    display: block;
    color: var(--clr-black);
    font-size: 18px;
    font-weight: bold;
  }

  .footer-distributed .footer-icons {
    margin-top: 25px;
  }

  .footer-distributed .footer-icons a {
    display: inline-block;
    width: 35px;
    height: 35px;
    cursor: pointer;
    border-radius: 2px;
    color: var(--clr-black);
    text-align: center;
    line-height: 35px;
    margin-right: 3px;
    margin-bottom: 5px;
  }

  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-black);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-white);
  }
  .submit-btn:hover {
    color: var(--clr-black);
    border-color: 1px solid var(--clr-black);

    background: var(--clr-white);
  }
  @media (max-width: 776px) {
    .footer-distributed {
    }

    .footer-distributed .footer-left,
    .footer-distributed .footer-center,
    .footer-distributed .footer-right {
      display: block;
      width: 100%;
      margin-bottom: 40px;
      text-align: center;
    }

    .footer-info {
      justify-content: center;
    }

    .footer-distributed .footer-center i {
      margin-left: 0;
    }
  }
`;

export default Footer
