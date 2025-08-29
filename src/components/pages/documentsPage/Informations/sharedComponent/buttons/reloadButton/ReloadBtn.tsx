import { motion, useAnimation } from "framer-motion";
import ReloadIcon from "./ReloadIcon";

const ReloadBtn = ({handler}: {handler: () => void}) => {
    const controls = useAnimation();

    const handleClick = () => {
        controls.start({
            rotate: [0, -360],
            transition: { duration: 0.6, ease: "easeInOut" }
        });
        handler();
    };

    return (
        <motion.button
            className="documents-page-component-reload-btn"
            onClick={handleClick}
            whileHover={{ 
                scale: 1.1,
                transition: { 
                    type: 'spring',
                    bounce: 0,
                }
            }}
            animate={controls}
        >
            <ReloadIcon />
        </motion.button>
    )
}

export default ReloadBtn;