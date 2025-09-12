import { useState } from "react";
// import DecodeTextDemo from "./DecodeTextDemo";
import ReloadBtn from "../../sharedComponent/buttons/reloadButton/ReloadBtn";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Props from "../../sharedComponent/table/Props";
import Snippets from "./Snippets";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
import Remark from "../../sharedComponent/remark/Remark";
import TypeTextDemo from "./TypeTextDemo";


interface DemoProps {
    text?: string;
    typing?: boolean;
    caretColor?: string;
    blinkDuration?: number;
    triggerType?: 'inView' | 'manual' | 'auto';
    triggerMargin?: number;
    once?: boolean;
    amount?: number;
    delay?: number;
    interval?: number;
    onTypingComplete?: () => void;
    onDeletingComplete?: () => void;
}


const TypeTextContent = () => {

    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        text: 'Type Text Animation',
        typing: true,
        caretColor:'#ffffff',
        blinkDuration: 1,
        triggerType: 'inView',
        triggerMargin: -100,
        once: false,
        amount: 1,
        delay: 0,
        interval: 90,
        onTypingComplete: () => {},
        onDeletingComplete: () => {},
    });

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
    }
    

    const TriggerTypeDesc = () => {
        return (
            <div className="table-desc-container">
                <div className="table-desc-item"><div className="table-desc-item-title">InView:</div> Type when in view.</div>
                <div className="table-desc-item"><div className="table-desc-item-title">Manual:</div> Type/Delete when typing is true/false.</div>
                <div className="table-desc-item"><div className="table-desc-item-title">Auto:</div> Type immediately.</div>
            </div>
        )
    }

    const tableHeaders = ['Prop', 'Type','Value', 'Default', 'Description'];
    const tableData = [
        [
            'text', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='text' onChange={setDemoProps} inputType='string' />,
            'Type Text Animation',
            'The text to type.'
        ],
        [
            'typing', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='typing' onChange={setDemoProps} inputType='boolean'/>,
            'true',
            'Whether to type the text.'
        ],
        [
            'caretColor', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='caretColor' onChange={setDemoProps} inputType='color' />,
            '\'#ffffff\'',
            'The color of the caret.'
        ],
        [
            'blinkDuration', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='blinkDuration' onChange={setDemoProps} inputType='number' step={0.1} min={0} />,
            '1',
            'The duration of the blink animation.'
        ],
        [
            'triggerType', 
            '\'inView\' | \'manual\' | \'auto\'', 
            <ValueInput  demoProps={demoProps} propName='triggerType' onChange={setDemoProps} inputType='switch' options={['inView', 'manual', 'auto']} />,
            'inView',
            <TriggerTypeDesc />
        ],
        [
            'triggerMargin', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='triggerMargin' onChange={setDemoProps} inputType='number' step={1} />,
            '-100',
            'The margin between viewport and detection area (px), only works when triggerType is inView.'
        ],
        [
            'once', 
            'boolean', 
            <ValueInput  demoProps={demoProps} propName='once' onChange={setDemoProps} inputType='boolean' />,
            'false',
            'If true, component will only type once on first sight, only works when triggerType is inView.'
        ],
        [
            'amount', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='amount' onChange={setDemoProps} inputType='number' step={0.1} min={0} max={1} />,
            '1',
            'The amount of the element should enter the viewport to be considered as in view, only works when triggerType is inView.'
        ],
        [
            'delay', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='delay' onChange={setDemoProps} inputType='number' step={100} min={0} />,
            '0',
            'The delay before every type/delete starts. (in milliseconds)'
        ],
        [
            'interval', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='interval' onChange={setDemoProps} inputType='number' step={1} min={0} />,
            '90',
            'The interval between each character types/deletes. (in milliseconds) The smaller the value, the faster the animation.'
        ],
        [
            'onTypingComplete', 
            'function', 
            'undefined',
            'undefined',
            'The function to be called when type animation completes.'
        ],
        [
            'onDeletingComplete', 
            'function', 
            'undefined',
            'undefined',
            'The function to be called when delete animation completes.'
        ],
        [
            'className', 
            'string', 
            '\'\'',
            '\'\'',
            'The class name of this component (p tag), this will override the default style if they have same properties.'
        ],
    ];

    return (
        <>
            <section className="documents-page-component-section">
                <div 
                    className='documents-page-component-demo'
                    // style={{backgroundColor: 'var(--basic-purple)'}}
                >
                    <TypeTextDemo 
                        key={reloadKey}
                        {...demoProps}
                    />
                    <ReloadBtn handler={handleReload}
                        color="rgb(242, 251, 255)"
                    />
                </div>
                <Remark>
                    This component does not include styles, use className prop to customize your own style.
                </Remark>
            </section>
            <Props headers={tableHeaders} data={tableData} />
            <Snippets />
            <ComponentFooter />
        </>
    )
}

export default TypeTextContent;