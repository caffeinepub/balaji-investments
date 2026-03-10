import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Calculator,
  Landmark,
  PieChart,
  RefreshCw,
  Shield,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: TrendingUp,
    title: "Stock Trading",
    description:
      "Trade equities on NSE & BSE with real-time market insights, expert research reports, and personalized portfolio management to maximize your returns.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: RefreshCw,
    title: "SIP Investment",
    description:
      "Start a Systematic Investment Plan from just ₹500/month. Build long-term wealth through rupee cost averaging in top-performing mutual fund schemes.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Shield,
    title: "Insurance",
    description:
      "Protect your family and assets with comprehensive life, health, motor, and term insurance plans from India's leading insurers at competitive premiums.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: PieChart,
    title: "Mutual Funds",
    description:
      "Invest in a diversified portfolio of equity, debt, and hybrid mutual funds. Our advisors help you pick the right scheme aligned with your risk profile.",
    color: "text-purple-600",
    bg: "bg-purple-50",
  },
  {
    icon: Landmark,
    title: "Fixed Deposits",
    description:
      "Secure guaranteed returns with bank and corporate FDs offering up to 8.5% p.a. interest. Safe, liquid, and ideal for capital preservation.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description:
      "Maximize your savings under Section 80C, 80D, and other provisions. Our chartered accountants ensure you're fully compliant while minimizing tax outgo.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ServicesSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold mb-3">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Complete Investment Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to build, grow, and protect your wealth — under
            one trusted roof.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                data-ocid={`services.item.${idx + 1}`}
                className="group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4`}
                >
                  <Icon
                    className={`w-6 h-6 ${service.color}`}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">
                  {service.description}
                </p>

                {/* CTA */}
                <Button
                  variant="ghost"
                  size="sm"
                  data-ocid={`services.primary_button.${idx + 1}`}
                  className="self-start gap-2 text-primary hover:text-gold hover:bg-gold/10 px-0 font-semibold group-hover:gap-3 transition-all"
                  onClick={scrollToContact}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
