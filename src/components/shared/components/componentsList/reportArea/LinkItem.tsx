import { motion, Variants } from 'motion/react';
import PointIcon from './icons/PointIcon';
import GithubIcon from './icons/GithubIcon';
import ThreadsIcon from './icons/ThreadsIcon';
import EmailIcon from './icons/EmailIcon';

const LinkItem = ({icon, text, delay}: {icon: string, text: string, delay: number}) => {

    const createItemVariants = (delay: number) => {
        return {
            hidden: {scale: 0, opacity: 0},
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    type: 'spring',
                    stiffness: 120,
                    damping: 15,
                    delay: delay,
                },
            },
            exit: {
                scale: 0,
                opacity: 0,
                transition: {
                    duration: 0.5,
                    type: 'spring',
                    bounce: 0,
                    delay: 0.05,
                },
            },
        } as Variants;
    }


    const getIcon = (icon: string) => {
        switch (icon) {
            case 'E':
                return <EmailIcon />;
            case 'L':
                return (
                    <div className='linkedin-icon'>
                        in
                    </div>
                ) 
            case 'G':
                return <GithubIcon />;
            case 'T':
                return <ThreadsIcon />;
        }
    }

    return (
        <motion.div 
            className='report-modal-item-wrapper' 
            variants={createItemVariants(delay)}
            onClick={(e) => {e.stopPropagation()}}
        >
            <motion.div className='report-modal-item'>
                <div className='report-modal-item-icon'>{getIcon(icon)}</div>
                {text}
            </motion.div>
            <div className='report-modal-point-icon-wrapper'>
                <PointIcon />
            </div>
        </motion.div>
    )
}

export default LinkItem;