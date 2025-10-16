import { motion } from 'motion/react';

const EmailIcon = ({ishovered}: {ishovered: boolean}) => {
    return (
        <div
            style={{
                position: 'relative',
                height: '2.4rem',
                aspectRatio: 1,
            }}
        >
            
            <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff00',
                    zIndex: 1,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <motion.path 
                        d="M 15 30 c 0 -5 5 -10 10 -10 l 49 0 c 5 0 10 5 10 10 l 0 40 c 0 5 -5 10 -10 10 l -49 0 c -5 0 -10 -5 -10 -10 l 0 -40 m 0 0 l 25 20 C 47 55 53 55 60 50 L 84 30"
                        fill="transparent"
                        stroke="var(--basic-purple)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                            stroke: 'var(--basic-purple)',
                        }}
                        animate={{
                            stroke: ishovered ? 'var(--basic-brick)' : 'var(--basic-purple)',
                        }}
                        transition={{
                            duration: 0.2,
                            ease: 'easeInOut',
                        }}
                    />
                </svg>     
            </div>
            
        </div>
    )
}
export default EmailIcon;