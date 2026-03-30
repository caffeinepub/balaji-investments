import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const AWARDS = [
  { id: "a1" },
  { id: "a2" },
  { id: "a3" },
  { id: "a4" },
  { id: "a5" },
  { id: "a6" },
];

const AUTO_SCROLL_MS = 2500;
const TOTAL = AWARDS.length;

export function AchievementsSection() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TOTAL);
    }, AUTO_SCROLL_MS);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TOTAL);
    }, AUTO_SCROLL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    setCurrent((index + TOTAL) % TOTAL);
    resetTimer();
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const visibleCards = [0, 1, 2].map(
    (offset) => AWARDS[(current + offset) % TOTAL],
  );

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-2">
            Awards &amp; Recognition
          </p>
          <h2 className="text-4xl font-bold text-gray-800">Our Achievements</h2>
          <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-orange-400" />
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-4">
          <button
            type="button"
            data-ocid="achievements.pagination_prev"
            onClick={prev}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-orange-200 shadow flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
            aria-label="Previous award"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex-1 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {visibleCards.map((award, i) => (
                <div
                  key={award.id}
                  className="bg-white rounded-2xl border border-orange-100 shadow-sm flex flex-col items-center justify-center py-12 px-6 gap-4 transition-all duration-500"
                  data-ocid={`achievements.item.${i + 1}`}
                >
                  <div className="w-16 h-16 rounded-full bg-orange-50 border-2 border-orange-200 flex items-center justify-center">
                    <Trophy size={30} className="text-orange-300" />
                  </div>
                  <p className="text-gray-400 text-sm font-medium tracking-wide">
                    Award Coming Soon
                  </p>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            data-ocid="achievements.pagination_next"
            onClick={next}
            className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-orange-200 shadow flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
            aria-label="Next award"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {AWARDS.map((award, i) => (
            <button
              key={award.id}
              type="button"
              onClick={() => goTo(i)}
              data-ocid="achievements.tab"
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-orange-500" : "bg-orange-200"
              }`}
              aria-label={`Go to award ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
