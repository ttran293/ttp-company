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
            <a href="#">Trang chủ</a> | <a href="#">Blog</a> |{" "}
            <a href="#">Giới thiệu</a> | <a href="#"> Liên lạc</a>
          </p>

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

          <div>
            <PhoneIcon />
            <p>0613980368</p>
          </div>
          <div>
            <EmailIcon />
            <p>
              <a href="mailto:thanhnamtran997@gmail.com">
                vlxdthanhthanhphuong@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>Vật liệu xây dưng và trang trí nội thất</span>
            một trong số nhà phân phối lớn nhất Khu vực miền Nam chuyên
            phân phối và cung cấp vlxd & trang trí nội, ngoại thất, thiết bị cho các công trình xây dựng lớn và những công trình dân dụng
          </p>
          <div class="footer-icons">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <YouTubeIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
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
    font-size: 14px;
    font-weight: normal;
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
  }

  .footer-distributed .footer-center p span {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 2;
  }

  .footer-distributed .footer-center p a {
    color: var(--clr-black);
    text-decoration: none;
  }

  /* Footer Right */

  .footer-distributed .footer-right {
    width: 30%;
  }

  .footer-distributed .footer-company-about {
    line-height: 20px;
    color: var(--clr-black);
    font-size: 13px;
    font-weight: normal;
    margin: 0;
  }

  .footer-distributed .footer-company-about span {
    display: block;
    color: var(--clr-black);
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
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

    font-size: 20px;
    color: var(--clr-black);
    text-align: center;
    line-height: 35px;

    margin-right: 3px;
    margin-bottom: 5px;
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

    .footer-distributed .footer-center i {
      margin-left: 0;
    }
  }
`;

export default Footer
