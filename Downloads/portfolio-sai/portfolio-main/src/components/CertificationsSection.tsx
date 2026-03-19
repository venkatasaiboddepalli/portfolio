import { motion } from "framer-motion";
import { Award, Calendar, ImageIcon } from "lucide-react";
import certNptel from "@/assets/cert-nptel.png";
import certIbm from "@/assets/cert-ibm.png";
import certOracleFoundations from "@/assets/cert-oracle-foundations.png";
import certOracleAi from "@/assets/cert-oracle-ai.png";

const certifications = [
  {
    title: "Privacy and Security in Online Social Media",
    issuer: "NPTEL",
    date: "October 2024",
    highlights: [
      "Learned social media privacy risks",
      "Studied cyber security fundamentals",
      "Understood digital identity protection",
    ],
    image: certNptel,
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    issuer: "IBM",
    date: "October 2024",
    highlights: [
      "Learned networking fundamentals",
      "Studied internet protocols",
      "Explored troubleshooting concepts",
    ],
    image: certIbm,
  },
  {
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle",
    date: "March 2026",
    highlights: [
      "Learned database fundamentals and cloud computing basics", 
      "Understood Oracle Cloud Infrastructure core services",
      "Gained knowledge of data storage and networking concepts",
    ],
    image: certOracleFoundations,
  },
  {
    title: "Oracle Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "March 2026",
    highlights: [
      "Learned fundamentals of Artificial Intelligence and Machine Learning ",
      "Understood AI applications in real-world business scenarios", 
      "Gained knowledge of data processing and intelligent systems",
    ],
    image: certOracleAi,
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block">Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card overflow-hidden min-h-[520px] hover:border-primary/40 transition-all duration-300 group"
            >
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-auto object-contain bg-white p-2"
                />
              ) : (
                <div className="w-full h-36 bg-secondary flex items-center justify-center">
                  <ImageIcon className="w-10 h-10 text-muted-foreground/40" />
                </div>
              )}

              <div className="gradient-bg p-3 flex items-center gap-3">
                <Award className="w-4 h-4 text-primary-foreground" />
                <span className="font-display text-sm font-bold text-primary-foreground">{cert.issuer}</span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-4">
                  <Calendar className="w-3 h-3" />
                  {cert.date}
                </div>
                <ul className="space-y-1.5">
                  {cert.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-1.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
