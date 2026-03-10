import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";
import { motion } from "motion/react";

const trustBadges = [
  "SEBI Registered",
  "10,000+ Happy Clients",
  "15 Years of Excellence",
];

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen hero-mesh noise-texture overflow-hidden flex items-center"
    >
      {/* Decorative geometric lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full border border-white/5" />
        <div className="absolute top-1/3 right-8 w-64 h-64 rounded-full border border-gold/10" />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full border border-white/5" />
        {/* Gold accent line */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/30 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-semibold tracking-wider uppercase">
                India's Most Trusted Investment Partner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              Grow Your Wealth{" "}
              <span className="text-gold italic">with Confidence</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg"
            >
              From stock trading to SIP investments, insurance to tax planning —
              Balaji Investments offers complete financial solutions tailored to
              your goals with expert guidance and transparent service.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                size="lg"
                data-ocid="hero.primary_button"
                className="bg-gold text-navy-deep font-bold hover:bg-gold-light shadow-gold hover:shadow-lg hover:scale-105 transition-all gap-2 px-8"
                onClick={() => scrollTo("#services")}
              >
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                data-ocid="hero.secondary_button"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 gap-2 px-8"
                onClick={() => scrollTo("#contact")}
              >
                <PhoneCall className="w-4 h-4" />
                Contact Us
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 text-white/60 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold/70 flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gold/10 blur-3xl scale-110" />
              <img
                src="/assets/generated/hero-investment.dim_800x600.png"
                alt="Investment Growth"
                className="relative w-full max-w-lg rounded-2xl shadow-2xl animate-float"
              />
              {/* Floating stat cards */}
              <div className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center">
                  <span className="text-gold font-bold text-sm">₹</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">AUM Managed</p>
                  <p className="font-bold text-foreground text-sm">₹500Cr+</p>
                </div>
              </div>
              <div className="absolute -right-6 bottom-1/4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">↑</span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Avg. Returns</p>
                  <p className="font-bold text-foreground text-sm">
                    18.4% p.a.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M0 60L60 52C120 44 240 28 360 24C480 20 600 28 720 32C840 36 960 36 1080 32C1200 28 1320 20 1380 16L1440 12V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="oklch(0.98 0.005 250)"
          />
        </svg>
      </div>
    </section>
  );
}
