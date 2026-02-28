import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationBanner = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="py-12 md:py-16"
  >
    <div className="gradient-lavender-peach">
      <div className="container-wide py-10 md:py-14 flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <MapPin className="w-6 h-6 text-coral animate-pulse-soft shrink-0" />
        <p className="text-lg md:text-xl font-medium text-foreground">
          Supporting Sydney-based businesses initially, with Australia-wide
          hands-on support coming soon.
        </p>
      </div>
    </div>
  </motion.section>
);

export default LocationBanner;
