import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-section py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
            Results-driven Senior Computer Vision & Edge AI Engineer (7+ years) with expertise in building and deploying real-time AI systems across edge and cloud environments. Skilled in model quantization, latency optimization, and cross-framework interoperability using ONNX for efficient model portability. Proficient in developing Python–C++ hybrid pipelines, microservice APIs, and edge-ready inference systems optimized for performance and scalability. Recognized for improving model accuracy, reducing inference latency, and cutting infrastructure costs through systematic optimization. I also mentor engineers to improve code quality and delivery speed, building strong, high-performing AI teams, and I work closely with hardware, DevOps, and product teams to translate research models into production-grade applications.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
