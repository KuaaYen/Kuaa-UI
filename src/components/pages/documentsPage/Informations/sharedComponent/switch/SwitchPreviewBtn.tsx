import PreviewAnimatedIcon from "./PreviewAnimatedIcon";
import PreviewClosedIcon from "./PreviewClosedIcon";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

const SwitchPreviewBtn = ({ switchState, setSwitchState }: { switchState: 'preview' | 'code', setSwitchState: (state: 'preview' | 'code') => void }) => {

    const [isHover, setIsHover] = useState(false);


    return (
        <button 
            className={`documents-page-component-switch-button ${switchState === 'preview' ? 'active' : ''}`}
            onClick={() => setSwitchState('preview')}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >

            <AnimatePresence mode="sync">
                {switchState === 'preview' ? (
                    <PreviewAnimatedIcon />
                ) : (
                    <PreviewClosedIcon isHover={isHover} />
                )}
            </AnimatePresence>
            preview
        </button>
    );
};

export default SwitchPreviewBtn;