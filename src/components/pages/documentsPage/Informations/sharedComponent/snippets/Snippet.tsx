import ShikiHighlighter from "react-shiki/web";
import CopyButton from "../buttons/copyButton/CopyButton";
import ToTopButton from "../../../../../shared/components/buttons/toTopButton/ToTopButton";
import { useState, useEffect, useMemo, useRef, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import useMediaTypeContext from '../../../../../../context/useMediaTypeContext';

const Snippet = ({
    title, 
    snippet, 
    language,
    delay = 0,
    id = '',
}: {
    title: string, 
    snippet: string, 
    language: string,
    delay?: number,
    id?: string,
}) => {
    const [shouldRender, setShouldRender] = useState(false);
    const [showToTop, setShowToTop] = useState(false);
    const codeSnippetRef = useRef<HTMLDivElement>(null);
    
    const mediaType = useMediaTypeContext();
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    const getHeight = () => {
        const lines = snippet.split('\n');
        return `${lines.length*16 + (lines.length-1)*4.5 + 40}px`;
    }

    const getTextPosition = useMemo(() => {
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


    return (
        <section className="documents-page-component-section" id={id}>
            <div className="documents-page-component-section-title">
                {title}
            </div>
            <div 
                className="code-snippet-wrapper"
                style={{
                    height: getHeight(),
                    maxWidth: mediaType === 'pc' ? '70dvw' : '90dvw',
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
                        ) : (
                            <motion.div
                                key="placeholder"
                                style={{
                                    width: '100%',
                                    height: getHeight(),
                                    display: 'flex',
                                    alignItems: getTextPosition.alignItems,
                                    justifyContent: 'center',
                                    backgroundColor: '#1a1b26',
                                    color: '#a9b1d6',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.9rem',
                                    paddingTop: getTextPosition.paddingTop,
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
                    <CopyButton data={snippet} />
                    {showToTop && (
                        <ToTopButton scrollRef={codeSnippetRef} targetType="component" initialColor="rgb(172, 175, 177)" hoverColor="rgb(242, 251, 255)" />
                    )}
                </div>
            </div>
        </section>
    )
}

export default memo(Snippet);