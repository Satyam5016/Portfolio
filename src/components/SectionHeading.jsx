import { motion } from "framer-motion";
import PropTypes from "prop-types";

const SectionHeading = ({ eyebrow, title, copy, align = "left" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    className={align === "center" ? "mx-auto text-center" : ""}
  >
    <span className={`eyebrow ${align === "center" ? "before:hidden" : ""}`}>{eyebrow}</span>
    <h2 className="section-title">{title}</h2>
    {copy && <p className={`section-copy ${align === "center" ? "mx-auto" : ""}`}>{copy}</p>}
  </motion.div>
);

SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  copy: PropTypes.node,
  align: PropTypes.oneOf(["left", "center"]),
};

export default SectionHeading;
