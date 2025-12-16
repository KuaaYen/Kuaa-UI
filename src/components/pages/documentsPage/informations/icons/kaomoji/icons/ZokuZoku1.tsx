import { motion, Transition } from "motion/react";

const ZokuZoku1 = () => {

    const monsterTransition = {
        duration: 0.2,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatType: 'reverse',
    } as Transition

    const createLeftEar = ({startPosition, key}: {startPosition: number, key: string}) => {
        const leftEarStartPosition = startPosition + 7;

        return (
            <path 
                key={key}
                d={`M ${leftEarStartPosition} 45 c 0 -3 -6 -3 -6 2 c 0 1 0 4 4 4 l 0 4`}
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
        )
    }

    const createRightEar = ({startPosition, key}: {startPosition: number, key: string}) => {
        return (
            <path 
                key={key}
                d={`M ${startPosition} 45 c 0 -3 6 -3 6 2 c 0 1 0 4 -4 4 l 0 4`}
                fill="transparent"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
        )
    }

    const createFace = ({startPosition, key}: {startPosition: number, key: string}) => {
        const faceStartPosition = startPosition + 4;
        return (
            <g key={key}>
                {/* eyes */}
                <path 
                    d={`M ${faceStartPosition} 49 l 0 0 m 6 0 l 0 0`}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                {/* mouth */}
                <path 
                    d={`M ${faceStartPosition+0.5} 56 c 0 2 2.5 2 2.5 0 c 0 2 2.5 2 2.5 0`}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />   
                {/* head */}
                <path 
                    d={`M ${faceStartPosition+3} 45 c 2 -3 9 -3 11 0`}
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                />         
            </g>
        )
    }

    const patternMap = ['LFR', 'FR', 'F', 'LFR'];

    const elementConfig = {
        'L': { width: 7, create: createLeftEar },
        'R': { width: 6, create: createRightEar },
        'F': { width: 14, create: createFace },
    };

    const createMonster = ({pattern, monsterStartPosition}: {pattern: string, monsterStartPosition: number}) => {
        let currentPosition = monsterStartPosition;
        
        return (
            <>
                {pattern.split('').map((char, index) => {
                    const config = elementConfig[char as keyof typeof elementConfig];
                    if (!config) return null;
                    
                    const startPosition = currentPosition;
                    currentPosition += config.width;
                    
                    return config.create({startPosition: startPosition, key: `${char}-${index}`});
                })}
            </>
        )
    }

    const creatMonsterTeam = ({patternMap, teamStartPosition}: {patternMap: string[], teamStartPosition: number}) => {
        let currentPosition = teamStartPosition;

        return patternMap.map((pattern, index) => {
            const startPosition = currentPosition;
            const monsterWidth = pattern.split('').reduce((acc, char) => acc + elementConfig[char as keyof typeof elementConfig].width, 0);
            currentPosition += monsterWidth;
            return (
                <motion.g 
                    key={`monster-team-${index}`}
                    initial={{scale: 1}}    
                    animate={{scale: 1.05}}
                    transition={{...monsterTransition, delay: index * 0.1}}
                >
                    {createMonster({pattern: pattern, monsterStartPosition: startPosition})}
                </motion.g>
            )
        })
    }

    return (
        <svg viewBox="2 39 90 20" xmlns="http://www.w3.org/2000/svg"  height="1em" width="4.5em">
            {creatMonsterTeam({patternMap: patternMap, teamStartPosition: 2})}
        </svg>
    )
}
export default ZokuZoku1;