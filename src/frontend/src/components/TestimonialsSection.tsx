import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllTestimonials } from "@/hooks/useQueries";
import { Quote, Star } from "lucide-react";
import { motion } from "motion/react";

const fallbackTestimonials = [
  {
    name: "Rajesh Krishnamurthy",
    role: "Software Engineer, Bengaluru",
    message:
      "Balaji Investments completely transformed my financial outlook. I started a SIP of ₹5,000/month two years ago on their advice, and my portfolio has grown by 24%. Their advisors are patient, knowledgeable, and genuinely care about your goals.",
    rating: 5,
  },
  {
    name: "Priya Subramaniam",
    role: "Business Owner, Chennai",
    message:
      "I had surplus funds parked in a savings account for years. The team at Balaji helped me diversify into mutual funds and FDs intelligently. Returns have doubled my expectations. The transparency in fees was particularly refreshing.",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    role: "Retired Government Officer, Delhi",
    message:
      "As a retired person, capital protection was my priority. Balaji created a balanced portfolio with senior citizen FDs and debt funds. I receive regular income and sleep peacefully knowing my savings are secure and growing.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {(["s1", "s2", "s3", "s4", "s5"] as const).map((key, i) => (
        <Star
          key={key}
          className={`w-4 h-4 ${
            i < rating ? "text-gold fill-gold" : "text-muted-foreground/30"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { data: testimonials, isLoading } = useGetAllTestimonials();

  const displayTestimonials =
    testimonials && testimonials.length > 0
      ? testimonials.map((t) => ({
          name: t.name,
          role: "Valued Client",
          message: t.message,
          rating: Number(t.rating),
        }))
      : fallbackTestimonials;

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

        {/* Loading state */}
        {isLoading && (
          <div
            data-ocid="testimonials.loading_state"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(["sk1", "sk2", "sk3"] as const).map((key) => (
              <div
                key={key}
                className="bg-card rounded-2xl p-6 space-y-3 border border-border"
              >
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-20 w-full" />
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <div className="space-y-1.5">
                    <Skeleton className="h-3 w-28" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials grid */}
        {!isLoading && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                data-ocid={`testimonials.item.${idx + 1}`}
                className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-7 h-7 text-gold/40" fill="currentColor" />
                </div>

                {/* Stars */}
                <StarRating rating={testimonial.rating} />

                {/* Message */}
                <p className="text-muted-foreground text-sm leading-relaxed mt-4 flex-1">
                  "{testimonial.message}"
                </p>

                {/* Author */}
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
