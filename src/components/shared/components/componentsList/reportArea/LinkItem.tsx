import { useState } from 'react';
import { motion, Variants } from 'motion/react';
import PointIcon from './icons/PointIcon';
import GithubIcon from './icons/GithubIcon';
import TreadsIcon from './icons/TreadsIcon';
import EmailIcon from './icons/EmailIcon';

// 擺在外面，這樣isHovered改變時，動畫才會正確運行
// 不然state改變時，function被重新建構，這樣元素會被重新渲染，動畫也會被中斷
const LinkedinIcon = ({ishovered}: {ishovered: boolean}) => {
    return (
        <motion.div 
            className='linkedin-icon'
            initial={{ backgroundColor: 'var(--basic-purple)'}}
            animate={{backgroundColor: ishovered ? 'var(--basic-brick)' : 'var(--basic-purple)'}}
            transition={{
                duration: 0.2,
                ease: 'easeInOut',
            }}
        >
            in
        </motion.div>
    )
}

const LinkItem = ({icon, text, delay}: {icon: string, text: string, delay: number}) => {
    const [isHovered, setIsHovered] = useState(false);

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


    const getIcon = (icon: string, isHovered: boolean) => {
        switch (icon) {
            case 'E':
                // return "E";
                return <EmailIcon ishovered={isHovered} />;
                // return <EmailIcon />;
            case 'L':
                // return "L";
                return <LinkedinIcon ishovered={isHovered} />;
                // return <LinkedInIcon />;
            case 'G':
                return <GithubIcon ishovered={isHovered} />;
            case 'T':
                // return "T";
                return <TreadsIcon ishovered={isHovered} />;
        }
    }

    return (
        <motion.div 
            className='report-modal-item-wrapper' 
            variants={createItemVariants(delay)}
            onClick={(e) => {e.stopPropagation()}}
        >
            <motion.div 
                className='report-modal-item'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{color: 'var(--basic-brick)'}}
                whileTap={{scale: 0.98}}
                transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                }}
            >
                <div className='report-modal-item-icon'>{getIcon(icon, isHovered)}</div>
                {text}
            </motion.div>
            <div className='report-modal-point-icon-wrapper'>
                <PointIcon />
            </div>
        </motion.div>
    )
}

export default LinkItem;