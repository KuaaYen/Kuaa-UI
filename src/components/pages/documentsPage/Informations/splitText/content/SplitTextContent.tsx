import { useState, useEffect } from "react";
import SplitTextDemo from "./SplitTextDemo";
import ReloadBtn from "../../sharedComponent/buttons/reloadButton/ReloadBtn";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Props from "../../sharedComponent/table/Props";
// import Usage from "./Usage";
import Snippets from "./Snippets";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";

interface DemoProps {
    text: string;
    splitType: 'words' | 'chars';
    delay: number;
    stagger: number;
    startAnimate: boolean;
    triggerType: 'inView' | 'manual' | 'auto';
    triggerMargin: number;
    once: boolean;
    amount: number;
}

const SplitTextContent = () => {
    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        text: 'Check this out!',
        splitType: 'chars',
        delay: 0,
        stagger: 0.05,
        startAnimate: false,
        triggerType: 'inView',
        triggerMargin: -100,
        once: false,
        amount: 1,
    });

    useEffect(() => {
        setReloadKey(prev => prev + 1);
    },[demoProps.text, demoProps.splitType, demoProps.triggerType, demoProps.triggerMargin])

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
    }

    const TriggerTypeDesc = () => {
        return (
            <div className="table-desc-container">
                <div className="table-desc-item"><div className="table-desc-item-title">InView:</div> Animate when in view.</div>
                <div className="table-desc-item"><div className="table-desc-item-title">Manual:</div> Animate when startAnimate is true.</div>
                <div className="table-desc-item"><div className="table-desc-item-title">Auto:</div> Animate immediately.</div>
            </div>
        )
    }


    const tableHeaders = ['Prop', 'Type','Value', 'Default', 'Description'];
    const tableData = [
        [
            'text', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='text' onChange={setDemoProps} inputType='string' />,
            '\'\'',
            'The text to split'
        ],
        [
            'splitType',
            '\'words\' | \'chars\'',
            <ValueInput  demoProps={demoProps} propName='splitType' onChange={setDemoProps} inputType='switch' options={['chars', 'words']} />,
            '\'chars\'',
            'Split by words or characters, make sure there are spaces between words.'
        ],
        [
            'delay',
            'number',
            <ValueInput  demoProps={demoProps} propName='delay' onChange={setDemoProps} inputType='number' step={0.1} min={0}/>,
            '0',
            'The delay before the animation starts.'
        ],
        [
            'stagger',
            'number',
            <ValueInput  demoProps={demoProps} propName='stagger' onChange={setDemoProps} inputType='number' step={0.01} min={0}/>,
            '0.05',
            'The stagger delay between each word or character.'
        ],
        [
            'triggerType',
            '\'inView\' | \'manual\' | \'auto\'',
            <ValueInput  demoProps={demoProps} propName='triggerType' onChange={setDemoProps} inputType='switch' options={['inView', 'manual', 'auto']} />,
            '\'auto\'',
            <TriggerTypeDesc />
        ],
        [
            'startAnimate',
            'boolean',
            <ValueInput  demoProps={demoProps} propName='startAnimate' onChange={setDemoProps} inputType='boolean' />,
            'false',
            'Whether to start the animation, only works when triggerType is manual.'
        ],
        [
            'triggerMargin',
            'number',
            <ValueInput  demoProps={demoProps} propName='triggerMargin' onChange={setDemoProps} inputType='number' step={1}/>,
            '0',
            'The margin between viewport and detection area, only works when triggerType is inView.'
        ],
        [
            'once',
            'boolean',
            <ValueInput  demoProps={demoProps} propName='once' onChange={setDemoProps} inputType='boolean' />,
            'false',
            'If true, the animation will only play once on first sight, only works when triggerType is inView.'
        ],
        [
            'amount',
            'number',
            <ValueInput  demoProps={demoProps} propName='amount' onChange={setDemoProps} inputType='number' step={0.1} min={0} max={1}/>,
            '1',
            'The amount of the element should enter the viewport to be considered as in view, only works when triggerType is inView.'
        ],
        [
            'initial',
            'object',
            `{opacity:0, y:'1em'}`,
            `{opacity:0, y:'1em'}`,
            'The initial state of the animation, this should follow the rules of motion/react animation props.'
        ],
        [
            'animate',
            'object',
            `{opacity:1, y:'0em'}`,
            `{opacity:1, y:'0em'}`,
            'The final state of the animation, this should follow the rules of motion/react animation props.'
        ],
        [
            'onComplete',
            'function',
            'undefined',
            'undefined',
            'The function to be called when the animation is complete.'
        ],
    ];

    return (
        <>
            <section className="documents-page-component-section">
                {/* <div className="documents-page-component-section-title">
                    Preview
                </div> */}
                <div className='documents-page-component-demo'>
                    <SplitTextDemo 
                        key={reloadKey} 
                        text={demoProps.text || 'Check this out!'} 
                        splitType={demoProps.splitType} 
                        startAnimate={demoProps.startAnimate} 
                        triggerType={demoProps.triggerType}
                        delay={demoProps.delay}
                        stagger={demoProps.stagger}
                        once={demoProps.once}
                        amount={demoProps.amount}
                        triggerMargin={demoProps.triggerMargin}
                    />
                    <ReloadBtn handler={handleReload} />
                </div>
            </section>
            <Props headers={tableHeaders} data={tableData} />
            {/* <Usage /> */}
            <Snippets />
            <ComponentFooter />
        </>
    )
}

export default SplitTextContent;