import { Clock, IndianRupee, ThumbsUp, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Happy Clients",
    desc: "Across India",
  },
  {
    icon: IndianRupee,
    value: "₹500Cr+",
    label: "Assets Managed",
    desc: "Under our care",
  },
  {
    icon: Clock,
    value: "15+",
    label: "Years Experience",
    desc: "In financial markets",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Client Satisfaction",
    desc: "Based on reviews",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 section-alt">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold mb-3">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Democratizing Wealth{" "}
              <span className="text-primary italic">for Every Indian</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2009,{" "}
                <strong className="text-foreground">Balaji Investments</strong>{" "}
                was built on a single belief: that every Indian deserves access
                to world-class financial advice — not just the privileged few.
                We started as a small advisory firm in Amravati and have grown
                into one of Maharashtra's most trusted investment houses.
              </p>
              <p>
                Our team of SEBI-registered investment advisors, certified
                financial planners, and chartered accountants work together to
                craft bespoke investment strategies for each client. Whether
                you're a first-time investor or managing a large corpus, we
                bring the same dedication and precision to your financial
                journey.
              </p>
              <p>
                We believe in honest advice and long-term partnerships. Our
                clients aren't just account numbers — they are families,
                entrepreneurs, and dreamers who trust us with their most
                important goals.
              </p>
            </div>

            {/* Gold accent line */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px flex-1 max-w-[80px] bg-gold" />
              <span className="text-sm font-semibold text-foreground italic font-display">
                "Your Growth, Our Mission"
              </span>
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    data-ocid={`about.item.${idx + 1}`}
                    className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                      <Icon
                        className="w-5 h-5 text-primary"
                        strokeWidth={1.8}
                      />
                    </div>
                    <div className="font-display text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="font-semibold text-foreground text-sm mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.desc}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Orange accent card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 rounded-2xl p-6 text-white relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.42 0.18 40) 0%, oklch(0.52 0.2 48) 100%)",
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gold/10 -translate-y-8 translate-x-8" />
              <div className="relative z-10">
                <p className="font-display text-xl font-bold mb-2">
                  SEBI Registered
                </p>
                <p className="text-white/70 text-sm">
                  Fully compliant with SEBI regulations. Your investments are in
                  safe, transparent, and accountable hands.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
