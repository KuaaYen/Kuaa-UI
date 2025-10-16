import { motion } from "motion/react";

const ToggleSwitch = ({ isChecked, setIsChecked }: { isChecked: boolean, setIsChecked: (isChecked: boolean) => void }) => {
    return (
        <label className="toggle-switch-label">
            <input className="toggle-switch-input" type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <motion.div 
                className="toggle-switch-layout"
                initial={{backgroundColor: 'var(--ts-color)'}}
                animate={{backgroundColor: isChecked ? 'var(--js-color)' : 'var(--ts-color)'}}
                transition={{duration: 0.3}}
            >
                <motion.div 
                    className="toggle-switch-text"
                    initial={{x: '0.65rem', y: '1px'}}
                    animate={{x: isChecked ? '-0.65rem' : '0.65rem', y: '1px'}}
                    transition={{duration: 0.3}}
                >
                    {isChecked ? 'JSX' : 'TSX'}
                </motion.div>
                <motion.div 
                    className="toggle-switch-layout-circle"
                    initial={{x: '-0.3rem', y: '-50%'}}
                    animate={{x: isChecked ? '2rem' : '-0.3rem', y: '-50%'}}
                    transition={{duration: 0.3}}
                ></motion.div>
            </motion.div>
        </label>
    )
}

export default ToggleSwitch;
