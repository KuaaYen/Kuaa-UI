import { motion } from "motion/react";
import CopyIcon from "./CopyIcon";

const CopyButton = ({
    data, 
    strokeColor = '#1A1B26', 
    fillInitialColor = 'rgb(172, 175, 177)', 
    fillActiveColor = 'rgb(242, 251, 255)',
    borderColor = 'rgb(172, 175, 177)'

}: {
    data: string, 
    strokeColor?: string, 
    fillInitialColor?: string, 
    fillActiveColor?: string,
    borderColor?: string
}) => {

    return (
        <motion.button className="documents-page-component-copy-btn"
            initial={{border: `2px solid ${borderColor}`, scale: 1}}
            whileHover={{border: `2px solid ${fillActiveColor}`, scale: 1.05}}
            whileTap={{border: `2px solid ${fillActiveColor}`, scale: 0.95}}
            transition={{
                duration: 0.2,
                ease: 'easeInOut',
            }}
        >
            <CopyIcon data={data} strokeColor={strokeColor} fillInitialColor={fillInitialColor} fillActiveColor={fillActiveColor} />
        </motion.button>
    )
}

export default CopyButton;