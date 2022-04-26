import React from 'react'
import styled from 'styled-components'
import SimpleReactFooter from "simple-react-footer";

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ligula eros, bibendum gravida aliquam a, venenatis a quam. Cras elementum ante sapien, sed maximus orci aliquam in.";
const title = "VLXD & TTNT Thanh Thanh Phương";
const columns = [
  {
    title: "Về Công Ty",
    resources: [
      {
        name: "Giới thiệu",
        link: "/about",
      },
      {
        name: "Tuyển dụng",
        link: "/about",
      },
      {
        name: "Liên hệ",
        link: "/about",
      },
    ],
  },
  {
    title: "Chính sách",
    resources: [
      {
        name: "Bảo mật",
        link: "/about",
      },
      {
        name: "Vận chuyển",
        link: "/about",
      },
      {
        name: "Hoạt động",
        link: "/about",
      },
    ],
  },
  {
    title: "Lorem ipsum dolor",
    resources: [
      {
        name: "Địa chỉ",
        link: "/about",
      },
      {
        name: "Culture",
        link: "/about",
      },
    ],
  },
  {
    title: "Chính sách",
    resources: [
      {
        name: "Bảo mật",
        link: "/about",
      },
      {
        name: "Vận chuyển",
        link: "/about",
      },
      {
        name: "Hoạt động",
        link: "/about",
      },
    ],
  },
 
];

const Footer = () => {
  return (
    <Wrapper>
      <SimpleReactFooter
        description={description}
        title={title}
        columns={columns}
        linkedin="fluffy_cat_on_linkedin"
        facebook="fluffy_cat_on_fb"
        twitter="fluffy_cat_on_twitter"
        instagram="fluffy_cat_live"
        youtube="UCFt6TSF464J8K82xeA?"
        pinterest="fluffy_cats_collections"
        copyright="Thanh Thanh Phương Company"
        iconColor="black"
        backgroundColor="white"
        fontColor="black"
        copyrightColor="darkgrey"
      />
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin: 4rem auto;
  max-width: var(--max-width);
  display: flex;
  align-items: center;
  justify-content: center;

  .stay-connected-title{
    display:none;
  } 
  @media (min-width: 776px) {
    .footer-container {
      padding: 0px;
    }
    .columns {
      margin-left: 0px;
      margin-right: 0px;
    }
    .first-row {
      flex-wrap: wrap;
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
  }
`;

export default Footer
