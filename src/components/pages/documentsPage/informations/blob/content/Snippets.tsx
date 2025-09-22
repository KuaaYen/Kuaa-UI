import Snippet from "../../sharedComponent/snippets/Snippet";
import { memo } from "react";

const Snippets = () => {
    const installationSnippet = `
    # This is made with motion/react, remember to install it first
    npm install motion/react
    `


    const usageSnippet = `
    // Import Blob component, your path may be different
    import { Blob } from './Blob';

    // Use the DecodeText component
    <Blob 
        // every prop is optional
        cornerPosition={[45, 60, 40, 30]}
        color="#f2fbff"
        size={250}
        spin={false}
        spinDuration={3}
        randomRadius={false}
        randomRadiusInterval={500}
        randomRadiusInensity={30}
        bounce={true}
        draggable={true}
        blobClassName="your-own-class-name"
        chilrenFixed={true}
    >
        {/* The content you want to put inside the blob */}
        {children}
    </Blob>
    `

    const CompleteCodeSnippet = `
import { useState, useRef } from "react";
import { motion, Transition, useAnimationFrame } from "motion/react";

const getBorderRadius = (cornerPosition: number[]) => {
    return \`
        \${cornerPosition[0]}% \${cornerPosition[1]}% \${cornerPosition[2]}% \${cornerPosition[3]}% / 
        \${cornerPosition[0]}% \${cornerPosition[1]}% \${cornerPosition[2]}% \${cornerPosition[3]}%
    \`
}

const Blob = ({
    cornerPosition = [45, 60, 40, 30],
    color = 'rgb(242, 251, 255)',
    size = 250,
    spin = true,
    spinDuration = 3,
    randomRadius = true,
    randomRadiusInterval = 500,
    randomRadiusInensity = 30,
    bounce = true,
    draggable = true,
    blobClassName = '',
    children,
    chilrenFixed = true,
}: {
    cornerPosition?: number[],
    color?: string,
    size?: number,
    spin?: boolean,
    spinDuration?: number,
    randomRadius?: boolean,
    randomRadiusInterval?: number,
    randomRadiusInensity?: number,
    bounce?: boolean,
    draggable?: boolean,
    blobClassName?: string,
    children?: React.ReactNode,
    chilrenFixed?: boolean,
}) => {
    const [borderRadius, setBorderRadius] = useState(getBorderRadius(cornerPosition));
    const lastUpdateTime = useRef(0);

    const createRandomBorderRadius = () => {
        return getBorderRadius([
            (50 - randomRadiusInensity/2) + Math.random() * randomRadiusInensity,
            (50 - randomRadiusInensity/2) + Math.random() * randomRadiusInensity,
            (50 - randomRadiusInensity/2) + Math.random() * randomRadiusInensity,
            (50 - randomRadiusInensity/2) + Math.random() * randomRadiusInensity,
        ]);
    }

    useAnimationFrame((time) => {
        if(randomRadius) {
            if(time - lastUpdateTime.current < randomRadiusInterval) {
                return;
            }
            lastUpdateTime.current = time;
            setBorderRadius(createRandomBorderRadius());
        } else {
            setBorderRadius(getBorderRadius(cornerPosition));
        }
    })

    const getRotateTransition = (): Transition => {
        if(spin) {
            return {
                duration: spinDuration,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
            }
        }
        return { duration: 0.5, ease: 'easeInOut'}
    }

    const cursorStyle = draggable ? 'grab' : (bounce ? 'pointer' : 'default');

    return (
        <motion.div 
            className="blob-container"
            style={{cursor: cursorStyle}}
            {...(draggable && {
                drag: true,
                dragConstraints: {top: 0, left: 0, right: 0, bottom: 0},
                dragElastic: 0.5,
                dragTransition: {bounceStiffness: 100, bounceDamping: 10},
            })}      
            {...(bounce && {
                whileHover:{
                    scale: 1.1,
                    transition: {
                        type: 'spring',
                    }
                },
                whileTap:{
                    scale: 0.98,
                    cursor: 'grabbing',
                    transition: {
                        type: 'spring',
                        duration: 0.4,
                    }
                }
            })}  
        >
            <motion.div 
                className={\`blob \${blobClassName}\`}
                style={{backgroundColor: color}}
                initial={{
                    borderRadius: borderRadius,
                    rotate: 0,
                    width: size,
                    height: size,
                }}
                animate={{
                    borderRadius: borderRadius,
                    rotate: spin ? 360 : 0,
                    width: size,
                    height: size,
                }}
                transition={{
                    borderRadius: {duration: 1, ease: 'easeInOut'},
                    rotate: { ...getRotateTransition()},
                    width: {duration: 1, ease: 'easeInOut'},
                    height: {duration: 1, ease: 'easeInOut'}
                }}
            >
                {!chilrenFixed && (
                    <div className="blob-content">
                        {children}
                    </div>
                )}
            </motion.div>
            {chilrenFixed && (
                <div className="blob-content">
                    {children}
                </div>
            )}
        </motion.div>
    )
}

export default Blob;
    `
    const cssSnippet = `
.blob-container{
    position: relative;
}

.blob {
    /* width, height, background-color, border-radius, transform, cursor */
    /* these properties will be handled by the component */
    position: relative;
}

.blob-content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
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