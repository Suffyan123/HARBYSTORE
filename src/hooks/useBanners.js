import { useEffect, useState } from "react";
import { getBanners } from "@/services/bannerService";

export function useBanners() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getBanners()
      .then((data) => !cancelled && setBanners(data))
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, []);

  return { banners, loading };
}