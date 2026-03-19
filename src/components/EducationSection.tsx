import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology – Computer Science and Engineering",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    score: "CGPA: 6.94",
    period: "Aug 2023 – Present",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate",
    institution: "Tirumala Junior College",
    location: "Rajahmundry, Andhra Pradesh",
    score: "Percentage: 96.9%",
    period: "Jun 2021 – Mar 2023",
    icon: Award,
  },
  {
    degree: "Matriculation",
    institution: "Sasi English Medium School",
    location: "Rajahmundry, Andhra Pradesh",
    score: "Percentage: 99%",
    period: "Jun 2020 – Mar 2021",
    icon: Award,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block">Education</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg gradient-bg inline-block mb-4">
                <edu.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>
              <p className="text-muted-foreground text-sm mb-1">{edu.institution}</p>
              <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
                <MapPin className="w-3 h-3" />
                {edu.location}
              </div>
              <p className="text-primary font-semibold text-sm">{edu.score}</p>
              <div className="flex items-center gap-1.5 mt-2 text-muted-foreground text-xs">
                <Calendar className="w-3 h-3" />
                {edu.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
