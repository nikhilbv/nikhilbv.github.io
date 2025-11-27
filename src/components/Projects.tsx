import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Users, MapPin, Activity, Server } from "lucide-react";

const projects = [
  {
    icon: Eye,
    title: "Edge AI for Driver Monitoring",
    description:
      "Real-time vision models deployed on resource-constrained hardware, improving road safety via on-device inference.",
    metric: "~40% reduction in unsafe-driver events",
  },
  {
    icon: Users,
    title: "Face Authentication Systems",
    description:
      "Deep learning–based verification with low-latency microservice APIs for production environments.",
    metric: "Sub-second 1:N matching in production",
  },
  {
    icon: MapPin,
    title: "Geospatial AI Tools",
    description:
      "Internal tools that combine labeling, training, and inference to accelerate map and dataset creation.",
    metric: "~60% increase in labeling throughput",
  },
  {
    icon: Activity,
    title: "HD Mapping & Perception Pipelines",
    description:
      "Multi-model pipelines for lane, drivable area, and road asset understanding at scale.",
    metric: "Improved visual accuracy & inference speed",
  },
  {
    icon: Server,
    title: "MLOps & Model Serving",
    description:
      "Centralized ML serving platform that streamlined deployment, monitoring, and reliability for AI services.",
    metric: "Reduced deployment time & increased uptime",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="bg-background py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Selected Work & Impact
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                  <CardHeader>
                    <div className="p-3 bg-accent/10 rounded-lg w-fit mb-3">
                      <project.icon className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        {project.metric}
                      </div>
                      <Button
                        variant="link"
                        className="p-0 h-auto text-accent"
                        onClick={scrollToContact}
                      >
                        Learn more →
                      </Button>
                    </div>
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
