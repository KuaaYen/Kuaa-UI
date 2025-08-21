import { Illustration, Shape } from 'react-zdog';
import { useAnimationFrame, motion } from 'motion/react';
import { useState } from 'react';

const IndicatorArrow = ({currentItemIndex, totalItems}: {currentItemIndex: number, totalItems: number}) => {
    const [rotation, setRotation] = useState(0);

    useAnimationFrame((time) => {
        setRotation(time * 0.005);
    });

    const getIndicatorTranslate = () => {
        if(currentItemIndex + 1 > totalItems) {
            console.log('Indicator arrow : index out of bounds');
            return 0;
        }

        const itemHeight = 1.5;
        const itemGap = 1;
        const YTranslate = currentItemIndex * itemHeight + currentItemIndex * itemGap;
        return YTranslate;

    }

    return (
        <motion.div 
            className='documents-page-component-list-item-indicator'
            style={{
                transform: `translate(0, ${getIndicatorTranslate()}rem)`,
            }}
            initial={{opacity: 0, scale: 0.2, y: getIndicatorTranslate() + 'rem'}}
            animate={{opacity: 1, scale: 1, y: getIndicatorTranslate() + 'rem'}}
            exit={{opacity: 0, scale: 0.2, y: getIndicatorTranslate() + 'rem'}}
            transition={{
                y: {
                    duration: 0.2,
                    ease: 'easeInOut'
                },
                type: 'spring',
                stiffness: 100,
                damping: 10,
            }}
        >
            <Illustration zoom={0.5}>
                <Shape
                    path={[
                        {x:-10, y:-10},
                        {x:10, y:0},
                        {x:-10, y:10},
                        {x:-5, y:0},
                    ]}
                    closed={true}
                    stroke={8}
                    color={'var(--basic-brick)'}
                    fill={true}
                    // translate={{x:-10, y:-10}}
                    rotate={{x: rotation}}
                />
            </Illustration>
        </motion.div>     
    )
}

export default IndicatorArrow;