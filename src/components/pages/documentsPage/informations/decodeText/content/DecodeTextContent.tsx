import { useState } from "react";
import DecodeTextDemo from "./DecodeTextDemo";
import ReloadBtn from "../../sharedComponent/buttons/reloadButton/ReloadBtn";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Props from "../../sharedComponent/table/Props";
import Snippets from "./Snippets";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
import Remark from "../../sharedComponent/remark/Remark";


interface DemoProps {
    text?: string;
    triggerType?: 'inView' | 'manual' | 'auto';
    decode?: boolean;
    triggerMargin?: number;
    once?: boolean;
    amount?: number;
    delay?: number;
    interval?: number;
    randomChars?: string;
    onDecodeComplete?: () => void;
    onEncodeComplete?: () => void;
}

const defaultRandomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

const DecodeTextContent = () => {

    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        text: 'Decode Text Animation',
        triggerType: 'inView',
        decode: true,
        triggerMargin: -100,
        once: false,
        amount: 1,
        delay: 0,
        interval: 60,
        randomChars: defaultRandomChars,
        onDecodeComplete: () => {},
        onEncodeComplete: () => {},
    });

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
    }
    

    const TriggerTypeDesc = () => {
        return (
            <div className="table-desc-container">
                <div className="table-desc-item"><div className="table-desc-item-title">InView:</div> Decode when in view.</div>
                <div className="table-desc-item"><div className="table-desc-item-title">Manual:</div> Decode/Encode when decode is true/false.</div>
                <div className="table-desc-item"><div className="table-desc-item-title">Auto:</div> Decode immediately.</div>
            </div>
        )
    }

    const tableHeaders = ['Prop', 'Type','Value', 'Default', 'Description'];
    const tableData = [
        [
            'text', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='text' onChange={setDemoProps} inputType='string' />,
            'Decode Text Animation',
            'The text to decode.'
        ],
        [
            'triggerType', 
            '\'inView\' | \'manual\' | \'auto\'', 
            <ValueInput  demoProps={demoProps} propName='triggerType' onChange={setDemoProps} inputType='switch' options={['inView', 'manual', 'auto']} />,
            'inView',
            <TriggerTypeDesc />
        ],
        [
            'decode', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='decode' onChange={setDemoProps} inputType='boolean'/>,
            'true',
            'Whether to decode the text.'
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
            'If true, component will only decode once on first sight, only works when triggerType is inView.'
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
            'The delay before every decode/encode starts. (in milliseconds)'
        ],
        [
            'interval', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='interval' onChange={setDemoProps} inputType='number' step={1} min={0} />,
            '60',
            'The interval between each character decodes/encodes. (in milliseconds) The smaller the value, the faster the animation.'
        ],
        [
            'randomChars', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='randomChars' onChange={setDemoProps} inputType='string' />,
            <>
                <div>{'ABCDEFGHIJKLMNOPQRS'}</div>
                <div>{'TUVWXYZabcdefghijklmnop'}</div>
                <div>{'qrstuvwxyz0123456789'}</div>
                <div>{'!@#$%^&*()_+-=[]{}|;:,.<>?'}</div>
            </>,
            'The characters to use for the random text.'
        ],
        [
            'onDecodeComplete', 
            'function', 
            'undefined',
            'undefined',
            'The function to be called when decode completes.'
        ],
        [
            'onEncodeComplete', 
            'function', 
            'undefined',
            'undefined',
            'The function to be called when encode completes.'
        ],
        [
            'className', 
            'string', 
            '\'\'',
            '\'\'',
            'The class name of this component (p tag), cutomize your own style.'
        ],
    ];

    return (
        <>
            <section className="documents-page-component-section">
                <div 
                    className='documents-page-component-demo'
                    // style={{backgroundColor: 'var(--basic-purple)'}}
                >
                    <DecodeTextDemo 
                        key={reloadKey} 
                        text={demoProps.text || 'Decode Text'}
                        triggerType={demoProps.triggerType}
                        decode={demoProps.decode}
                        triggerMargin={demoProps.triggerMargin}
                        once={demoProps.once}
                        amount={demoProps.amount}
                        delay={demoProps.delay}
                        interval={demoProps.interval}
                        randomChars={demoProps.randomChars || defaultRandomChars}
                        className="decode-text-demo"
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

export default DecodeTextContent;