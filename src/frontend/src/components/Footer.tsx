import { Heart } from "lucide-react";

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
              className="flex items-center mb-4 group w-fit"
            >
              <img
                src="/assets/uploads/newlogobalaji-2-1.png"
                alt="Balaji Finmart LLP"
                className="h-16 w-auto object-contain"
              />
            </button>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Empowering every Indian to achieve financial independence through
              smart, honest, and personalized investment solutions since 2009.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/50 text-xs">
                SEBI Registered Investment Advisor
              </span>
            </div>

            {/* App Store Badges */}
            <div className="flex flex-col gap-2">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                Download Our App
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.balajifinmartmf.mobile.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.link"
                  className="transition-opacity hover:opacity-80"
                >
                  <img
                    src="/assets/generated/google-play-badge.dim_200x60.png"
                    alt="Get it on Google Play"
                    className="h-10 w-auto rounded-lg"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/balaji-finmart/id6738837524"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.link"
                  className="transition-opacity hover:opacity-80"
                >
                  <img
                    src="/assets/generated/app-store-badge.dim_200x60.png"
                    alt="Download on the App Store"
                    className="h-10 w-auto rounded-lg"
                  />
                </a>
              </div>
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
