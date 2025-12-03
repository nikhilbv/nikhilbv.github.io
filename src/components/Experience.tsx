import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    "Built an on-device Driver Monitoring System on SG2000 SoC using YOLOv5 + MediaPipe FaceMesh, achieving 84.18% mAP@0.5 IoU and reducing unsafe-driver events by 40% through optimized inference and alert logic.",
    "Architected a cross-modal (IR - RGB) face authentication system using ArcFace embeddings and FastAPI microservices, enabling sub-second 1:N matching under diverse lighting and pose conditions.",
    "Developed a Python-C++/Qt geospatial AI tool (via pybind11), integrating annotation, training, and inference; improved labeling throughput by 60% with real-time ML-assisted workflows.",
    "Automated LoD-2 3D building reconstruction (Mask R-CNN + plane fitting + OBJ texturing) from DSM/DTM and orthophotos, reducing manual modeling by 65% and scaling 3D map production.",
    "Designed and productionized multi-model perception pipelines (YOLO, Mask R-CNN, LaneNet) for HD mapping, boosting visual accuracy by +25% and enabling scalable extraction of lanes, drivable area, and road assets across multi-camera survey vehicles.",
    "Built and maintained the AIML Hub, MapmyIndia’s ML serving and MLOps platform, automating deployment pipelines, model registry, scheduling, and monitoring; fixed GPU memory leak via weight freezing, improving deployment time (-25%), downtime (-30%), and reliability (95% uptime).",
    "Mentored engineers on profiling, quantization, and GPU memory optimization, improving reliability and delivery velocity across the ML team.",
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
