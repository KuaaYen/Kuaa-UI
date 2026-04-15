import { motion, Variants, useAnimationControls } from 'motion/react';
import PointIcon from './icons/PointIcon';
import GithubIcon from './icons/GithubIcon';
import ThreadsIcon from './icons/ThreadsIcon';
import EmailIcon from './icons/EmailIcon';

const LinkItem = ({icon, text, delay}: {icon: string, text: string, delay: number}) => {
    const copyHintControls = useAnimationControls();

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

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("ycchen034@gmail.com")
            .then(() => {
                copyHintControls.start({
                    opacity: [0, 1, 1, 0],
                    y: ['20%', '0%', '0%', '20%'],
                    transition: {
                        y: {
                            duration: 2,
                            times: [0, 0.15, 0.85, 1],
                            ease: ['easeInOut', 'linear', 'easeInOut'],
                        },
                        opacity: {
                            duration: 2,
                            times: [0, 0.15, 0.85, 1],
                            ease: ['easeInOut', 'linear', 'easeInOut'],
                        }
                    }
                });
            })
            .catch(err => {
                console.error("Failed to copy email: ", err);
            });
    };

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

    const linkMap: Partial<Record<string, string>> = {
        'G': 'https://github.com/KuaaYen/Kuaa-UI',
    }

    return (
        <motion.a 
            href={linkMap[icon]}
            target={linkMap[icon] ? '_blank' : undefined}
            rel={linkMap[icon] ? 'noopener noreferrer' : undefined}
            className='report-modal-item-wrapper' 
            variants={createItemVariants(delay)}
            onClick={(e) => {
                e.stopPropagation();
                if (icon === 'E') {
                    e.preventDefault();
                    copyEmailToClipboard();
                } else if (!linkMap[icon]) {
                    e.preventDefault();
                }
            }}
        >
            {icon === 'E' && (
                <motion.div
                    className='report-modal-item-copied-hint'
                    initial={{ opacity: 0, x: '0%', y: '20%' }}
                    animate={copyHintControls}
                >
                    Copied!
                </motion.div>
            )}
            <motion.div className='report-modal-item'>
                <div className='report-modal-item-icon'>{getIcon(icon)}</div>
                {text}
            </motion.div>
            <div className='report-modal-point-icon-wrapper'>
                <PointIcon />
            </div>
        </motion.a>
    )
}

export default LinkItem;