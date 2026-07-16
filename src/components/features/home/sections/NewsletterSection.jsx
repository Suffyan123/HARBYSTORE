import { useState } from "react";
import { FaArrowUpRightDots } from "react-icons/fa6";
import Button from "@/components/ui/Button";

const NewsletterSection = ({ onSubscribe }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    await onSubscribe?.(email);
    setLoading(false);
    setEmail("");
  };

  return (
    <section className="bg-(--white-ghost)">
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-[#7FE0E6] rounded-3xl px-8 py-10 md:px-14 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-snug">
            Sign up for exclusive offers from us
          </h2>

          <div>
            <p className="text-sm text-slate-800/80 mb-4">
              Sign up to your newsletter for all the latest news and our
              site exclusive promotion.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-full px-5 py-3 text-sm text-slate-900 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-slate-900/20 bg-white"
              />
              <Button
                type="submit"
                variant="white"
                icon={FaArrowUpRightDots}
                loading={loading}
                className="shrink-0"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;