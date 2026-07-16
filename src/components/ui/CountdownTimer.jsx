import { useCountdown } from "@/hooks/useCountdown";

export default function CountdownTimer({ endsAt }) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(endsAt);

  if (isExpired) {
    return <p className="text-sm text-gray-500 mb-4">Deal ended</p>;
  }

  const units = [
    { label: "Days", value: days },
    { label: "Hrs", value: hours },
    { label: "Mins", value: minutes },
    { label: "Sec", value: seconds },
  ];

  return (
    <div className="flex gap-6 mb-8">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white text-lg font-semibold shadow-sm">
            {u.value}
          </div>
          <span className="text-sm text-gray-500 mt-2">{u.label}</span>
        </div>
      ))}
    </div>
  );
}