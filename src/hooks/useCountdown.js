import { useEffect, useState } from "react";

export function useCountdown(endsAt) {
  const calculateRemaining = () => {
    const diff = new Date(endsAt).getTime() - Date.now();
    return diff > 0 ? diff : 0;
  };

  const [remaining, setRemaining] = useState(calculateRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(calculateRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, [endsAt]);

  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isExpired: remaining <= 0 };
}