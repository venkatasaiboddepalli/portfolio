import { motion } from "framer-motion";
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card p-8 md:p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg gradient-bg shrink-0">
              <User className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-foreground/90 leading-relaxed text-lg mb-4">
                Hello! I'm Boddepalli Venkata Sai, currently pursuing B.Tech in Computer Science and Engineering at Lovely Professional University.
              </p>
              <p className="text-foreground/90 leading-relaxed text-lg mb-4">
                I am passionate about Data Science and enjoy analyzing datasets to uncover patterns, identify trends, and transform complex data into meaningful insights.
              </p>
              <p className="text-foreground/90 leading-relaxed text-lg mb-4">
                I have learned programming languages such as Python, C, C++, and Java and I am familiar with tools including Power BI, Excel, NumPy, Pandas, Matplotlib, and Seaborn.
              </p>
              <p className="text-foreground/90 leading-relaxed text-lg">
                Through academic learning and training in Data Structures and Algorithms, I have developed strong problem-solving and logical thinking skills. My goal is to build interactive dashboards, analyze trends, and create data-driven solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
