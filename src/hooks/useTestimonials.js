import { useEffect, useState } from "react";
import { getTestimonials } from "@/services/testimonialService";

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    getTestimonials()
      .then((data) => !cancelled && setTestimonials(data))
      .catch((err) => !cancelled && setError(err))
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, []);

  return { testimonials, loading, error };
}