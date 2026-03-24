import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const BACK_OFFICE_URL = "https://www.manumangal.com/Back-office";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-deep/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center group"
            data-ocid="nav.link"
            onClick={() => handleNavClick("#home")}
          >
            <img
              src="/assets/uploads/newlogobalaji-1.png"
              alt="Balaji Finmart LLP Logo"
              className="h-12 md:h-14 w-auto object-contain group-hover:scale-105 transition-transform bg-white rounded-lg px-1 py-0.5"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold transition-colors rounded-md hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              data-ocid="nav.secondary_button"
              variant="outline"
              className="border-gold/50 text-gold bg-transparent hover:bg-gold hover:text-navy-deep font-semibold transition-all"
              onClick={() => window.open(BACK_OFFICE_URL, "_blank")}
            >
              Login
            </Button>
            <Button
              data-ocid="nav.primary_button"
              className="bg-gold text-navy-deep font-semibold hover:bg-gold-light shadow-gold transition-all hover:shadow-lg hover:scale-105"
              onClick={() => handleNavClick("#contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            data-ocid="nav.toggle"
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-gold hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-navy-deep/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-3 text-sm font-medium text-white/80 hover:text-gold hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 mt-2">
                <Button
                  data-ocid="nav.secondary_button"
                  variant="outline"
                  className="flex-1 border-gold/50 text-gold bg-transparent hover:bg-gold hover:text-navy-deep font-semibold"
                  onClick={() => {
                    setMobileOpen(false);
                    window.open(BACK_OFFICE_URL, "_blank");
                  }}
                >
                  Login
                </Button>
                <Button
                  data-ocid="nav.primary_button"
                  className="flex-1 bg-gold text-navy-deep font-semibold hover:bg-gold-light"
                  onClick={() => handleNavClick("#contact")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
