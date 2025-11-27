import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Trophy } from "lucide-react";

export function Interests() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="interests" className="bg-background py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">Beyond Work</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Sparkles className="h-5 w-5 text-accent" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Enthusiastic about the evolving landscape of AI, from foundation models to real-time edge deployments.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Trophy className="h-5 w-5 text-accent" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Play badminton regularly to maintain focus, agility, and mental clarity.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
