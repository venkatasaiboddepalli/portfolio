import { motion } from "framer-motion";
import { Trophy, Calendar } from "lucide-react";

const achievements = [
  {
    title: "Solved 50+ problems on LeetCode",
    date: "January 2026",
    description:
      "Practiced algorithmic problem solving and improved understanding of data structures and competitive programming concepts.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block">Achievements</h2>
        </motion.div>

        <div className="grid gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-6 md:p-8 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg gradient-bg shrink-0">
                  <Trophy className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">{item.title}</h3>
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </div>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
