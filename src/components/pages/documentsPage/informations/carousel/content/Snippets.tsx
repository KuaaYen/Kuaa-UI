import Snippet from "../../sharedComponent/snippets/Snippet";
import { memo } from "react";

const Snippets = () => {
    const installationSnippet = `
    # This is made with motion/react, remember to install it first
    npm install motion/react
    `


    const usageSnippet = `
    // Import Carousel component, your path may be different
    import { Carousel } from './Carousel';

    // put your items in an array, or create a map function to generate items
    const items = [
        <div>Item 1</div>,
        <div>Item 2</div>,
        <div>Item 3</div>,
    ]

    // Use the Carousel component
    <Carousel 
        // every prop is optional, but you should set at least one item to be able to see the carousel
        itemHeight={280}
        dotColor={'#E07A5F'}
        rollInterval={500}
        rollDuration={1000}
        items={items}
    />
    `

    const CompleteCodeSnippetTS = `
import { useState, useRef, ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';

interface CarouselProps {
    items: ReactNode[];
    dotColor?: string;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    autoPlayRest?: number;
    rollInterval?: number;
    rollDuration?: number;
    itemHeight?: number;
}

interface VisibleItem {
    content: ReactNode;
    key: string;
    display: boolean;
}

const getVisibleItems = (items: ReactNode[], centerIndex: number = 0): VisibleItem[] => {
    const createItemData = (item: ReactNode, itemIndex: number): VisibleItem => {
        const time = new Date().getTime();
        return {
            content: item,
            key: \`item-\${itemIndex}-\${time}\`,
            display: true,
        };
    }

    const createEmptyItem = (): VisibleItem => ({
        content: null,
        display: false,
        key: \`empty-\${new Date().getTime()}\`,
    });

    const totalItems = items.length;

    if(totalItems === 0) return [];
    
    if(totalItems === 1) {
        return [
            createEmptyItem(),
            createItemData(items[0], 0),
            createEmptyItem()
        ];
    }

    if(totalItems === 2) {
        const nextIndex = (centerIndex + 1) % totalItems;
        return [
            createEmptyItem(),
            createItemData(items[centerIndex], centerIndex), 
            createItemData(items[nextIndex], nextIndex),
        ];
    }

    const leftIndex = (centerIndex - 1 + totalItems) % totalItems;
    const rightIndex = (centerIndex + 1) % totalItems;
    
    return [
        createItemData(items[leftIndex], leftIndex),
        createItemData(items[centerIndex], centerIndex),
        createItemData(items[rightIndex], rightIndex)
    ];
};

const RollButton = ({direction = 'left', handler}: {direction?: 'left' | 'right', handler: () => void}) => {
    const [isActive, setIsActive] = useState(false);

    const buttonVariants = {
        initial: {scale: 1, backgroundColor: 'rgba(255,255,255,0.8)', y: '-50%'},
        hover: {scale: 1.1, backgroundColor: 'rgba(255,255,255,1)', y: '-50%'},
        tap: {scale: 0.9, backgroundColor: 'rgba(255,255,255,1)', y: '-50%'},
    }

    const iconVariants = {
        initial: {stroke: 'rgba(0, 0, 0, 0.5)'},
        active: {stroke: 'rgba(0, 0, 0, 1)'},
    }

    return (
        <motion.button
            onClick={handler}
            className={\`carousel-roll-button \${direction}\`}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
        >
            <div 
                className={\`carousel-roll-button-icon \${direction}\`}
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <motion.path 
                        d="M 20 50 L 80 50 M 55 25 L 80 50 L 55 75"
                        fill="transparent"
                        stroke="#000000"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={iconVariants}
                        initial="initial"
                        animate={isActive ? "active" : "initial"}
                    />
                </svg>   
            </div>    
        </motion.button>    
    )
}

const Carousel = ({ 
    items,
    dotColor = '#E07A5F',
    autoPlay = true,
    autoPlayInterval = 3000,
    autoPlayRest = 2000,
    rollInterval = 500,
    rollDuration = 1000,
    itemHeight = 280,
}: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [rollDirection, setRollDirection] = useState<'next' | 'previous'>('next');
    const [itemsInView, setItemsInView] = useState<VisibleItem[]>(getVisibleItems(items, 0) || []);
    const lastRollTime = useRef(0);
    const lastAutoPlayTime = useRef(new Date().getTime());

    const groupSize = 10;
    const totalGroups = Math.ceil(items.length / groupSize);
    const [currentGroup, setCurrentGroup] = useState(0);


    useAnimationFrame(() => {
        if(autoPlay) {
            const currentTime = new Date().getTime();
            if(currentTime - lastAutoPlayTime.current < autoPlayInterval) return;
            navigateCarousel('next');
            lastAutoPlayTime.current = currentTime;
        }
    });


    const itemVariants = {
        overflowLeft: { x: '-200%', y: '-50%', rotateY: '-30deg', opacity: 0, scale: 0, zIndex: 1},
        left: { x: '-132%', y: '-50%', rotateY: '-25deg', opacity: 1, scale: 0.6, zIndex: 2},
        center: { x: '-50%', y: '-50%', rotateY: '0deg', opacity: 1, scale: 1, zIndex: 3},
        right: { x: '32%', y: '-50%', rotateY: '25deg', opacity: 1, scale: 0.6, zIndex: 2},
        overflowRight: { x: '100%', y: '-50%', rotateY: '30deg', opacity: 0, scale: 0, zIndex: 1},
    }

    const switchGroupButtonVariants = {
        initial: { backgroundColor: 'rgba(255,255,255,0.5)', color: 'rgba(0, 0, 0, 0.5)', scale: 1},
        hover: { backgroundColor: 'rgba(255,255,255,1)', color: 'rgba(0, 0, 0, 1)', scale: 1.1},
        tap: { backgroundColor: 'rgba(255,255,255, 0.5)', color: 'rgba(0, 0, 0, 1)', scale: 0.9},
    }

    const getGroupForIndex = (index: number) => Math.floor(index / groupSize);

    const updateCurrentGroup = (newIndex: number) => {
        const newGroup = getGroupForIndex(newIndex);
        if (newGroup !== currentGroup) {
            setCurrentGroup(newGroup);
        }
    };

    const getCurrentGroupIndicators = () => {
        const startIndex = currentGroup * groupSize;
        const endIndex = Math.min(startIndex + groupSize, items.length);
        return { startIndex, endIndex };
    };

    const switchToGroup = (direction: 'next' | 'previous') => {
        let newGroupIndex;
        
        if (direction === 'next') {
            newGroupIndex = currentGroup === totalGroups - 1 ? 0 : currentGroup + 1;
        } else {
            newGroupIndex = currentGroup === 0 ? totalGroups - 1 : currentGroup - 1;
        }
        
        setCurrentGroup(newGroupIndex);
        const firstItemOfGroup = newGroupIndex * groupSize;
        goToSlide(firstItemOfGroup, true);
    };


    const createCarouselItem = () => {
        const getPosition = (index: number) => {
            if(index === 0) return 'left';
            if(index === 1) return 'center';
            if(index === 2) return 'right';
        }

        return (
            <AnimatePresence mode='popLayout'>
                {
                    itemsInView.map((item, index) => (
                        item.display && (
                            <motion.div
                                key={item.key}
                                className='carousel-item'
                                style={{height: itemHeight}}
                                variants={itemVariants}
                                initial={rollDirection === 'next' ? 'overflowRight' : 'overflowLeft'}
                                animate={getPosition(index)}
                                exit={rollDirection === 'next' ? 'overflowLeft' : 'overflowRight'}
                                transition={{ type: 'spring', bounce: 0, duration: rollDuration / 1000}}
                            >
                                {item.content}
                            </motion.div>
                        )
                    ))
                }
            </AnimatePresence>
        )
    }
    
    const SwitchGroupButton = ({direction}: {direction: 'previous' | 'next'}) => {
        return (
            <>
                {items.length > groupSize && (
                    <motion.button
                        onClick={() => switchToGroup(direction)}
                        className='carousel-switch-group-button'
                        variants={switchGroupButtonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                    >
                        <span>{direction === 'previous' ? '‹' : '›'}</span>
                    </motion.button>
                )}
            </>
        )
    }

    const navigateCarousel = (direction: 'next' | 'previous') => {
        if(items.length <= 1) return;
        const currentTime = new Date().getTime();
        if(currentTime - lastRollTime.current < rollInterval) return;

        const getNextIndex = (index: number) => {
            return direction === 'next' 
                ? (index + 1) % items.length
                : (index - 1 + items.length) % items.length;
        }

        const newIndex = getNextIndex(currentIndex);
        
        if (items.length > groupSize) {
            const currentItemGroup = getGroupForIndex(currentIndex);
            const newItemGroup = getGroupForIndex(newIndex);
            if (newItemGroup !== currentItemGroup) {
                setCurrentGroup(newItemGroup);
            }
        }

        flushSync(() => {
            setRollDirection(direction);
            setCurrentIndex((prev) => (getNextIndex(prev)));
        })

        if(items.length === 2) {
            setItemsInView((prev) => {
                const newItems = [prev[0], prev[2], prev[1]];
                return newItems;
            })
            lastRollTime.current = currentTime;
            return;
        }

        const newItemIndex = direction === 'next' 
            ? getNextIndex(getNextIndex(currentIndex))  
            : getNextIndex(getNextIndex(currentIndex)); 

        const newItem: VisibleItem = {
            content: items[newItemIndex],
            key: \`item-\${newItemIndex}-\${new Date().getTime()}\`,
            display: true,
        };

        setItemsInView((prev) => {
            const newItems = [...prev];
            if(direction === 'next') {
                newItems.shift();     
                newItems.push(newItem); 
            } else {
                newItems.pop();        
                newItems.unshift(newItem); 
            }
            return newItems;
        })
        
        lastRollTime.current = currentTime;
        lastAutoPlayTime.current = currentTime + autoPlayRest;
    };

    const goToSlide = (targetIndex: number, forceJump: boolean = false) => {
        if (targetIndex < 0 || targetIndex >= items.length) return;
        if (targetIndex === currentIndex) return;

        updateCurrentGroup(targetIndex);
        
        const getShortestDistance = (from: number, to: number, arrayLength: number) => {
            const directDistance = Math.abs(to - from);
            const wrapAroundDistance = arrayLength - directDistance;
            return Math.min(directDistance, wrapAroundDistance);
        };
        
        const getOptimalDirection = (from: number, to: number) => {
            return to > from ? 'next' : 'previous';
        };

        const shortestDistance = getShortestDistance(currentIndex, targetIndex, items.length);
        const optimalDirection = getOptimalDirection(currentIndex, targetIndex);
        
        if (shortestDistance === 1 && !forceJump) {
            navigateCarousel(optimalDirection);
            return;
        }
        
        const newItemsInView = getVisibleItems(items, targetIndex);
        
        flushSync(() => {
            setRollDirection(optimalDirection);
            setCurrentIndex(targetIndex);
        });
        setItemsInView(newItemsInView);
    };


    return (
        <article className='carousel-container'>
            <div className='carousel-main-area' style={{height: itemHeight+40}}>
                {createCarouselItem()}
                <RollButton direction='left' handler={() => navigateCarousel('previous')} />
                <RollButton direction='right' handler={() => navigateCarousel('next')} />
            </div>

            <div className='carousel-indicator-container'>
                <SwitchGroupButton direction='previous' />
                <AnimatePresence mode='sync'>
                    {(() => {
                        const { startIndex, endIndex } = getCurrentGroupIndicators();
                        return Array.from({ length: endIndex - startIndex }, (_, i) => {
                            const itemIndex = startIndex + i;
                            return (
                                <motion.button
                                    key={\`position-\${i}\`}
                                    onClick={() => goToSlide(itemIndex)}
                                    className='carousel-to-slide-button'
                                    initial={{width: '0rem', marginLeft: '0rem'}}
                                    animate={{
                                        width: '0.7rem',
                                        marginLeft: i > 0 ? '0.5rem' : '0rem',
                                        backgroundColor: currentIndex === itemIndex ? dotColor : 'rgba(145, 145, 145, 0.3)',
                                        scale: currentIndex === itemIndex ? 1.2 : 1
                                    }}
                                    exit={{width: '0rem', marginLeft: '0rem'}}
                                    whileHover={{ scale: 1.5 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                                >
                                </motion.button>
                            );
                        });
                    })()}   
                </AnimatePresence>
                <SwitchGroupButton direction='next' />
            </div>

            <div className='carousel-index'>
                {currentIndex + 1} of {items.length}
            </div>
        </article>
    );
};

export default Carousel;
    `

    const CompleteCodeSnippetJS = `
import { useState, useRef, ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';


const getVisibleItems = (items, centerIndex = 0) => {
    const createItemData = (item, itemIndex) => {
        const time = new Date().getTime();
        return {
            content: item,
            key: \`item-\${itemIndex}-\${time}\`,
            display: true,
        };
    }

    const createEmptyItem = () => ({
        content: null,
        display: false,
        key: \`empty-\${new Date().getTime()}\`,
    });

    const totalItems = items.length;

    if(totalItems === 0) return [];
    
    if(totalItems === 1) {
        return [
            createEmptyItem(),
            createItemData(items[0], 0),
            createEmptyItem()
        ];
    }

    if(totalItems === 2) {
        const nextIndex = (centerIndex + 1) % totalItems;
        return [
            createEmptyItem(),
            createItemData(items[centerIndex], centerIndex), 
            createItemData(items[nextIndex], nextIndex),
        ];
    }

    const leftIndex = (centerIndex - 1 + totalItems) % totalItems;
    const rightIndex = (centerIndex + 1) % totalItems;
    
    return [
        createItemData(items[leftIndex], leftIndex),
        createItemData(items[centerIndex], centerIndex),
        createItemData(items[rightIndex], rightIndex)
    ];
};

const RollButton = ({direction = 'left', handler}) => {
    const [isActive, setIsActive] = useState(false);

    const buttonVariants = {
        initial: {scale: 1, backgroundColor: 'rgba(255,255,255,0.8)', y: '-50%'},
        hover: {scale: 1.1, backgroundColor: 'rgba(255,255,255,1)', y: '-50%'},
        tap: {scale: 0.9, backgroundColor: 'rgba(255,255,255,1)', y: '-50%'},
    }

    const iconVariants = {
        initial: {stroke: 'rgba(0, 0, 0, 0.5)'},
        active: {stroke: 'rgba(0, 0, 0, 1)'},
    }

    return (
        <motion.button
            onClick={handler}
            className={\`carousel-roll-button \${direction}\`}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
        >
            <div 
                className={\`carousel-roll-button-icon \${direction}\`}
                onMouseEnter={() => setIsActive(true)}
                onMouseLeave={() => setIsActive(false)}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <motion.path 
                        d="M 20 50 L 80 50 M 55 25 L 80 50 L 55 75"
                        fill="transparent"
                        stroke="#000000"
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={iconVariants}
                        initial="initial"
                        animate={isActive ? "active" : "initial"}
                    />
                </svg>   
            </div>    
        </motion.button>    
    )
}

const Carousel = ({ 
    items,
    dotColor = '#E07A5F',
    autoPlay = true,
    autoPlayInterval = 3000,
    autoPlayRest = 2000,
    rollInterval = 500,
    rollDuration = 1000,
    itemHeight = 280,
}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [rollDirection, setRollDirection] = useState('next');
    const [itemsInView, setItemsInView] = useState(getVisibleItems(items, 0) || []);
    const lastRollTime = useRef(0);
    const lastAutoPlayTime = useRef(new Date().getTime());

    const groupSize = 10;
    const totalGroups = Math.ceil(items.length / groupSize);
    const [currentGroup, setCurrentGroup] = useState(0);


    useAnimationFrame(() => {
        if(autoPlay) {
            const currentTime = new Date().getTime();
            if(currentTime - lastAutoPlayTime.current < autoPlayInterval) return;
            navigateCarousel('next');
            lastAutoPlayTime.current = currentTime;
        }
    });


    const itemVariants = {
        overflowLeft: { x: '-200%', y: '-50%', rotateY: '-30deg', opacity: 0, scale: 0, zIndex: 1},
        left: { x: '-132%', y: '-50%', rotateY: '-25deg', opacity: 1, scale: 0.6, zIndex: 2},
        center: { x: '-50%', y: '-50%', rotateY: '0deg', opacity: 1, scale: 1, zIndex: 3},
        right: { x: '32%', y: '-50%', rotateY: '25deg', opacity: 1, scale: 0.6, zIndex: 2},
        overflowRight: { x: '100%', y: '-50%', rotateY: '30deg', opacity: 0, scale: 0, zIndex: 1},
    }

    const switchGroupButtonVariants = {
        initial: { backgroundColor: 'rgba(255,255,255,0.5)', color: 'rgba(0, 0, 0, 0.5)', scale: 1},
        hover: { backgroundColor: 'rgba(255,255,255,1)', color: 'rgba(0, 0, 0, 1)', scale: 1.1},
        tap: { backgroundColor: 'rgba(255,255,255, 0.5)', color: 'rgba(0, 0, 0, 1)', scale: 0.9},
    }

    const getGroupForIndex = (index) => Math.floor(index / groupSize);

    const updateCurrentGroup = (newIndex) => {
        const newGroup = getGroupForIndex(newIndex);
        if (newGroup !== currentGroup) {
            setCurrentGroup(newGroup);
        }
    };

    const getCurrentGroupIndicators = () => {
        const startIndex = currentGroup * groupSize;
        const endIndex = Math.min(startIndex + groupSize, items.length);
        return { startIndex, endIndex };
    };

    const switchToGroup = (direction) => {
        let newGroupIndex;
        
        if (direction === 'next') {
            newGroupIndex = currentGroup === totalGroups - 1 ? 0 : currentGroup + 1;
        } else {
            newGroupIndex = currentGroup === 0 ? totalGroups - 1 : currentGroup - 1;
        }
        
        setCurrentGroup(newGroupIndex);
        const firstItemOfGroup = newGroupIndex * groupSize;
        goToSlide(firstItemOfGroup, true);
    };


    const createCarouselItem = () => {
        const getPosition = (index) => {
            if(index === 0) return 'left';
            if(index === 1) return 'center';
            if(index === 2) return 'right';
        }

        return (
            <AnimatePresence mode='popLayout'>
                {
                    itemsInView.map((item, index) => (
                        item.display && (
                            <motion.div
                                key={item.key}
                                className='carousel-item'
                                style={{height: itemHeight}}
                                variants={itemVariants}
                                initial={rollDirection === 'next' ? 'overflowRight' : 'overflowLeft'}
                                animate={getPosition(index)}
                                exit={rollDirection === 'next' ? 'overflowLeft' : 'overflowRight'}
                                transition={{ type: 'spring', bounce: 0, duration: rollDuration / 1000}}
                            >
                                {item.content}
                            </motion.div>
                        )
                    ))
                }
            </AnimatePresence>
        )
    }
    
    const SwitchGroupButton = ({direction}) => {
        return (
            <>
                {items.length > groupSize && (
                    <motion.button
                        onClick={() => switchToGroup(direction)}
                        className='carousel-switch-group-button'
                        variants={switchGroupButtonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                        transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                    >
                        <span>{direction === 'previous' ? '‹' : '›'}</span>
                    </motion.button>
                )}
            </>
        )
    }

    const navigateCarousel = (direction) => {
        if(items.length <= 1) return;
        const currentTime = new Date().getTime();
        if(currentTime - lastRollTime.current < rollInterval) return;

        const getNextIndex = (index) => {
            return direction === 'next' 
                ? (index + 1) % items.length
                : (index - 1 + items.length) % items.length;
        }

        const newIndex = getNextIndex(currentIndex);
        
        if (items.length > groupSize) {
            const currentItemGroup = getGroupForIndex(currentIndex);
            const newItemGroup = getGroupForIndex(newIndex);
            if (newItemGroup !== currentItemGroup) {
                setCurrentGroup(newItemGroup);
            }
        }

        flushSync(() => {
            setRollDirection(direction);
            setCurrentIndex((prev) => (getNextIndex(prev)));
        })

        if(items.length === 2) {
            setItemsInView((prev) => {
                const newItems = [prev[0], prev[2], prev[1]];
                return newItems;
            })
            lastRollTime.current = currentTime;
            return;
        }

        const newItemIndex = direction === 'next' 
            ? getNextIndex(getNextIndex(currentIndex))  
            : getNextIndex(getNextIndex(currentIndex)); 

        const newItem = {
            content: items[newItemIndex],
            key: \`item-\${newItemIndex}-\${new Date().getTime()}\`,
            display: true,
        };

        setItemsInView((prev) => {
            const newItems = [...prev];
            if(direction === 'next') {
                newItems.shift();     
                newItems.push(newItem); 
            } else {
                newItems.pop();        
                newItems.unshift(newItem); 
            }
            return newItems;
        })
        
        lastRollTime.current = currentTime;
        lastAutoPlayTime.current = currentTime + autoPlayRest;
    };

    const goToSlide = (targetIndex, forceJump = false) => {
        if (targetIndex < 0 || targetIndex >= items.length) return;
        if (targetIndex === currentIndex) return;

        updateCurrentGroup(targetIndex);
        
        const getShortestDistance = (from, to, arrayLength) => {
            const directDistance = Math.abs(to - from);
            const wrapAroundDistance = arrayLength - directDistance;
            return Math.min(directDistance, wrapAroundDistance);
        };
        
        const getOptimalDirection = (from, to) => {
            return to > from ? 'next' : 'previous';
        };

        const shortestDistance = getShortestDistance(currentIndex, targetIndex, items.length);
        const optimalDirection = getOptimalDirection(currentIndex, targetIndex);
        
        if (shortestDistance === 1 && !forceJump) {
            navigateCarousel(optimalDirection);
            return;
        }
        
        const newItemsInView = getVisibleItems(items, targetIndex);
        
        flushSync(() => {
            setRollDirection(optimalDirection);
            setCurrentIndex(targetIndex);
        });
        setItemsInView(newItemsInView);
    };


    return (
        <article className='carousel-container'>
            <div className='carousel-main-area' style={{height: itemHeight+40}}>
                {createCarouselItem()}
                <RollButton direction='left' handler={() => navigateCarousel('previous')} />
                <RollButton direction='right' handler={() => navigateCarousel('next')} />
            </div>

            <div className='carousel-indicator-container'>
                <SwitchGroupButton direction='previous' />
                <AnimatePresence mode='sync'>
                    {(() => {
                        const { startIndex, endIndex } = getCurrentGroupIndicators();
                        return Array.from({ length: endIndex - startIndex }, (_, i) => {
                            const itemIndex = startIndex + i;
                            return (
                                <motion.button
                                    key={\`position-\${i}\`}
                                    onClick={() => goToSlide(itemIndex)}
                                    className='carousel-to-slide-button'
                                    initial={{width: '0rem', marginLeft: '0rem'}}
                                    animate={{
                                        width: '0.7rem',
                                        marginLeft: i > 0 ? '0.5rem' : '0rem',
                                        backgroundColor: currentIndex === itemIndex ? dotColor : 'rgba(145, 145, 145, 0.3)',
                                        scale: currentIndex === itemIndex ? 1.2 : 1
                                    }}
                                    exit={{width: '0rem', marginLeft: '0rem'}}
                                    whileHover={{ scale: 1.5 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                                >
                                </motion.button>
                            );
                        });
                    })()}   
                </AnimatePresence>
                <SwitchGroupButton direction='next' />
            </div>

            <div className='carousel-index'>
                {currentIndex + 1} of {items.length}
            </div>
        </article>
    );
};

export default Carousel;
    `

    const cssSnippet = `
.carousel-container {
    position: relative;
    width: 100%;
    min-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.carousel-main-area {
    position: relative;
    width: 100%;
    max-width: 90dvw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent 0%, black 1rem, black calc(100% - 1rem), transparent 100%);
    z-index: 1;
    perspective: 1000px;
}

.carousel-item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 16/9;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;
    transform-style: preserve-3d;
}

.carousel-item-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
}

.carousel-roll-button {
    position: absolute;
    top: 50%;
    width: 2.5rem;
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.5);
    z-index: 3;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent; /* prevent tap highlight */
}

.carousel-roll-button.left {
    left: 1rem;
}

.carousel-roll-button.right {
    right: 1rem;
}

.carousel-roll-button-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-roll-button svg {
    height: 60%;
    aspect-ratio: 1;
}

.carousel-roll-button-icon.left {
    transform: translate(-50%, -50%) rotate(-180deg);
}

.carousel-roll-button-icon.right {
    transform: translate(-50%, -50%) rotate(0deg);
}

.carousel-indicator-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.carousel-to-slide-button {
    position: relative;
    width: 0.8rem;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.carousel-switch-group-button {
    position: relative;
    width: 1.3rem;
    aspect-ratio: 1;
    margin: 0 1rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
}

.carousel-switch-group-button span {
    width: 1rem;
    aspect-ratio: 1;
    transform: translateY(-1px);
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1rem;
}

.carousel-index {
    font-size: 0.8rem;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 10px;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.5);
    user-select: none;
    transition: all 0.3s ease;
}

.carousel-index:hover {
    background-color: rgba(255, 255, 255, 1);
    color: rgba(0, 0, 0, 1);
}
    `


    return (
        <div className="code-snippets-container">
            <Snippet title="Installation" snippet={installationSnippet} language="bash" delay={500} />
            <Snippet title="Usage" snippet={usageSnippet} language="jsx" delay={1000} />
            <Snippet title="Code" snippet={CompleteCodeSnippetTS} language="jsx" delay={1500} toggleSnippet={CompleteCodeSnippetJS}/>
            <Snippet title="CSS" snippet={cssSnippet} language="css" delay={1800} />
        </div>
    )
}

export default memo(Snippets);