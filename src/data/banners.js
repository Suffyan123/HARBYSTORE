import tshirtCapImg from "@/assets/BannerImages/rotatedTShirt.png";
import dormatImg from "@/assets/BannerImages/flowerandGrid.png";
import coverImg from "@/assets/BannerImages/BookCoverImg.png";

export const bannersData = [
  {
    id: "b1",
    image: tshirtCapImg,
    title: "T-Shirt &",
    subtitle: "Cap",
    bg: "#C8A2C8",
    cta: "Explore More",
    link: "/shop/tshirt-cap",
  },
  {
    id: "b2",
    image: dormatImg,
    title: "Supersized",
    subtitle: "& Large Dormet",
    bg: null,
    cta: "Explore More",
    link: "/shop/dormat",
  },
  {
    id: "b3",
    image: coverImg,
    title: "Booked",
    subtitle: "& cover Design",
    bg: null,
    cta: "Explore More",
    link: "/shop/cover-design",
  },
];