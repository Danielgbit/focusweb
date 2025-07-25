'use client'

import DesignedTitle from "@/components/DesignedTitle/DesignedTitle";
import styles from "./Testimonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import MainTitle from "@/components/MainTitle/MainTitle";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.1 }}
      id="testimonios"
      className={styles.testimonialsSection}
    >
      <DesignedTitle title="Testimonios" />
      <MainTitle
        className=""
        title="Lo que dicen quienes ya tienen su landing"
      />
      <div className={styles.testimonialsContainer}>
        <div className={styles.card}>
          <FontAwesomeIcon icon={faUserCircle} className={styles.icon} />
          <span className={styles.name}>Alba Lucia</span>
          <p className={styles.content}>
            Quedé feliz con mi landing. Todo fue rápido, claro y el diseño
            superó mis expectativas. ¡Totalmente recomendados!
          </p>
        </div>

        <div className={styles.card}>
          <FontAwesomeIcon icon={faUserCircle} className={styles.icon} />
          <span className={styles.name}>Alejandra Echavarria</span>
          <p className={styles.content}>
            Necesitaba algo profesional para mi negocio y lo lograron en solo 3
            días. Me encantó cómo se ve en el celular.
          </p>
        </div>

        <div className={styles.card}>
          <FontAwesomeIcon icon={faUserCircle} className={styles.icon} />
          <span className={styles.name}>Daniel Gonzalez</span>
          <p className={styles.content}>
            El equipo entendió perfectamente lo que buscaba. Agregaron secciones
            que no sabía que necesitaba. Muy cumplidos.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
