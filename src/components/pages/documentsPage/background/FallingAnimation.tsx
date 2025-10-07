import { memo } from 'react';
import { motion , Transition} from "motion/react";
import Leaf from "./Leaf";


const FallingAnimation = ({mediaType}: {mediaType: 'pc' | 'tablet' | 'mobile'}) => {
    const createRandomLeafs = ({count}: {count: number}) => {
        const colorSets = [
            {base: 'rgb(230, 216, 195)', shadow: 'rgba(194, 166, 140, 0.56)', stalk: 'rgb(133, 109, 86)'},
            {base: 'rgb(230, 207, 169)', shadow: 'rgba(193, 133, 109, 0.56)', stalk: 'rgb(155, 125, 113)'},
            {base: 'rgb(169, 204, 160)', shadow: 'rgba(124, 153, 123, 0.56)', stalk: 'rgb(108, 139, 108)'},
        ]

        const getRandomSize = () => {
            return `${Math.ceil(Math.random() * 10) + 15}px`;
        }

        const getRandomColorSet = () => {
            return colorSets[Math.floor(Math.random() * colorSets.length)];
        }

        const settingsMap = Array.from({length: count}).map(() => {
            const randomColorSet = getRandomColorSet();
            return {
                size: getRandomSize(),
                baseColor: randomColorSet.base,
                shadowColor: randomColorSet.shadow,
                stalkColor: randomColorSet.stalk,
            }
        })

        const getRandomPositionX = () => {
            return Math.floor(Math.random() * 100 - 30) + '%';
        }

        const getRandomTranslateX = () => {
            return `-${Math.floor(Math.random() * 30) + 10}dvw`;
        }

        const getRandomRotate = () => {
            return `${Math.floor(Math.random() * 180 - 90)}deg`;
        }

        const getRandomTransitionSettings = (): Transition => {
            const randomDuration = Math.floor(Math.random() * 5) + 3;
            const randomDelay = Math.floor(Math.random() * 7) + 3;

            return {
                x: {
                    duration: randomDuration,
                    ease: 'easeIn',
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay: randomDelay
                },
                y: {
                    duration: randomDuration,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay: randomDelay
                },
                rotate: {
                    duration: randomDuration/3,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    repeatType: 'mirror',
                    delay: randomDelay
                }
            }
        }

        return (
            <>
                {Array.from({length: count}).map((_, index) => (
                    <motion.div 
                        key={`${index}-${mediaType}`}
                        style={{position: 'absolute', bottom: '100%', right: getRandomPositionX(), width: 'fit-content', height: 'fit-content'}}
                        initial={{y: 0, x: 0, rotate: 0}}
                        animate={{y: mediaType === 'pc' ? '50dvh' : '30dvh', x: getRandomTranslateX(), rotate: getRandomRotate(), }}
                        transition={getRandomTransitionSettings()}
                        
                    >
                        <Leaf {...settingsMap[index]}/>
                    </motion.div>
                ))}
            </>
        )
    }

    const leafCount = mediaType === 'pc' ? 15 : mediaType === 'tablet' ? 8 : 5;

    return (
        <div className="falling-animation-container" style={{height: mediaType === 'pc' ? '50dvh' : '30dvh'}}>
            {createRandomLeafs({count: leafCount})}
        </div>
    )
}

export default memo(FallingAnimation);