import { Eye, GraduationCap, HeadphonesIcon, UserCheck } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Expert Guidance",
    description:
      "A team of SEBI-registered advisors, CFPs, and CAs with decades of combined market experience crafting strategies for every life stage.",
  },
  {
    icon: Eye,
    title: "Transparent Fees",
    description:
      "No hidden charges, no opaque commissions. Our flat-fee and fee-only advisory models ensure your advisor's interests align perfectly with yours.",
  },
  {
    icon: UserCheck,
    title: "Personalized Plans",
    description:
      "Every portfolio is built from scratch to match your risk tolerance, time horizon, income, and life goals — never a one-size-fits-all template.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Market emergencies don't wait for office hours. Our dedicated support team is available round-the-clock via phone, WhatsApp, and email.",
  },
];

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-navy-deep relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-white/5" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border border-gold/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-gold mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Balaji Difference
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Four pillars that make Balaji Investments the preferred choice for
            smart investors across India.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                data-ocid={`why-us.item.${idx + 1}`}
                className="group relative"
              >
                {/* Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/8 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center mb-5 group-hover:bg-gold/25 transition-colors">
                    <Icon className="w-6 h-6 text-gold" strokeWidth={1.8} />
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Number accent */}
                  <div className="absolute top-4 right-5 font-display text-5xl font-bold text-white/5 select-none">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
