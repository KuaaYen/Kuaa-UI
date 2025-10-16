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
}: {
    title: string, 
    snippet: string, 
    toggleSnippet?: string,
    language: string,
    delay?: number,
    id?: string,
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

    const getHeight = ({targetSnippet}: {targetSnippet: string}) => {
        const lines = targetSnippet.split('\n');
        return `${lines.length*16 + (lines.length-1)*4.5 + 40}px`;
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
                        theme="tokyo-night"
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
                        theme="tokyo-night"
                        showLineNumbers={true}
                        startingLineNumber={0}
                        style={{
                            boxSizing: 'border-box',
                            width: '100%',
                            margin: '0',
                            padding: '0',
                        }}
                    >
                        {snippet}
                    </ShikiHighlighter>
                </motion.div>
            )
        }
    }

    return (
        <section className="documents-page-component-section" id={id}>
            <div className="documents-page-component-section-title">
                {title}
                {toggleSnippet && (
                    <ToggleSwitch isChecked={isChecked} setIsChecked={setIsChecked} />
                )}
            </div>
            <div 
                className="code-snippet-wrapper"
                style={{
                    height: getHeight({targetSnippet: snippet}),
                    maxWidth: mediaType === 'pc' ? '70dvw' : '90dvw',
                    maxHeight: '70dvh',
                }}
            >
                <div className="code-snippet" ref={codeSnippetRef}>
                    <AnimatePresence mode="wait">
                        {shouldRender ? (
                            <motion.div
                                key="content"
                                style={{
                                    width: '100%',
                                }}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                            >
                                    {createShikiContent()}
                                {/* <ShikiHighlighter
                                    showLanguage={false}
                                    language={language}
                                    theme="tokyo-night"
                                    showLineNumbers={true}
                                    startingLineNumber={0}
                                    style={{
                                        boxSizing: 'border-box',
                                        width: '100%',
                                        margin: '0',
                                        padding: '0',
                                    }}
                                >
                                    {snippet}
                                </ShikiHighlighter> */}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="placeholder"
                                style={{
                                    width: '100%',
                                    height: getHeight({targetSnippet: snippet}),
                                    display: 'flex',
                                    alignItems: getTextPositionDefault.alignItems,
                                    justifyContent: 'center',
                                    backgroundColor: '#1a1b26',
                                    color: '#a9b1d6',
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
                    <CopyButton data={isChecked && toggleSnippet ? toggleSnippet : snippet} />
                    {showToTop && (
                        <ToTopButton scrollRef={codeSnippetRef} targetType="component" initialColor="rgb(172, 175, 177)" hoverColor="rgb(242, 251, 255)" />
                    )}
                </div>
            </div>
        </section>
    )
}

export default memo(Snippet);