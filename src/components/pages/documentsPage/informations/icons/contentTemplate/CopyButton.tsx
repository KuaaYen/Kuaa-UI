import { motion } from "motion/react";
import { useRef } from "react";
import CopyIcon, { CopyIconRef } from "../animatedIcons/icons/CopyIcon";
// import CopyIcon from "../../sharedComponent/buttons/copyButton/CopyIcon";


const CopyButton = ({data}: {data: string}) => {
    const copyIconRef = useRef<CopyIconRef>(null);



    return (
        <motion.button 
            className="static-content-template-copy-button"
            onClick={() => copyIconRef.current?.handleCopy()}
            onMouseEnter={() => copyIconRef.current?.handleHover()}
            onMouseLeave={() => copyIconRef.current?.handleLeave()}
            initial={{
                backgroundColor: 'var(--basic-eggshell)',
                color: 'var(--basic-purple)',
                fontSize: '1rem',
            }}
            whileHover={{
                backgroundColor: 'var(--basic-purple)',
                color: 'var(--primary-color)',
                fontSize: '1.1rem',
            }}
            transition={{
                duration: 0.2,
                ease: 'easeInOut',
            }}
        >
            <span className="static-content-template-copy-button-icon">
                <CopyIcon ref={copyIconRef} data={data} strokeColor="#ffffff"/>
            </span>
            Copy Code
        </motion.button>
    )
}

export default CopyButton;