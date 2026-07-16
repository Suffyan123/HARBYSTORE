import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const infoLinks = ["Help center", "Help center", "Help center", "Help center"];

const socialLinks = [
  { icon: FaFacebook, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-[#BFEFF3] pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand + blurb */}
          <div className="md:col-span-1">
            <div className="h-8 w-32 bg-white/70 rounded mb-4" />
            <p className="text-sm text-slate-700 leading-relaxed max-w-[220px]">
              As a car owner, you have to recognize that your vehicle
              requires a lot of care to keep running smoothly.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="h-9 w-9 flex items-center justify-center rounded-full bg-white text-slate-700 hover:bg-slate-900 hover:text-white transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>2972 Westheimer Rd. Santa Ana, Illinois 85486</li>
              <li>+9654-454-706-459</li>
              <li>support@example.com</li>
            </ul>
          </div>

          {/* Information col 1 */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              {infoLinks.map((link, i) => (
                <li key={`info-a-${i}`}>
                  <a href="#" className="hover:text-slate-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information col 2 */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Information</h4>
            <ul className="space-y-2 text-sm text-slate-700">
              {infoLinks.map((link, i) => (
                <li key={`info-b-${i}`}>
                  <a href="#" className="hover:text-slate-900">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900/10 mt-10 pt-5 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
