import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import projectAqi from "@/assets/project-aqi.png";
import projectMarket from "@/assets/project-market.png";
import projectInventory from "@/assets/project-inventory.png";

const projects = [
  {
    title: "Real-Time Air Quality Index Data Analysis",
    date: "March 2025",
    description: "Analyzed real-time pollution datasets to understand air quality trends and environmental patterns.",
    highlights: [
      "Performed exploratory data analysis on AQI datasets",
      "Cleaned and processed environmental datasets",
      "Built visualizations for pollution trend analysis",
    ],
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    image: projectAqi,
    github: "https://github.com/venkatasaiboddepalli/Real-time-air-quality-index-analysis"
  },
  {
    title: "Daily Market Price Analysis of Agricultural Commodities",
    date: "April 2025",
    description: "Analyzed agricultural commodity price data to identify pricing trends and market fluctuations.",
    highlights: [
      "Applied descriptive statistics for price analysis",
      "Cleaned and structured large datasets",
      "Built dashboards using Excel visualization tools",
    ],
    tags: ["Excel", "Data Visualization"],
    image: projectMarket,
    github: "https://github.com/venkatasaiboddepalli/Daily-Market-Price-Analysis-of-Agricultural-Commodities"
  },
  {
    title: "Inventory Management System",
    date: "January 2025",
    description: "Developed a web-based inventory system with CRUD operations for product management. Implemented user-friendly UI and database integration.",
    highlights: [
      "Implemented CRUD operations",
      "Designed responsive UI",
      "Built database integration for product tracking",
    ],
    tags: ["HTML", "CSS", "JavaScript", "MySQL"],
    image: projectInventory,
    github: "https://github.com/venkatasaiboddepalli/Devopsint331-"
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold gradient-text inline-block">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card overflow-hidden min-h-[520px] hover:border-primary/40 transition-all duration-300 group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-contain bg-black p-2"
              />

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.date}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-3">{project.description}</p>

                <ul className="space-y-1.5 mb-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-1 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition"
  >
    Source Code
  </a>
)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
