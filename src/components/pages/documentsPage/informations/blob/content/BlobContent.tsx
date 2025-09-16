import { useState } from "react";
// import DecodeTextDemo from "./DecodeTextDemo";
import ReloadBtn from "../../sharedComponent/buttons/reloadButton/ReloadBtn";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Props from "../../sharedComponent/table/Props";
import Snippets from "./Snippets";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
import Remark from "../../sharedComponent/remark/Remark";
import BlobDemo from "./BlobDemo";


interface DemoProps {
    cornerPosition1: number;
    cornerPosition2: number;
    cornerPosition3: number;
    cornerPosition4: number;
    color: string;
    size: number;
    spin: boolean;
    spinDuration: number;
    randomRadius: boolean;
    randomRadiusInterval: number;
    randomRadiusInensity: number;
    bounce: boolean;
    draggable: boolean;
    chilrenFixed: boolean;
    // only for demo purposes
    showChildren: boolean;
}


const BlobContent = () => {

    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        cornerPosition1: 45,
        cornerPosition2: 60,
        cornerPosition3: 40,
        cornerPosition4: 30,
        color: '#f2fbff',
        size: 250,
        spin: true,
        spinDuration: 3,
        randomRadius: true,
        randomRadiusInterval: 500,
        randomRadiusInensity: 30,
        bounce: true,
        draggable: true,
        chilrenFixed: true,
        showChildren: true,
    });

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
    }
    

    // const TriggerTypeDesc = () => {
    //     return (
    //         <div className="table-desc-container">
    //             <div className="table-desc-item"><div className="table-desc-item-title">InView:</div> Type when in view.</div>
    //             <div className="table-desc-item"><div className="table-desc-item-title">Manual:</div> Type/Delete when typing is true/false.</div>
    //             <div className="table-desc-item"><div className="table-desc-item-title">Auto:</div> Type immediately.</div>
    //         </div>
    //     )
    // }

    const tableHeaders = ['Prop', 'Type','Value', 'Default', 'Description'];
    const tableData = [
        [
            'cornerPosition', 
            'number[]', 
            <div className="blob-demo-props-slider-container">
                <ValueInput  demoProps={demoProps} propName='cornerPosition1' onChange={setDemoProps} inputType='slider' step={1} min={0} max={100} />
                <ValueInput  demoProps={demoProps} propName='cornerPosition2' onChange={setDemoProps} inputType='slider' step={1} min={0} max={100} />
                <ValueInput  demoProps={demoProps} propName='cornerPosition3' onChange={setDemoProps} inputType='slider' step={1} min={0} max={100} />
                <ValueInput  demoProps={demoProps} propName='cornerPosition4' onChange={setDemoProps} inputType='slider' step={1} min={0} max={100} />
                <div className="blob-demo-props-slider-result">
                    <span className="blob-demo-props-slider-bracket left">[ </span>
                        <span className="blob-demo-props-slider-result-number">{demoProps.cornerPosition1}</span><span className="blob-demo-props-slider-comma">,</span>
                        <span className="blob-demo-props-slider-result-number">{demoProps.cornerPosition2}</span><span className="blob-demo-props-slider-comma">,</span>
                        <span className="blob-demo-props-slider-result-number">{demoProps.cornerPosition3}</span><span className="blob-demo-props-slider-comma">,</span>
                        <span className="blob-demo-props-slider-result-number">{demoProps.cornerPosition4}</span>
                    <span className="blob-demo-props-slider-bracket right">]</span>
                </div>
            </div>,
            '[45, 60, 40, 30]',
            'Corner position of the blob. [top, right, bottom, left] (in %) This prop will be ignored if randomRadius prop is true.',
            
        ],
        [
            'color', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='color' onChange={setDemoProps} inputType='color' />,
            '#f2fbff',
            'The color of the blob.'
        ],
        [
            'size', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='size' onChange={setDemoProps} inputType='slider' step={1} min={50} max={300} />,
            '250',
            'The size of the blob. (in pixels) Limit is only for demo purposes. You can set it freely.'
        ],
        [
            'spin', 
            'boolean', 
            <ValueInput  demoProps={demoProps} propName='spin' onChange={setDemoProps} inputType='boolean' />,
            'true',
            'Whether to spin the blob.'
        ],
        [
            'spinDuration', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='spinDuration' onChange={setDemoProps} inputType='number' step={0.1} min={0} />,
            '3',
            'The duration of each spin. (in seconds)  If this prop is changed, you have to press the reload button (top right) or switch the spin prop to see the difference.'
        ],
        [
            'randomRadius', 
            'boolean', 
            <ValueInput  demoProps={demoProps} propName='randomRadius' onChange={setDemoProps} inputType='boolean' />,
            'true',
            'Whether to make the border radius change randomly. This prop will make cornerPosition prop ignored.'
        ],
        [
            'randomRadiusInterval', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='randomRadiusInterval' onChange={setDemoProps} inputType='number' step={100} min={0} />,
            '500',
            'The interval between each random border radius change. (in milliseconds)'
        ],
        [
            'randomRadiusInensity', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='randomRadiusInensity' onChange={setDemoProps} inputType='number' step={1} min={0} max={100} />,
            '30',
            'The intensity of the random border radius change.'
        ],
        [
            'bounce', 
            'boolean', 
            <ValueInput  demoProps={demoProps} propName='bounce' onChange={setDemoProps} inputType='boolean' />,
            'true',
            'Whether to make the blob bounce while hover or tap.'
        ],
        [
            'draggable', 
            'boolean', 
            <ValueInput  demoProps={demoProps} propName='draggable' onChange={setDemoProps} inputType='boolean' />,
            'true',
            'Whether to make the blob draggable.'
        ],
        [
            'blobClassName', 
            'string', 
            '\'\'',
            '\'\'',
            'The class name of the blob, this will override the default style if they have same properties.'
        ],
        [
            'children', 
            'ReactNode', 
            'undefined',
            'undefined',
            'This will be put inside the blob.'
        ],
        [
            'chilrenFixed', 
            'boolean', 
            <ValueInput  demoProps={demoProps} propName='chilrenFixed' onChange={setDemoProps} inputType='boolean' />,
            'true',
            'If true, children won\'t rotate with the blob.'
        ],
    ];

    return (
        <>
            <section className="documents-page-component-section">
                <div 
                    className='documents-page-component-demo'
                    // style={{backgroundColor: 'var(--basic-purple)'}}
                >
                    <BlobDemo 
                        key={reloadKey}
                        cornerPosition={[demoProps.cornerPosition1, demoProps.cornerPosition2, demoProps.cornerPosition3, demoProps.cornerPosition4]}
                        color={demoProps.color}
                        size={demoProps.size}
                        spin={demoProps.spin}
                        spinDuration={demoProps.spinDuration}
                        randomRadius={demoProps.randomRadius}
                        randomRadiusInterval={demoProps.randomRadiusInterval}
                        randomRadiusInensity={demoProps.randomRadiusInensity}
                        bounce={demoProps.bounce}
                        draggable={demoProps.draggable}
                        chilrenFixed={demoProps.chilrenFixed}

                        // only for demo purposes
                        showChildren={demoProps.showChildren}
                    />
                    <ReloadBtn handler={handleReload}
                        color="rgb(242, 251, 255)"
                    />
                    <div className="blob-demo-show-content-btn-container">
                        <span>Show Content :</span>
                        <div className="blob-demo-show-content-btn">
                            <ValueInput  demoProps={demoProps} propName='showChildren' onChange={setDemoProps} inputType='boolean' />
                        </div>
                    </div>
                </div>
                {/* <Remark iconColor="var(--basic-brick)">
                    <span style={{color: 'var(--basic-brick)'}}>Try the props below, its more fun to combine multiple different props.</span>
                </Remark> */}
                <Remark>
                    If you feel a little bit laggy at the beginning, it's because code block below is loading. Don't worry, it will be loaded soon.
                </Remark>
            </section>
            <Props headers={tableHeaders} data={tableData} />
            <Snippets />
            <ComponentFooter />
        </>
    )
}

export default BlobContent;