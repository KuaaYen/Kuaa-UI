import { useState, useRef, ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { motion, AnimatePresence, useAnimationFrame} from 'motion/react';

interface CarouselDemoProps {
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
            key: `item-${itemIndex}-${time}`,
            display: true,
        };
    }

    const createEmptyItem = (): VisibleItem => ({
        content: null,
        display: false,
        key: `empty-${new Date().getTime()}`,
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
            className={`carousel-demo-roll-button ${direction}`}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
        >
            <div 
                className={`carousel-demo-roll-button-icon ${direction}`}
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

const CarouselDemo = ({ 
    items,
    dotColor = '#E07A5F',
    autoPlay = true,
    autoPlayInterval = 3000,
    autoPlayRest = 2000,
    rollInterval = 500,
    rollDuration = 1000,
    itemHeight = 280,
}: CarouselDemoProps) => {
    
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


    // 計算當前項目應該在哪一組
    const getGroupForIndex = (index: number) => Math.floor(index / groupSize);

    // 更新當前組（當輪播切換時自動更新）
    const updateCurrentGroup = (newIndex: number) => {
        const newGroup = getGroupForIndex(newIndex);
        if (newGroup !== currentGroup) {
            setCurrentGroup(newGroup);
        }
    };

    // 獲取當前組應該顯示的指示器範圍
    const getCurrentGroupIndicators = () => {
        const startIndex = currentGroup * groupSize;
        const endIndex = Math.min(startIndex + groupSize, items.length);
        return { startIndex, endIndex };
    };

    const switchToGroup = (direction: 'next' | 'previous') => {
        let newGroupIndex;
        
        if (direction === 'next') {
            // 如果是最後一組，回到第一組；否則下一組
            newGroupIndex = currentGroup === totalGroups - 1 ? 0 : currentGroup + 1;
        } else {
            // 如果是第一組，跳到最後一組；否則上一組
            newGroupIndex = currentGroup === 0 ? totalGroups - 1 : currentGroup - 1;
        }
        
        setCurrentGroup(newGroupIndex);
        // 切換到該組的第一個項目
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
                                className='carousel-demo-item'
                                style={{height: itemHeight}}
                                variants={itemVariants}
                                initial={rollDirection === 'next' ? 'overflowRight' : 'overflowLeft'}
                                animate={getPosition(index)}
                                exit={rollDirection === 'next' ? 'overflowLeft' : 'overflowRight'}
                                transition={{ 
                                    type: 'spring', bounce: 0, duration: rollDuration / 1000,
                                    opacity: {
                                        type: 'spring', bounce: 0, duration: rollDuration / 2000
                                    }
                                }}
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
                        className='carousel-demo-switch-group-button'
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
        
        // 簡化的組切換判斷
        if (items.length > groupSize) {
            const currentItemGroup = getGroupForIndex(currentIndex);
            const newItemGroup = getGroupForIndex(newIndex);
            // debugger;
            // 只要組不同就切換，移除複雜的邊界判斷
            if (newItemGroup !== currentItemGroup) {
                setCurrentGroup(newItemGroup);
            }
        }

        flushSync(() => {
            setRollDirection(direction);
            setCurrentIndex((prev) => (getNextIndex(prev)));
        })

        // 當只有兩個項目時的特殊處理
        if(items.length === 2) {
            setItemsInView((prev) => {
                const newItems = [prev[0], prev[2], prev[1]];
                return newItems;
            })
            lastRollTime.current = currentTime;
            return;
        }

        // 計算新項目的索引
        const newItemIndex = direction === 'next' 
            ? getNextIndex(getNextIndex(currentIndex))  // 向右：取下下個
            : getNextIndex(getNextIndex(currentIndex)); // 向左：取前前個

        const newItem: VisibleItem = {
            content: items[newItemIndex],
            key: `item-${newItemIndex}-${new Date().getTime()}`,
            display: true,
        };

        // 更新視圖中的項目
        setItemsInView((prev) => {
            const newItems = [...prev];
            if(direction === 'next') {
                newItems.shift();     // 移除左邊
                newItems.push(newItem); // 添加到右邊
            } else {
                newItems.pop();        // 移除右邊
                newItems.unshift(newItem); // 添加到左邊
            }
            return newItems;
        })
        
        lastRollTime.current = currentTime;
        lastAutoPlayTime.current = currentTime + autoPlayRest;
    };

    const goToSlide = (targetIndex: number, forceJump: boolean = false) => {
        // 確保索引在有效範圍內
        if (targetIndex < 0 || targetIndex >= items.length) return;
        
        // 1. 當新的index和currentIndex相同時，不做任何動作
        if (targetIndex === currentIndex) return;

        
        updateCurrentGroup(targetIndex);
        
        // 2. 計算環形陣列中的最短距離和直觀方向
        const getShortestDistance = (from: number, to: number, arrayLength: number) => {
            const directDistance = Math.abs(to - from);
            const wrapAroundDistance = arrayLength - directDistance;
            return Math.min(directDistance, wrapAroundDistance);
        };
        
        const getOptimalDirection = (from: number, to: number) => {
            // 基於直觀方向：目標索引大就向右，小就向左
            return to > from ? 'next' : 'previous';
        };

        const shortestDistance = getShortestDistance(currentIndex, targetIndex, items.length);
        const optimalDirection = getOptimalDirection(currentIndex, targetIndex);
        
        // 3. 當距離為1時，直接呼叫navigateCarousel
        if (shortestDistance === 1 && !forceJump) {
            navigateCarousel(optimalDirection);
            return;
        }
        
        // 4. 當距離大於1時，直接重建itemsInView並設置方向
        const newItemsInView = getVisibleItems(items, targetIndex);
        
        flushSync(() => {
            setRollDirection(optimalDirection);
            setCurrentIndex(targetIndex);
        });
        setItemsInView(newItemsInView);
    };


    return (
        <article className='carousel-demo-container'>
            <div className='carousel-demo-main-area' style={{height: itemHeight+40}}>
                {createCarouselItem()}
                <RollButton direction='left' handler={() => navigateCarousel('previous')} />
                <RollButton direction='right' handler={() => navigateCarousel('next')} />
            </div>

            <div className='carousel-demo-indicator-container'>
                <SwitchGroupButton direction='previous' />
                <AnimatePresence mode='sync'>
                    {(() => {
                        const { startIndex, endIndex } = getCurrentGroupIndicators();
                        return Array.from({ length: endIndex - startIndex   }, (_, i) => {
                            const itemIndex = startIndex + i;
                            return (
                                <motion.button
                                    key={`position-${i}`}
                                    onClick={() => goToSlide(itemIndex)}
                                    className='carousel-demo-to-slide-button'
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

            <div className='carousel-demo-index'>
                {currentIndex + 1} of {items.length}
            </div>
        </article>
    );
};

export default CarouselDemo;