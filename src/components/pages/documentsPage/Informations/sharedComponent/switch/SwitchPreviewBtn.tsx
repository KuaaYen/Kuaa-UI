import PreviewAnimatedIcon from "./PreviewAnimatedIcon";
import PreviewClosedIcon from "./PreviewClosedIcon";
import { AnimatePresence } from "motion/react";

const SwitchPreviewBtn = ({ switchState, setSwitchState }: { switchState: 'preview' | 'code', setSwitchState: (state: 'preview' | 'code') => void }) => {


    return (
        <button 
            className={`documents-page-component-switch-button ${switchState === 'preview' ? 'active' : ''}`}
            onClick={() => setSwitchState('preview')}
        >

            <AnimatePresence mode="sync">
                {switchState === 'preview' ? (
                    <PreviewAnimatedIcon />
                ) : (
                    <PreviewClosedIcon />
                )}
            </AnimatePresence>
            preview
        </button>
    );
};

export default SwitchPreviewBtn;