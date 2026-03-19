import { motion } from "framer-motion";
import { Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
  { name: "Python", color: "bg-blue-500", icon: "devicon-python-plain" },
  { name: "C", color: "bg-indigo-500", icon: "devicon-c-plain" },
  { name: "C++", color: "bg-blue-800", icon: "devicon-cplusplus-plain" },
  { name: "Java", color: "bg-orange-500", icon: "devicon-java-plain" },
],
  },
  {
    title: "Web Technologies",
    icon: Code2,
    skills: [
  { name: "HTML", color: "bg-red-500", icon: "devicon-html5-plain" },
  { name: "CSS", color: "bg-blue-600", icon: "devicon-css3-plain" },
],
  },
 {
  title: "Data Science Libraries",
  icon: Database,
  skills: [
    { name: "NumPy", color: "bg-cyan-500", icon: "devicon-numpy-original" },
    { name: "Pandas", color: "bg-indigo-900", icon: "devicon-pandas-original" },
    { name: "Matplotlib", color: "bg-slate-600", icon: "📉" },
    { name: "Seaborn", color: "bg-gray-500", icon: "📊" },
  ],
},
{
  title: "Tools",
  icon: Wrench,
  skills: [
    { name: "Power BI", color: "bg-yellow-400", icon: "📊" },
    { name: "Excel", color: "bg-green-700", icon: "devicon-microsoftsqlserver-plain" },
  ],
},
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg gradient-bg">
                  <cat.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: ci * 0.1 + i * 0.05,
                    }}
                    className={`px-5 py-3 rounded-xl text-white font-semibold shadow-md flex items-center gap-2 ${skill.color}`}
                  >
                    {skill.icon.startsWith("devicon") ? (
  <i className={`${skill.icon} text-2xl`}></i>
) : (
  <span className="text-lg">{skill.icon}</span>
)}
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;