import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block">Resume</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-10 text-center"
        >
          <div className="p-4 rounded-xl gradient-bg inline-block mb-6">
            <FileText className="w-8 h-8 text-primary-foreground" />
          </div>
          <p className="text-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            My resume provides an overview of my academic background, technical skills, certifications, and project experience in data analysis and software development.
          </p>
          <a
            href="/SaiResume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-semibold shadow-lg hover:scale-105 transition"
>
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
