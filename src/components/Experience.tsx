import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    "Led the design and deployment of real-time computer vision systems on edge and cloud platforms, improving model accuracy, reducing latency, and cutting infrastructure costs across multiple products.",
    "Built on-device driver monitoring solutions on edge SoCs, significantly reducing unsafe-driver events through optimized inference and calibrated alert logic.",
    "Designed and deployed face authentication systems using deep metric learning and API-based microservices, delivering sub-second 1:N matching in production.",
    "Developed internal geospatial AI tooling using Python and C++ (with UI), integrating annotation, training, and inference into a single workflow and boosting labeling throughput by around 60%.",
    "Automated 3D building reconstruction pipelines from elevation data and imagery, reducing manual modeling effort by around 65% and enabling scalable 3D map production.",
    "Designed and optimized multi-model perception pipelines for HD mapping, improving visual accuracy and increasing inference speed for large-scale road and lane understanding.",
    "Built and maintained an internal ML serving and MLOps platform ('AIML Hub') to handle model registry, automated deployment, scheduling, and monitoring; reduced deployment time and downtime while increasing system uptime and reliability.",
    "Mentored engineers on profiling, quantization, GPU/memory optimization, and API design, improving reliability and delivery velocity across the ML team.",
  ];

  return (
    <section id="experience" className="bg-section py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Professional Experience
          </h2>
          <Card className="border-border/50">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">MapmyIndia</CardTitle>
                  <p className="text-lg font-medium text-accent">
                    Senior Software Engineer
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Promoted from Software Engineer
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Bengaluru, India • Jun 2018 – Aug 2025
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start text-muted-foreground"
                  >
                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
