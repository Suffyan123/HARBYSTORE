import { useEffect, useState } from "react";
import { getCategoryShowcase } from "@/services/categoryService";

export function useCategoryShowcase() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getCategoryShowcase()
      .then((data) => !cancelled && setCategories(data))
      .catch((err) => !cancelled && setError(err))
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, []);

  return { categories, loading, error };
}