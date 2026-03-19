import profile from "@/assets/profile.jpeg";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">

        {/* LEFT PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-4 gradient-bg shadow-xl">
            <img
              src={profile}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Boddepalli
            <br />
            <span className="gradient-text">Venkata Sai</span>
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            Computer Science Engineering Student | Aspiring Data Scientist
          </p>

          <p className="mt-4 text-muted-foreground max-w-xl">
            Passionate about Data Science, algorithms, and data analysis.
            Focused on building real-world projects and continuously improving analytical skills.
          </p>

          <a
            href="/SaiResume.pdf"
            download
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl gradient-bg text-primary-foreground font-semibold hover:scale-105 transition"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;