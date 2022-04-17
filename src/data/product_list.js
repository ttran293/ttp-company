import xmlavilla from "../assets/ximang/lavilla50.png";
import xmhatien from "../assets/ximang/vicem50.png";
import xminsee from "../assets/ximang/insee50.png";
import xmns from "../assets/ximang/nghison50.jpg";
import marble1 from "../assets/marble/marble1.jpg";
import marble2 from "../assets/marble/marble2.jpg";
import marble4 from "../assets/marble/marble4.jpg";

import tiles1 from "../assets/tiles/tiles1.jpg";
import tiles2 from "../assets/tiles/tiles2.jpg";
import tiles3 from "../assets/tiles/tiles3.jpg";

const products_list = [
  {
    id: "marble1",
    name: "Đá cẩm thạch",
    price: 55000,
    image: marble1,
    // "https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359?ts=1649899560&userId=usrQMwWEPx18KgLcP&cs=ba6410fad5b7040d",
    colors: ["#c4b9b9"],
    company: "Đồng Tâm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Đá cẩm thạch",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },
  {
    id: "marble2",
    name: "Đá cẩm thạch",
    price: 60000,
    image: marble2,
    // "https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359?ts=1649899560&userId=usrQMwWEPx18KgLcP&cs=ba6410fad5b7040d",
    colors: ["#241f1e"],
    company: "Đồng Tâm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Đá cẩm thạch",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },
  {
    id: "marble4",
    name: "Đá cẩm thạch",
    price: 50000,
    image: marble4,
    // "https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359?ts=1649899560&userId=usrQMwWEPx18KgLcP&cs=ba6410fad5b7040d",
    colors: ["#d9cfce"],
    company: "Đồng Tâm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Đá cẩm thạch",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },
  // {
  //   id: "xmht50",
  //   name: "Xi măng hà tiên",
  //   price: 100000,
  //   image: xmhatien,
  //   // "https://dl.airtable.com/.attachmentThumbnails/89ba7458c24252be77f5a835dd398880/c13ef359?ts=1649899560&userId=usrQMwWEPx18KgLcP&cs=ba6410fad5b7040d",
  //   colors: [],
  //   company: "Hà tiên",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
  //   category: "Xi măng",
  //   shipping: true,
  //   reviews: 100,
  //   stars: 4.8,
  //   stock: 1000,
  // },
  // {
  //   id: "xmlvl50",
  //   name: "Xi măng Lavilla",
  //   price: 98000,
  //   image: xmlavilla,
  //   colors: [],
  //   company: "Lavilla",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
  //   category: "Xi măng",
  //   shipping: true,
  //   reviews: 99,
  //   stars: 4.5,
  //   stock: 1500,
  // },
  // {
  //   id: "xmins50",
  //   name: "Xi măng Insee",
  //   price: 96000,
  //   image: xminsee,
  //   colors: [],
  //   company: "Insee",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
  //   category: "Xi măng",
  //   shipping: true,
  //   reviews: 100,
  //   stars: 4.8,
  //   stock: 1000,
  // },
  // {
  //   id: "xmns50",
  //   name: "Xi măng Nghi Sơn",
  //   price: 95000,
  //   image: xmns,
  //   colors: [],
  //   company: "Nghi Sơn",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
  //   category: "Xi măng",
  //   shipping: true,
  //   reviews: 100,
  //   stars: 4.8,
  //   stock: 1000,
  // },

  {
    id: "gm1",
    name: "Gạch men",
    price: 30000,
    image: tiles1,
    colors: [],
    company: "Nghi Sơn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },

  {
    id: "gm2",
    name: "Gạch men",
    price: 35000,
    image: tiles2,
    colors: [],
    company: "Nghi Sơn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },

  {
    id: "gm3",
    name: "Gạch men",
    price: 32000,
    image: tiles3,
    colors: [],
    company: "Nghi Sơn",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },
];

export default products_list;
