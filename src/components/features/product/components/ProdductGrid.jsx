import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 120,
    image: "https://via.placeholder.com/200",
    badge: "NEW",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 90,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Shoes",
    price: 70,
    image: "https://via.placeholder.com/200",
  },
  {
    id: 4,
    name: "Backpack",
    price: 40,
    image: "https://via.placeholder.com/200",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}