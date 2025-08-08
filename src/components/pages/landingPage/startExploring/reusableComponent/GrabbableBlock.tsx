import { motion } from "framer-motion";


const GrabbableBlock = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            className="position-absotlue-full-size"
            initial={{cursor: 'grab'}}
            whileDrag={{cursor: 'grabbing'}}
            drag
            dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            }}
            dragElastic={0.2}
        >
            {children}
        </motion.div>
    )
}

export default GrabbableBlock;