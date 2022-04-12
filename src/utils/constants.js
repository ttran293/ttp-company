import React from 'react'
import { GiHexagonalNut, GiDiamondHard, GiHumanPyramid } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: 'Trang Chủ',
    url: '/',
  },
  {
    id: 2,
    text: 'Giới Thiệu',
    url: '/about',
  },
  {
    id: 3,
    text: 'Sản Phẩm',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiHexagonalNut />,
    title: "Uy tín",
    text: "Sự an toàn và hài lòng của bạn ưu tiên của chúng tôi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "Kiến tạo",
    text: "Thiết kế tương lai của bạn với chúng tôi với những sản phẩm mới nhất",
  },
  {
    id: 3,
    icon: <GiHumanPyramid />,
    title: "kết nối",
    text: "Xây dựng mối quan hệ của chúng ta bằng cách tạo ra ngôi nhà của bạn",
  },
];

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
