// import { motion } from "motion/react";
import { useState } from "react";
import Remark from "../../sharedComponent/remark/Remark";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Snippet from "../../sharedComponent/snippets/Snippet";
// import CopyButton from "./CopyButton";
import useMediaTypeContext from '../../../../../../context/useMediaTypeContext';

const IconContentTemplate = ({
    icon = 'icon', 
    name = 'Icon Name', 
    code = 'code', 
    usage = 'usage', 
    maxSize = 256
}: {
    icon?: React.ReactNode, 
    name?: string, 
    code?: string, 
    usage?: string, 
    maxSize?: number
}) => {
    const mediaType = useMediaTypeContext();

    const [parentStyles, setParentStyles] = useState({
        color: '#ffffff',
        fontSize: maxSize * 0.5,
    });
    
    const getUppercaseFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const createIconName = (name: string) => {
        // const uppercased = getUppercaseFirstLetter(name);
        const splitted = name.split('-');
        return splitted.map((word: string, index: number) => (
            <span key={index}>
                {getUppercaseFirstLetter(word)}
            </span>
        ));
    }

    return (
        <div className='static-content-template'>
            <div className='static-content-template-name' style={{fontSize: mediaType === 'mobile' ? '2.6rem' : '3.2rem'}}>
                {createIconName(name)}
            </div>
            <div className='static-content-template-icon' style={{color: parentStyles.color, fontSize: parentStyles.fontSize}}>
                {icon}
            </div>
            <Remark>
                Icon's color and size will inherit from the parent element.
            </Remark>
            <div className="static-content-template-parent-styles">
                {/* <div className="parent-styles-title">Styles</div> */}
                <label className="parent-styles-item-label">
                    <span className="parent-styles-item-label-text">Color：</span>
                    <ValueInput 
                        demoProps={parentStyles}
                        propName="color"
                        onChange={setParentStyles}
                        inputType="color"
                    />
                </label>
                <label className="parent-styles-item-label">
                    <span className="parent-styles-item-label-text">Size：</span>
                    <ValueInput 
                        demoProps={parentStyles}
                        propName="fontSize"
                        onChange={setParentStyles}
                        inputType="slider"
                        step={1}
                        min={8}
                        max={maxSize}
                    />
                    <span>px</span>
                </label>
            </div>
            <div className='static-content-template-code'>
                <Snippet 
                    title="Usage"
                    snippet={usage}
                    language="jsx"
                    type="modal"
                    theme="github-light-default"
                    delay={300}
                />
                <Snippet 
                    title="Code"
                    snippet={code}
                    language="jsx"
                    type="modal"
                    // showTitle={false}
                    theme="github-light-default"
                    delay={500}
                    // showCopyButton={false}
                />
            </div>
            {/* <div className="static-content-template-copy-button-container">
                <CopyButton data={code} />
            </div> */}
        </div>
    )
}

export default IconContentTemplate;