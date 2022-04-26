import marble1 from "../assets/marble/marble1.jpg";
import marble2 from "../assets/marble/marble2.jpg";
import marble4 from "../assets/marble/marble4.jpg";

import tiles1 from "../assets/tiles/tiles1.jpg";
import tiles2 from "../assets/tiles/tiles2.jpg";
import tiles3 from "../assets/tiles/tiles3.jpg";
import tiles4 from "../assets/tiles/tiles4.jpg";
import tiles5 from "../assets/tiles/tiles5.jpg";
import tiles6 from "../assets/tiles/tiles6.jpg";
import tiles7 from "../assets/tiles/gachmen-rl.jpg";
import tiles8 from "../assets/tiles/gachmen-rl-2.jpg";
import tiles9 from "../assets/tiles/gachmen-rl-3.jpg";
import tiles10 from "../assets/tiles/gachmen-rl-4.jpg";

const products_list = [
  {
    id: "marble1",
    name: "Đá cẩm thạch",
    price: 55000,
    image: marble1,
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
  {
    id: "gm1",
    name: "Gạch men",
    price: 30000,
    image: tiles1,
    colors: [],
    company: "Đồng Tâm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men 10 x 10",
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
    company: "Đồng Tâm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men 30 x 30",
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
    company: "Đồng Tâm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men 1m x 1m",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },
  {
    id: "gm4",
    name: "Gạch men",
    price: 30000,
    image: tiles4,
    colors: [],
    company: "Đồng Tâm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men 1m x 1m",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },

  {
    id: "gm5",
    name: "Gạch men",
    price: 35000,
    image: tiles5,
    colors: [],
    company: "Đồng Tâm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men 50 x 50",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },

  {
    id: "gm6",
    name: "Gạch men",
    price: 32000,
    image: tiles6,
    colors: [],
    company: "Đồng Tâm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men 50 x 50",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },

  {
    id: "8070",
    name: "Glossy Porcelain",
    price: 32000,
    image: tiles7,
    colors: [],
    company: "Satino",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men 80 x 80",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },

  {
    id: "BG28XX",
    name: "Vân Xám Ghi Sáng",
    price: 32000,
    image: tiles8,
    colors: [],
    company: "Blue Dragon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men 30 x 60",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },

  {
    id: "8571",
    name: "PolishHD Ceramic",
    price: 32000,
    image: tiles9,
    colors: [],
    company: "Blue Dragon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men 50 x 100",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },

  {
    id: "5904",
    name: "PolishHD Ceramic",
    price: 32000,
    image: tiles10,
    colors: [],
    company: "Blue Dragon",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae purus in felis viverra ultricies. Fusce et nulla quis nisi lobortis hendrerit. Nullam posuere vulputate venenatis. Nam tempor, dui bibendum eleifend ullamcorper, ligula ipsum fringilla ipsum, eu viverra velit ex eu felis. Pellentesque in varius tortor. Duis eget dui vitae arcu pharetra congue sed in turpis. Morbi blandit leo eget dictum consequat. Mauris non leo risus.",
    category: "Gạch men 50 x 100",
    shipping: true,
    reviews: 100,
    stars: 4.8,
    stock: 1000,
  },
  //blue dragon

  //  5904 rl3

  //satino 8070 rl
];

export default products_list;
