import { Heart, TrendingUp } from "lucide-react";

const footerLinks = {
  Company: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Stock Trading", href: "#services" },
    { label: "SIP Investment", href: "#services" },
    { label: "Insurance", href: "#services" },
    { label: "Mutual Funds", href: "#services" },
    { label: "Fixed Deposits", href: "#services" },
    { label: "Tax Planning", href: "#services" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-deep text-white">
      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button
              type="button"
              data-ocid="footer.link"
              onClick={() => handleClick("#home")}
              className="flex items-center gap-2.5 mb-4 group w-fit"
            >
              <div className="w-9 h-9 rounded-lg bg-gold flex items-center justify-center">
                <TrendingUp
                  className="w-5 h-5 text-navy-deep"
                  strokeWidth={2.5}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-lg font-bold tracking-tight">
                  Balaji
                </span>
                <span className="text-xs font-semibold text-gold tracking-widest uppercase">
                  Investments
                </span>
              </div>
            </button>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Empowering every Indian to achieve financial independence through
              smart, transparent, and personalized investment solutions since
              2009.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/50 text-xs">
                SEBI Registered Investment Advisor
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      data-ocid="footer.link"
                      onClick={() => handleClick(link.href)}
                      className="text-white/50 hover:text-gold text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} Balaji Investments. All rights reserved.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-gold fill-gold" />{" "}
            using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/80 hover:text-gold transition-colors underline-offset-2 hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
