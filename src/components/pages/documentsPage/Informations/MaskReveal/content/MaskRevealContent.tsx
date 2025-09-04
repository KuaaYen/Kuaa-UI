import { useState } from "react";
import MaskRevealDemo from "./MaskRevealDemo";
import MaskRevealDemoBg from "./MaskRevealDemoBg";
import ReloadBtn from "../../sharedComponent/buttons/reloadButton/ReloadBtn";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Props from "../../sharedComponent/table/Props";
import Snippets from "./Snippets";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
import Remark from "../../sharedComponent/remark/Remark";

interface CircleConfig {
    x: number;
    y: number;
    duration?: number;
    ease?: string;
    delay?: number;
}

interface StopConfig {
    duration?: number;
    ease?: string;
    delay?: number;
}

interface DemoProps {
    isRevealed: boolean;
    revealConfigs: CircleConfig[];
    stopConfig: StopConfig;
    reverseMask: boolean;
}

const MaskRevealContent = () => {

    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        isRevealed: true,
        revealConfigs: [
            {x: 1, y: 0, duration: 2.5, delay: 0},
            {x: 0, y: 1, duration: 2, delay: 0.3},
        ],
        stopConfig: {
            duration: 2,
            ease: "easeInOut",
            delay: 0
        },
        reverseMask: false,
    });

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
    }

    const RevealConfigsDefault = () => {
        return (
            <div className="table-desc-container">
                <div className="table-desc-first-tab">{"["}</div>
                <div className="table-desc-second-tab">{`{x: 1, y: 0, duration: 2.5, delay: 0}`}</div>
                <div className="table-desc-second-tab">{`{x: 0, y: 1, duration: 2, delay: 0.3}`}</div>
                <div className="table-desc-first-tab">{"]"}</div>
            </div>
        )
    }

    const RevealConfigsDesc = () => {
        return (
            <div className="table-desc-container">
                <div className="table-desc-item">This property controls reveal areas configs, you can have multiple reveal areas revealing at the same time.</div>
                <div className="table-desc-item"><div className="table-desc-item-title" style={{width: 'fit-content'}}>x:</div> x position, available from 0 to 1.</div>
                <div className="table-desc-item"><div className="table-desc-item-title" style={{width: 'fit-content'}}>y:</div> y position, available from 0 to 1.</div>
                <div className="table-desc-item"><div className="table-desc-item-title" style={{width: 'fit-content'}}>duration:</div> Animate duration, in seconds.</div>
                <div className="table-desc-item"><div className="table-desc-item-title" style={{width: 'fit-content'}}>delay:</div> Animate delay, in seconds.</div>
            </div>
        )
    }



    const tableHeaders = ['Prop', 'Type','Value', 'Default', 'Description'];
    const tableData = [
        [
            'children',
            'React.ReactNode',
            'undefined',
            'undefined',
            'The content to be revealed.'
        ],
        [
            'isRevealed', 
            'boolean', 
            <ValueInput  demoProps={demoProps} propName='isRevealed' onChange={setDemoProps} inputType='boolean' />,
            'false',
            'Whether to reveal content.'
        ],
        [
            'revealConfigs',
            'object[]',
            <RevealConfigsDefault />,
            <RevealConfigsDefault />,
            <RevealConfigsDesc />
        ],
        [
            'reverseMask',
            'boolean',
            <ValueInput  demoProps={demoProps} propName='reverseMask' onChange={setDemoProps} inputType='boolean' />,
            `false`,
            'Reverse mask color, this means the revealed part and the unrevealed part are reversed.'
        ],
    ];

    return (
        <>
            <section className="documents-page-component-section">
                <div className='documents-page-component-demo'>
                    <MaskRevealDemo 
                        key={reloadKey} 
                        isRevealed={demoProps.isRevealed} 
                        revealConfigs={demoProps.revealConfigs} 
                        reverseMask={demoProps.reverseMask}
                    >
                        <MaskRevealDemoBg isRevealed={demoProps.isRevealed} />
                    </MaskRevealDemo>
                    <ReloadBtn handler={handleReload} />
                </div>
                <Remark>
                    SVG Masks are not supported in some patch of safari, becareful to use.
                </Remark>
                <Remark>
                    This component doesn't include the card, you may pass in the content you want as children.
                </Remark>
            </section>
            <Props headers={tableHeaders} data={tableData} />
            <Snippets />
            <ComponentFooter />
        </>
    )
}

export default MaskRevealContent;