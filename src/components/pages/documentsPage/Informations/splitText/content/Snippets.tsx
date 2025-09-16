import Snippet from "../../sharedComponent/snippets/Snippet";
import { memo } from "react";

const Snippets = () => {
    const installationSnippet = `
    # This is made with motion/react, remember to install it first
    npm install motion/react
    `


    const usageSnippet = `
    // Import SplitText component, your path may be different
    import { SplitText } from './SplitText';

    // Use the SplitText component
    <SplitText
        // every prop is optional
        text="Check this out!"
        splitType="chars"
        delay={0}
        stagger={0.05}
        triggerType="auto"
        triggerMargin={0}
        once={false}
        amount={1}
        startAnimate={false}
        initial={opacity: 0, y: '1em'}
        animate={opacity: 1, y: '0em'}
        onComplete={() => {}}
    />
    `

    const CompleteCodeSnippet = `
import { useRef } from "react";
import { motion, useInView, Variants } from "motion/react";

const SplitText = ({
    text, 
    splitType = 'chars', 
    delay = 0,
    stagger = 0.05,
    triggerType = 'auto',
    triggerMargin = 0,
    once = false,
    amount = 1,
    startAnimate = false,
    onComplete,
    initial = {
        opacity: 0,
        y: '1em',
    },
    animate = {
        opacity: 1,
        y: '0em',
    },
}: {
    text: string, 
    splitType?: 'words' | 'chars', 
    delay?: number, 
    stagger?: number,
    triggerType?: 'inView' | 'manual' | 'auto',
    triggerMargin?: number,
    once?: boolean,
    amount?: number,
    startAnimate?: boolean,
    onComplete?: () => void,
    initial?: Variants['initial'],
    animate?: Variants['animate']
}) => {

    const wrapperRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(
        wrapperRef, {
            once: once,
            margin: \`\${triggerMargin}px \${triggerMargin}px \${triggerMargin}px \${triggerMargin}px\`,
            amount: amount
        });
        
    const textVariants = {
        initial: initial,
        animate: animate,
    }


    const getVariants = () => {
        switch (triggerType) {
            case 'inView':
                return isInView ? 'animate' : 'initial';
            case 'manual':
                return startAnimate ? 'animate' : 'initial';
            case 'auto':
                return 'animate';
        }
    }

    
    const createSplitText = () => {

        const handleComplete = ({wordIndex, charIndex}: {wordIndex: number, charIndex: number}) => {
            if(!onComplete) return;
            const wordSplit = text.split(' ');
            const totalWords = wordSplit.length;
            if(splitType === 'chars') {
                if(wordIndex === totalWords - 1 && charIndex === wordSplit[wordIndex].length - 1) {
                    onComplete();
                }
            } else {
                if(wordIndex === totalWords - 1) {
                    onComplete();
                }
            }

        }

        const getDelay = (wordIndex: number, charIndex: number) => {
            const wordsBefore = text.split(' ').slice(0, wordIndex);
            const charsBefore = wordsBefore.reduce((acc, w) => acc + w.length, 0);
            return delay + (charsBefore + wordIndex + charIndex) * stagger;
        }


        if (splitType === 'chars') {
            return text.split(' ').map((word, wordIndex) => (
                <motion.span 
                    key={wordIndex}
                    style={{display: 'inline-block'}}
                >
                    {word.split('').map((char, charIndex) => (
                        <motion.span 
                            key={\`\${wordIndex}-\${charIndex}\`}
                            style={{display: 'inline-block'}}
                            variants={textVariants}
                            initial="initial"
                            animate={getVariants()}
                            transition={{delay: getDelay(wordIndex, charIndex)}}
                            onAnimationComplete={() => handleComplete({wordIndex: wordIndex, charIndex: charIndex})}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            ))
        }
        if (splitType === 'words') {
            return text.split(' ').map((word, index) => (
                <motion.span 
                    key={index}
                    style={{display: 'inline-block'}}
                    variants={textVariants}
                    initial="initial"
                    animate={getVariants()}
                    transition={{delay: delay + index * stagger}}
                    onAnimationComplete={() => handleComplete({wordIndex: index, charIndex: 0})}
                >
                    {word}
                </motion.span>
            ))
        }
    }

    return (
        <>
            <motion.p 
                className="split-text-demo"
                ref={wrapperRef}
            >
                {createSplitText()}
            </motion.p>
        </>
    )
}

export default SplitText;
    `
    const cssSnippet = `
.split-text{
    position: relative;
    display: flex;
    gap: 0.2em;
    flex-wrap: wrap;
    text-shadow: 2px 2px 0px #a39f92;
    /* I use Francois One font for this demo, you can find it in Google Fonts */
    /* font-family: 'Francois One', sans-serif; */
}
    `


    return (
        <div className="code-snippets-container">
            <Snippet title="Installation" snippet={installationSnippet} language="bash" delay={500} />
            <Snippet title="Usage" snippet={usageSnippet} language="jsx" delay={1000} />
            <Snippet title="Code" snippet={CompleteCodeSnippet} language="jsx" delay={1500} />
            <Snippet title="CSS" snippet={cssSnippet} language="css" delay={1800} />
        </div>
    )
}

export default memo(Snippets);