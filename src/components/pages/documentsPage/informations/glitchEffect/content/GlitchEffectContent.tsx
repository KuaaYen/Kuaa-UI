import { useState } from "react";
import GlitchEffectDemo from "./GlitchEffectDemo";
import ReloadBtn from "../../sharedComponent/buttons/reloadButton/ReloadBtn";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Props from "../../sharedComponent/table/Props";
import Snippets from "./Snippets";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
import Remark from "../../sharedComponent/remark/Remark";


interface DemoProps {
    triggerType?: 'always' | 'hover' | 'manual';
    startAnimate?: boolean;
    children?: React.ReactNode;
    glitchDuration?: number;
    glitchRest?: number;
    maxFuzzIntensity?: number;
    fuzzInterval?: number;
}

const GlitchEffectContent = () => {

    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        triggerType: 'always',
        startAnimate: true,
        children: 'Glitch Effect',
        glitchDuration: 1000,
        glitchRest: 2000,
        maxFuzzIntensity: 30,
        fuzzInterval: 125,
    });

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
    }
    const TriggerTypeDesc = () => {
        return (
            <div className="table-desc-container">
                <div className="table-desc-item"><div className="table-desc-item-title">Hover:</div> Animate when hover.</div>
                <div className="table-desc-item"><div className="table-desc-item-title">Manual:</div> Animate when startAnimate is true.</div>
                <div className="table-desc-item"><div className="table-desc-item-title">Always:</div> Animate always.</div>
            </div>
        )
    }

    const tableHeaders = ['Prop', 'Type','Value', 'Default', 'Description'];
    const tableData = [
        [
            'triggerType', 
            '\'always\' | \'hover\' | \'manual\'', 
            <ValueInput  demoProps={demoProps} propName='triggerType' onChange={setDemoProps} inputType='switch' options={['always', 'hover', 'manual', ]} />,
            '\'always\'',
            <TriggerTypeDesc />
        ],
        [
            'startAnimate', 
            'boolean', 
            <ValueInput  demoProps={demoProps} propName='startAnimate' onChange={setDemoProps} inputType='boolean' />,
            'true',
            'Whether to start the animation, only works when triggerType is manual.'
        ],
        [
            'children', 
            'React.ReactNode', 
            <ValueInput  demoProps={demoProps} propName='children' onChange={setDemoProps} inputType='string' />,
            'undefined',
            'The content to be displayed. Only accept string for showcase. But you can pass in a component when you\'re using it.'
        ],
        [
            'glitchDuration', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='glitchDuration' onChange={setDemoProps} inputType='number' step={100} min={0} />,
            '1000',
            'How fast the glitch effect will finish a routine. (in milliseconds) You have to press the reload button (top right) to see the difference.'
        ],
        [
            'glitchRest', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='glitchRest' onChange={setDemoProps} inputType='number' step={100} min={0} />,
            '2000',
            'How long the glitch effect will rest after a routine. (in milliseconds) You have to press the reload button (top right) to see the difference.'
        ],
        [
            'maxFuzzIntensity', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='maxFuzzIntensity' onChange={setDemoProps} inputType='number' step={0.1} min={0} />,
            '30',
            'The maximum intensity of the fuzz effect.'
        ],
        [
            'fuzzInterval', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='fuzzInterval' onChange={setDemoProps} inputType='number' step={1} min={0} />,
            '125',
            'Fuzz Effect Interval (in milliseconds). The smaller the value, the faster the effect.'
        ],

    ];

    return (
        <>
            <section className="documents-page-component-section">
                <div className='documents-page-component-demo' style={{backgroundColor: 'var(--basic-purple)'}}>
                    <GlitchEffectDemo 
                        key={reloadKey} 
                        triggerType={demoProps.triggerType} 
                        startAnimate={demoProps.startAnimate}
                        glitchDuration={demoProps.glitchDuration}
                        glitchRest={demoProps.glitchRest}
                        maxFuzzIntensity={demoProps.maxFuzzIntensity}
                        fuzzInterval={demoProps.fuzzInterval}
                    >
                        {demoProps.children || 'Glitch Effect'}
                    </GlitchEffectDemo>
                    <ReloadBtn handler={handleReload} color="rgb(242, 251, 255)" />
                </div>
                <Remark>
                    SVG filters are not supported in some patch of safari, becareful to use.
                </Remark>
            </section>
            <Props headers={tableHeaders} data={tableData} />
            <Snippets />
            <ComponentFooter />
        </>
    )
}

export default GlitchEffectContent;