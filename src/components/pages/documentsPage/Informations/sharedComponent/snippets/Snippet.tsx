import ShikiHighlighter from "react-shiki/web";
import CopyButton from "../buttons/copyButton/CopyButton";
import ToTopButton from "../../../../../shared/components/buttons/toTopButton/ToTopButton";
import { useState, useEffect, useMemo, useRef, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import useMediaTypeContext from '../../../../../../context/useMediaTypeContext';
import ToggleSwitch from "../../../../../shared/components/switch/ToggleSwitch";

const Snippet = ({
    title, 
    snippet,
    toggleSnippet,
    language,
    delay = 0,
    id = '',
    showTitle = true,
    showCopyButton = true,
    type = 'default',
    theme = 'tokyo-night',
}: {
    title: string, 
    snippet: string, 
    toggleSnippet?: string,
    language: string,
    delay?: number,
    id?: string,
    showTitle?: boolean,
    showCopyButton?: boolean,
    type?: 'default' | 'modal',
    theme?: string,
}) => {
    const [shouldRender, setShouldRender] = useState(false);
    const [showToTop, setShowToTop] = useState(false);
    const codeSnippetRef = useRef<HTMLDivElement>(null);
    const [isChecked, setIsChecked] = useState(false);
    
    const mediaType = useMediaTypeContext();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    const getHeight = ({targetSnippet, adjustHeight = 0}: {targetSnippet: string, adjustHeight?: number}) => {
        const lines = targetSnippet.split('\n');
        return `${lines.length*16 + (lines.length-1)*4.5 + 40 + adjustHeight}px`;
    }

    const getTextPositionDefault = useMemo(() => {
        const lines = snippet.split('\n');
        const calculatedHeight = lines.length*16 + (lines.length-1)*4.5 + 40;
        const maxHeight = window.innerHeight * 0.8; // 80dvh 轉換為 px
        
        if (calculatedHeight <= maxHeight) {
            return {
                alignItems: 'center',
                paddingTop: '0px'
            };
        } else {
            const visibleCenterPosition = maxHeight / 2;

            setShowToTop(true);

            return {
                alignItems: 'flex-start',
                paddingTop: `${visibleCenterPosition - 12}px` // 12px 是文字高度的一半
            };
        }
    }, [snippet]);

    const getWrapperStyle = () => {
        if (type === 'modal') {
            return {
                height: getHeight({targetSnippet: snippet, adjustHeight: 15}),
                width: '100%',
                maxHeight: '70dvh',
            };
        }
        return {
            height: getHeight({targetSnippet: snippet, adjustHeight: 15}),
            maxWidth: mediaType === 'pc' ? '70dvw' : '90dvw',
            maxHeight: '70dvh',
        };
    }

    const createShikiContent = () => {
        if (isChecked && toggleSnippet) {
            return (
                <motion.div
                    key="toggle-snippet"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                >
                    <ShikiHighlighter
                        showLanguage={false}
                        language={language}
                        theme={theme}
                        showLineNumbers={true}
                        startingLineNumber={0}
                        style={{
                            boxSizing: 'border-box',
                            width: '100%',
                            margin: '0',
                            padding: '0',
                        }}
                    >
                        {toggleSnippet}
                    </ShikiHighlighter>
                </motion.div>
            )
        } else {
            return (
                <motion.div
                    key="default-snippet"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.5, ease: 'easeInOut'}}
                >
                    <ShikiHighlighter
                        showLanguage={false}
                        language={language}
                        theme={theme}
                        showLineNumbers={true}
                        startingLineNumber={0}
                        style={{
                            boxSizing: 'border-box',
                            width: '100%',
                            margin: '0',
                            padding: '0',
                            // backgroundColor: 'red',
                        }}
                    >
                        {snippet}
                    </ShikiHighlighter>
                </motion.div>
            )
        }
    }

    const getTitleStyle = () => {
        if (type === 'modal') {
            return {
                fontSize: mediaType === 'mobile' ? '1.6rem' : '1.8rem',
            };
        }
        return {
            fontSize: '2rem',
        };
    }

    return (
        <section className="documents-page-component-section" id={id}>
            {showTitle && (
                <div className="documents-page-component-section-title" style={getTitleStyle()}>
                    {title}
                    {toggleSnippet && (
                        <ToggleSwitch isChecked={isChecked} setIsChecked={setIsChecked} />
                    )}
                </div>
            )}
            <div 
                className="code-snippet-wrapper"
                style={{
                    ...getWrapperStyle(),
                }}
            >
                <div 
                    className="code-snippet" 
                    ref={codeSnippetRef} 
                    style={{backgroundColor: type === 'modal' ? '#ffffff' : 'var(--snippet-bg)'}}
                >
                    <AnimatePresence mode="wait">
                        {shouldRender ? (
                            <motion.div
                                key="content"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                style={{
                                    height: getHeight({targetSnippet: snippet}),
                                    // backgroundColor: '#FDF6E3',
                                    // padding: 0,
                                    // margin: 0,
                                    // display: 'flex',
                                    // alignItems: 'flex-start',
                                    // justifyContent: 'flex-start',
                                }}
                            >
                                    {createShikiContent()}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="placeholder"
                                style={{
                                    width: '100%',
                                    height: getHeight({targetSnippet: snippet, adjustHeight: 15}),
                                    display: 'flex',
                                    alignItems: getTextPositionDefault.alignItems,
                                    justifyContent: 'center',
                                    backgroundColor: type === 'modal' ? '#ffffff' : '#1a1b26',
                                    color: type === 'modal' ? '#1a1b26' : '#a9b1d6',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.9rem',
                                    paddingTop: getTextPositionDefault.paddingTop,
                                }}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                            >
                                Casting Magic...
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div className="code-snippet-buttons-container">
                    {showCopyButton && (
                        <CopyButton 
                            data={isChecked && toggleSnippet ? toggleSnippet : snippet}
                            strokeColor={type === 'modal' ? '#ffffff' : '#1A1B26'}
                            fillInitialColor={type === 'modal' ? 'rgb(121, 124, 151)' : 'rgb(172, 175, 177)'}
                            fillActiveColor={type === 'modal' ? '#3D405B' : 'rgb(242, 251, 255)'}
                            borderColor={type === 'modal' ? 'rgb(121, 124, 151)' : 'rgb(172, 175, 177)'}
                            // strokeColor={type === 'modal' ? '#ffffff' : '#1A1B26'}
                            // fillInitialColor={type === 'modal' ? 'rgb(210, 213, 216)' : 'rgb(172, 175, 177)'}
                            // fillActiveColor={type === 'modal' ? 'rgb(172, 175, 177)' : 'rgb(242, 251, 255)'}
                            // borderColor={type === 'modal' ? 'rgb(210, 213, 216)' : 'rgb(172, 175, 177)'}
                        />
                    )}
                    {showToTop && (
                        <ToTopButton scrollRef={codeSnippetRef} targetType="component" initialColor="rgb(172, 175, 177)" hoverColor="rgb(242, 251, 255)" />
                    )}
                </div>
            </div>
        </section>
    )
}

export default memo(Snippet);