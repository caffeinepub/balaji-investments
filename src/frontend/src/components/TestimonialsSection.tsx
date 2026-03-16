import { motion } from "motion/react";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 section-alt">
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
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real stories from real investors who trusted us with their financial
            dreams.
          </p>
        </motion.div>

        {/* Video embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-3xl"
        >
          <div
            className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-border"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/fLF6eOioUbw"
              title="Client IRL Review – Balaji Finmart LLP"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="mt-5 text-center text-muted-foreground text-sm">
            Watch our client share their investment journey with Balaji Finmart
            LLP.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
