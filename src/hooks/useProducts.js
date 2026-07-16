import { useEffect, useState } from "react";
import {
  getProductsByCategory,
  getCategories,
  getDeals,
  getBestSellers,
  getProductById,        // 👈 add
  getRelatedProducts,    // 👈 add
} from "@/services/productService";

export function useProductsByCategory(category) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    getProductsByCategory(category)
      .then((data) => !cancelled && setProducts(data))
      .catch((err) => !cancelled && setError(err))
      .finally(() => !cancelled && setLoading(false));

    return () => {
      cancelled = true;
    };
  }, [category]);

  return { products, loading, error };
}

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getCategories()
      .then((data) => !cancelled && setCategories(data))
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, []);

  return { categories, loading };
}

export function useBestSellers(limit = 4) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getBestSellers(limit)
      .then((data) => !cancelled && setProducts(data))
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, [limit]);

  return { products, loading };
}

export function useDeals() {
  const [deal, setDeal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getDeals()
      .then((data) => !cancelled && setDeal(data))
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, []);

  return { deal, loading };
}

// 👇 new — single product by id
export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;
    setLoading(true);
    getProductById(id)
      .then((data) => !cancelled && setProduct(data))
      .catch((err) => !cancelled && setError(err))
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, [id]);

  return { product, loading, error };
}

// 👇 new — related products for a given product
export function useRelatedProducts(productId, limit = 4) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;
    let cancelled = false;
    getRelatedProducts(productId, limit)
      .then((data) => !cancelled && setProducts(data))
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, [productId, limit]);

  return { products, loading };
}