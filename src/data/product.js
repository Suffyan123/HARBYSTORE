import TShirtHoodie from "../assets/FeatureProducts/TShirts/Hoodie.png";
import TShirtOne from "../assets/FeatureProducts/TShirts/tShirt-1.png";
import TShirtTwo from "../assets/FeatureProducts/TShirts/tShirt-2.png";
import TShirtThree from "../assets/FeatureProducts/TShirts/tshirt-3.jpg";

import CapOne from "@/assets/FeatureProducts/Caps/caps-1.webp";
import CapTwo from "@/assets/FeatureProducts/Caps/caps-2.webp";
import CapThree from "@/assets/FeatureProducts/Caps/caps-3.webp";
import CapFour from "@/assets/FeatureProducts/Caps/caps-4.webp";

import bCardOne from "@/assets/FeatureProducts/businesssCards/business-card1.jpg";
import bCardTwo from "@/assets/FeatureProducts/businesssCards/business-card2.jpg";
import bCardThree from "@/assets/FeatureProducts/businesssCards/business-card3.jpg";

export const productData = {
  "T-Shirt": [
    {
      id: "t1",
      name: "Hoodie",
      basePrice: 200,
      price: "$200.9 - $349.0",
      image: TShirtHoodie,
      inStock: true,
      discount: "10%",
      description:
        "Premium quality hoodie made with soft cotton blend, perfect for casual wear and winter comfort.",
      additionalInfo: {
        dimensions: "Standard Fit",
        material: "Cotton Blend",
        care: "Machine wash cold",
        weight: "300g",
      },
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: [
        { name: "Black", hex: "#000000", image: TShirtHoodie },
        { name: "Gray", hex: "#808080", image: TShirtHoodie },
        { name: "White", hex: "#FFFFFF", image: TShirtHoodie },
      ],
      reviews: [
        {
          id: "r1",
          user: "Ali Khan",
          rating: 5,
          date: "2026-06-10",
          comment: "Very comfortable hoodie, great quality.",
        },
      ],
    },
    {
      id: "t2",
      name: "T-Shirt",
      basePrice: 100,
      price: "$100 - $150",
      image: TShirtOne,
      inStock: true,
      description: "Stylish everyday t-shirt with breathable fabric.",
      additionalInfo: {
        material: "100% Cotton",
        care: "Machine wash",
      },
      sizes: ["S", "M", "L", "XL"],
      colors: [
        { name: "Red", hex: "#E63946", image: TShirtOne },
        { name: "Blue", hex: "#1D3557", image: TShirtTwo },
        { name: "Green", hex: "#2A9D8F", image: TShirtThree },
      ],
      reviews: [],
    },
    {
      id: "t3",
      name: "T-Shirt",
      basePrice: 300,
      price: "$300 - $350",
      image: TShirtTwo,
      inStock: true,
      description: "Classic fit t-shirt with a soft, durable weave.",
      additionalInfo: {
        material: "100% Cotton",
        care: "Machine wash cold",
      },
      sizes: ["S", "M", "L", "XL", "2XL"],
      colors: [
        { name: "Blue", hex: "#1D3557", image: TShirtTwo },
        { name: "Red", hex: "#E63946", image: TShirtOne },
      ],
      reviews: [
        {
          id: "r2",
          user: "Sara Ahmed",
          rating: 4,
          date: "2026-06-02",
          comment: "Good fit, fabric feels premium.",
        },
      ],
    },
    {
      id: "t4",
      name: "T-Shirt",
      basePrice: 100,
      price: "$100 - $150",
      image: TShirtThree,
      inStock: true,
      description: "Lightweight, breathable t-shirt for everyday wear.",
      additionalInfo: {
        material: "Cotton Blend",
      },
      sizes: ["S", "M", "L"],
      colors: [
        { name: "Green", hex: "#2A9D8F", image: TShirtThree },
        { name: "Black", hex: "#000000", image: TShirtHoodie },
      ],
      reviews: [],
    },
    {
      id: "t5",
      name: "T-Shirt",
      basePrice: 100,
      price: "$100 - $150",
      image: TShirtThree,
      inStock: true,
      description: "Relaxed fit t-shirt, soft against the skin.",
      additionalInfo: {
        material: "100% Cotton",
        care: "Hand wash recommended",
      },
      sizes: ["M", "L", "XL"],
      colors: [
        { name: "Green", hex: "#2A9D8F", image: TShirtThree },
      ],
      reviews: [],
    },
  ],

  Caps: [
    {
      id: "c1",
      name: "Cap",
      basePrice: 20,
      price: "$20.9 - $49.0",
      image: CapOne,
      inStock: true,
      discount: "10%",
      description: "Adjustable cap with modern design.",
      additionalInfo: {
        material: "Polyester",
        care: "Hand wash",
      },
      sizes: ["Free Size"],
      colors: [
        { name: "Black", hex: "#000000", image: CapOne },
        { name: "Blue", hex: "#1D3557", image: CapTwo },
        { name: "Brown", hex: "#8B4513", image: CapThree },
      ],
      reviews: [],
    },
    {
      id: "c2",
      name: "Cap",
      basePrice: 40,
      price: "$40.9 - $60.0",
      image: CapTwo,
      inStock: true,
      discount: "10%",
      description: "Premium cap with breathable mesh design.",
      additionalInfo: {
        material: "Cotton + Mesh",
      },
      sizes: ["Free Size"],
      colors: [
        { name: "Navy", hex: "#1B3A5C", image: CapTwo },
        { name: "Gray", hex: "#808080", image: CapFour },
      ],
      reviews: [],
    },
    {
      id: "c3",
      name: "Cap",
      basePrice: 60,
      price: "$60.9 - $80.0",
      image: CapThree,
      inStock: true,
      discount: "10%",
      description: "Structured cap with embroidered detailing.",
      additionalInfo: {
        material: "Cotton Twill",
        care: "Spot clean only",
      },
      sizes: ["Free Size"],
      colors: [
        { name: "Brown", hex: "#8B4513", image: CapThree },
        { name: "Black", hex: "#000000", image: CapOne },
      ],
      reviews: [
        {
          id: "r3",
          user: "Zain Malik",
          rating: 5,
          date: "2026-05-20",
          comment: "Great fit, sturdy build quality.",
        },
      ],
    },
    {
      id: "c4",
      name: "Cap",
      basePrice: 90,
      price: "$90.9 - $110.0",
      image: CapFour,
      inStock: true,
      discount: "10%",
      description: "Premium sport cap with moisture-wicking lining.",
      additionalInfo: {
        material: "Polyester Mesh",
        care: "Machine wash cold",
      },
      sizes: ["Free Size"],
      colors: [
        { name: "Gray", hex: "#808080", image: CapFour },
        { name: "Navy", hex: "#1B3A5C", image: CapTwo },
      ],
      reviews: [],
    },
    {
      id: "c5",
      name: "Cap",
      basePrice: 90,
      price: "$90.9 - $110.0",
      image: CapFour,
      inStock: true,
      discount: "10%",
      description: "Limited edition cap with reinforced stitching.",
      additionalInfo: {
        material: "Polyester Mesh",
      },
      sizes: ["Free Size"],
      colors: [
        { name: "Gray", hex: "#808080", image: CapFour },
      ],
      reviews: [],
    },
  ],

  "Business Card": [
    {
      id: "b1",
      name: "Business Card",
      basePrice: 110,
      price: "$110 - $120.0",
      image: bCardOne,
      inStock: true,
      discount: "10%",
      description: "Professional business cards with premium print quality.",
      additionalInfo: {
        material: "Matte Paper",
        dimensions: "3.5 x 2 inches",
      },
      sizes: ["Standard"],
      colors: [
        { name: "White", hex: "#FFFFFF", image: bCardOne },
        { name: "Black", hex: "#000000", image: bCardTwo },
        { name: "Gold", hex: "#E6B800", image: bCardThree },
      ],
      reviews: [],
    },
    {
      id: "b2",
      name: "Business Card",
      basePrice: 120,
      price: "$120 - $140.0",
      image: bCardTwo,
      inStock: true,
      description: "Customizable business cards with sleek design.",
      additionalInfo: {
        material: "Glossy Paper",
      },
      sizes: ["Standard"],
      colors: [
        { name: "White", hex: "#FFFFFF", image: bCardTwo },
        { name: "Dark", hex: "#333333", image: bCardOne },
      ],
      reviews: [],
    },
    {
      id: "b3",
      name: "Business Card",
      basePrice: 150,
      price: "$150 - $160.0",
      image: bCardThree,
      inStock: true,
      description: "Elegant business cards with foil-stamped accents.",
      additionalInfo: {
        material: "Textured Cardstock",
        dimensions: "3.5 x 2 inches",
      },
      sizes: ["Standard"],
      colors: [
        { name: "Gold", hex: "#E6B800", image: bCardThree },
        { name: "White", hex: "#FFFFFF", image: bCardOne },
      ],
      reviews: [
        {
          id: "r4",
          user: "Nadia Iqbal",
          rating: 5,
          date: "2026-06-01",
          comment: "Excellent print quality, very professional look.",
        },
      ],
    },
    {
      id: "b4",
      name: "Business Card",
      basePrice: 180,
      price: "$180 - $190.0",
      image: bCardOne,
      inStock: true,
      description: "Premium double-sided business cards.",
      additionalInfo: {
        material: "Matte Paper",
      },
      sizes: ["Standard"],
      colors: [
        { name: "White", hex: "#FFFFFF", image: bCardOne },
        { name: "Black", hex: "#000000", image: bCardTwo },
      ],
      reviews: [],
    },
    {
      id: "b5",
      name: "Business Card",
      basePrice: 180,
      price: "$180 - $190.0",
      image: bCardOne,
      inStock: true,
      description: "Luxury business cards with a soft-touch finish.",
      additionalInfo: {
        material: "Soft-Touch Cardstock",
      },
      sizes: ["Standard"],
      colors: [
        { name: "White", hex: "#FFFFFF", image: bCardOne },
      ],
      reviews: [],
    },
  ],
};