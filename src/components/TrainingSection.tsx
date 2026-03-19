import { motion } from "framer-motion";
import { BookOpen, Calendar } from "lucide-react";

const TrainingSection = () => {
  return (
    <section id="training" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block">Training</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card p-6 md:p-8 hover:border-primary/40 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg gradient-bg shrink-0">
              <BookOpen className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                Data Structures and Algorithms Training
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Completed a Summer Training Program on Data Structures and Algorithms at Lovely Professional University. The training focused on strengthening problem-solving skills and understanding core data structures used in software development.
              </p>
              <ul className="space-y-1.5 mb-4">
                {[
                  "Studied Arrays, Linked Lists, Stacks, Queues",
                  "Implemented Linear & Binary Search",
                  "Learned Bubble, Selection & Merge Sort",
                  "Improved logical problem-solving",
                ].map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {["C++", "Data Structures", "Algorithms"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingSection;
