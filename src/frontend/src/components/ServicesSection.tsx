import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Landmark,
  PieChart,
  RefreshCw,
  Shield,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const r = rate / 12 / 100;
  const n = years * 12;
  const totalValue =
    r > 0 ? monthly * ((((1 + r) ** n - 1) / r) * (1 + r)) : monthly * n;
  const invested = monthly * n;
  const returns = totalValue - invested;

  const fmt = (v: number) =>
    new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(v);

  return (
    <div className="mt-4 mb-5 bg-emerald-50/60 border border-emerald-100 rounded-xl p-4">
      <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-3">
        SIP Calculator
      </p>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div>
          <label
            htmlFor="sip-monthly"
            className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1"
          >
            Monthly (₹)
          </label>
          <Input
            id="sip-monthly"
            type="number"
            value={monthly}
            min={500}
            step={500}
            data-ocid="sip.input"
            onChange={(e) => setMonthly(Number(e.target.value))}
            className="h-8 text-xs px-2 border-emerald-200 focus-visible:ring-emerald-400"
          />
        </div>
        <div>
          <label
            htmlFor="sip-rate"
            className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1"
          >
            Return (%)
          </label>
          <Input
            id="sip-rate"
            type="number"
            value={rate}
            min={1}
            max={30}
            step={0.5}
            onChange={(e) => setRate(Number(e.target.value))}
            className="h-8 text-xs px-2 border-emerald-200 focus-visible:ring-emerald-400"
          />
        </div>
        <div>
          <label
            htmlFor="sip-years"
            className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide block mb-1"
          >
            Years
          </label>
          <Input
            id="sip-years"
            type="number"
            value={years}
            min={1}
            max={40}
            step={1}
            onChange={(e) => setYears(Number(e.target.value))}
            className="h-8 text-xs px-2 border-emerald-200 focus-visible:ring-emerald-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="text-center bg-white rounded-lg py-2 px-1 border border-emerald-100">
          <p className="text-[10px] text-muted-foreground mb-0.5">Invested</p>
          <p className="text-sm font-bold text-foreground">₹{fmt(invested)}</p>
        </div>
        <div className="text-center bg-white rounded-lg py-2 px-1 border border-emerald-100">
          <p className="text-[10px] text-muted-foreground mb-0.5">
            Est. Returns
          </p>
          <p className="text-sm font-bold text-emerald-600">₹{fmt(returns)}</p>
        </div>
        <div className="text-center bg-emerald-600 rounded-lg py-2 px-1">
          <p className="text-[10px] text-emerald-100 mb-0.5">Total Value</p>
          <p className="text-sm font-bold text-white">₹{fmt(totalValue)}</p>
        </div>
      </div>
    </div>
  );
}

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
    hasSIPCalculator: true,
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

const orangeGhostStyle = {
  color: "oklch(0.55 0.22 45)",
  fontWeight: 600,
} as React.CSSProperties;

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
            const isSIP =
              "hasSIPCalculator" in service && service.hasSIPCalculator;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                data-ocid={`services.item.${idx + 1}`}
                className={`group bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col${
                  isSIP ? " sm:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-4`}
                  >
                    <Icon
                      className={`w-6 h-6 ${service.color}`}
                      strokeWidth={1.8}
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p
                    className={`text-muted-foreground text-sm leading-relaxed mb-0${
                      isSIP ? " max-w-xl" : " flex-1"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>

                {/* SIP Calculator */}
                {isSIP && <SIPCalculator />}

                {/* CTA */}
                <Button
                  variant="ghost"
                  size="sm"
                  data-ocid={`services.primary_button.${idx + 1}`}
                  style={orangeGhostStyle}
                  className="self-start gap-2 px-0 group-hover:gap-3 transition-all mt-auto hover:bg-orange-50"
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
