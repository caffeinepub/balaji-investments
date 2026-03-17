import { motion } from "motion/react";
import { useState } from "react";

const videos = [
  {
    id: "fLF6eOioUbw-1",
    youtubeId: "fLF6eOioUbw",
    title: "Client Review 1 – Balaji Finmart LLP",
  },
  {
    id: "fLF6eOioUbw-2",
    youtubeId: "fLF6eOioUbw",
    title: "Client Review 2 – Balaji Finmart LLP",
  },
  {
    id: "fLF6eOioUbw-3",
    youtubeId: "fLF6eOioUbw",
    title: "Client Review 3 – Balaji Finmart LLP",
  },
  {
    id: "fLF6eOioUbw-4",
    youtubeId: "fLF6eOioUbw",
    title: "Client Review 4 – Balaji Finmart LLP",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + videos.length) % videos.length);
  const next = () => setCurrent((c) => (c + 1) % videos.length);

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

        {/* Carousel */}
        <div className="mx-auto max-w-3xl">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
          >
            <div
              className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-border"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                key={current}
                src={`https://www.youtube.com/embed/${videos[current].youtubeId}`}
                title={videos[current].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              type="button"
              onClick={prev}
              className="px-5 py-2 rounded-full border border-border text-foreground hover:bg-muted transition text-sm font-medium"
              data-ocid="testimonials.pagination_prev"
            >
              ← Prev
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {videos.map((video, i) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current
                      ? "bg-gold scale-125"
                      : "bg-muted-foreground/40 hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="px-5 py-2 rounded-full border border-border text-foreground hover:bg-muted transition text-sm font-medium"
              data-ocid="testimonials.pagination_next"
            >
              Next →
            </button>
          </div>

          <p className="mt-4 text-center text-muted-foreground text-sm">
            Video {current + 1} of {videos.length} – Client review from Balaji
            Finmart LLP
          </p>
        </div>
      </div>
    </section>
  );
}
