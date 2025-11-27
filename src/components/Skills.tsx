import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Zap, Cloud, Database, Cpu } from "lucide-react";

const skillGroups = [
  {
    icon: Brain,
    title: "Core Competencies",
    skills: [
      "Computer Vision",
      "Deep Learning",
      "Edge AI",
      "Real-Time Inference",
      "Model Quantization",
      "Latency Optimization",
      "Embedded AI",
    ],
  },
  {
    icon: Code,
    title: "Programming & Frameworks",
    skills: [
      "Python",
      "C++",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Scikit-learn",
      "NumPy",
      "Pandas",
    ],
  },
  {
    icon: Zap,
    title: "Optimization & Portability",
    skills: [
      "QAT",
      "PTQ",
      "Model Compression",
      "ONNX (interoperability)",
      "Performance Profiling and Optimization",
    ],
  },
  {
    icon: Cloud,
    title: "MLOps & Deployment",
    skills: [
      "FastAPI",
      "Flask",
      "Docker",
      "CI/CD",
      "AWS",
      "Git",
      "API Integration",
      "Model Serving",
      "Automation Pipelines",
    ],
  },
  {
    icon: Database,
    title: "Data & Storage",
    skills: [
      "SQL",
      "MongoDB",
      "Vector Databases",
      "Data Engineering",
      "Feature Extraction",
    ],
  },
  {
    icon: Cpu,
    title: "Edge & Embedded Platforms",
    skills: [
      "Raspberry Pi",
      "SG2000 SoC",
      "Embedded Linux",
      "Edge inference systems",
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="bg-background py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Core Skills & Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                  <CardHeader>
                    <group.icon className="h-8 w-8 mb-2 text-accent" />
                    <CardTitle className="text-xl">{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="mr-2 text-accent">•</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
