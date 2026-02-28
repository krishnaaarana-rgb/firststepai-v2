import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LocationBanner = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="border-y border-border"
  >
    <div className="container-wide py-10 md:py-12 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
      <MapPin className="w-5 h-5 text-forest shrink-0" />
      <p className="text-sm md:text-base text-muted-foreground">
        Supporting <span className="font-medium text-foreground">Australia & New Zealand</span> based businesses with hands-on AI implementation and training.
      </p>
    </div>
  </motion.section>
);

export default LocationBanner;
