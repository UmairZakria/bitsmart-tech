
import { motion } from "framer-motion";
const Textslow = ({ text ,styles="", delay=0.3 }) => {

    return (
        <p className={styles} >
            {text.split(" ").map((word, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}

                    whileInView={{ opacity: 1, transition: { delay: index * delay, duration: 1 } }}
                >

                    <span>  </span>{word}
                </motion.span>
            ))}

        </p>
    )
}
export default Textslow