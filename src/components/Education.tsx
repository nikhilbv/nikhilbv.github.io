import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "M.Tech in Artificial Intelligence & Machine Learning",
    program: "Work Integrated Learning Programme",
    institution: "Birla Institute of Technology and Science (BITS) Pilani",
    duration: "Oct 2022 – Oct 2024",
    cgpa: "7.33",
  },
  {
    degree: "B.E. in Information Science and Engineering",
    institution: "SDM College of Engineering and Technology, Dharwad",
    duration: "Jun 2014 – May 2017",
    cgpa: "8.49",
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="bg-section py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">
                          {edu.degree}
                        </h3>
                        {edu.program && (
                          <p className="text-sm text-muted-foreground mb-2">
                            {edu.program}
                          </p>
                        )}
                        <p className="text-base text-foreground mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <span>{edu.duration}</span>
                          <span>•</span>
                          <span className="font-medium">CGPA: {edu.cgpa}</span>
                        </div>
                      </div>
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
