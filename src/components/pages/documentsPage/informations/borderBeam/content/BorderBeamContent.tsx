import { useState } from "react";
// import DecodeTextDemo from "./DecodeTextDemo";
import ReloadBtn from "../../sharedComponent/buttons/reloadButton/ReloadBtn";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Props from "../../sharedComponent/table/Props";
import Snippets from "./Snippets";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
import Remark from "../../sharedComponent/remark/Remark";
import BorderBeamDemo from "./BorderBeamDemo";
import useMediaTypeContext from "../../../../../../context/useMediaTypeContext";


interface DemoProps {
    triggerType: 'auto' | 'hover' | 'manual';
    startAnimate: boolean;
    borderColor: string;
    borderHighlightColor: string;
    borderWidth: number;
    borderRadius: string;
    backgroundColor: string;
    duration: number;
}


const BorderBeamContent = () => {

    const mediaType = useMediaTypeContext();
    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        triggerType: 'auto',
        startAnimate: true,
        borderColor: 'rgba(255, 255, 255, 0.288)',
        borderHighlightColor: 'rgba(255, 255, 255, 0.7)',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        borderWidth: 2,
        borderRadius: '1rem',
        duration: 5,
    });

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
    }
    
    const colorContainerStyle = {
        width: '11.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }

    const colorSpanStyle = (color: string) => {
        return {
            width: '4rem',
            height: '1.2rem',
            backgroundColor: color,
            borderRadius: '0.3rem',
            border: '1px solid var(--basic-purple)',
            padding: '0rem 0.4rem',
        }
    }


    const BorderColorDesc = () => {
        return (
            <div className="table-desc-container">
                <div className="table-desc-item">The color of the border.</div>
                <div className="table-desc-item">Any color supported by CSS is valid.</div>
                <div className="table-desc-item" style={{marginTop: '0.5rem'}}>Examples:</div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(255, 255, 255, 0.25)</span>
                    <span style={colorSpanStyle('rgba(255, 255, 255, 0.25)')}></span>
                </div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(92, 236, 255, 0.25)</span>
                    <span style={colorSpanStyle('rgba(92, 236, 255, 0.25)')}></span>
                </div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(224, 122, 95, 0.25)</span>
                    <span style={colorSpanStyle('rgba(224, 122, 95, 0.25)')}></span>
                </div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(242, 204, 143, 0.25)</span>
                    <span style={colorSpanStyle('rgba(242, 204, 143, 0.25)')}></span>
                </div>
            </div>
        )
    }

    const BorderHighlightColorDesc = () => {
        return (
            <div className="table-desc-container">
                <div className="table-desc-item">The color of the border highlight.</div>
                <div className="table-desc-item">Any color supported by CSS is valid.</div>
                <div className="table-desc-item" style={{marginTop: '0.5rem'}}>Examples:</div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(255, 255, 255, 0.7)</span>
                    <span style={colorSpanStyle('rgba(255, 255, 255, 0.7)')}></span>
                </div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(92, 236, 255, 0.7)</span>
                    <span style={colorSpanStyle('rgba(92, 236, 255, 0.7)')}></span>
                </div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(224, 122, 95, 0.7)</span>
                    <span style={colorSpanStyle('rgba(224, 122, 95, 0.7)')}></span>
                </div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(242, 204, 143, 0.7)</span>
                    <span style={colorSpanStyle('rgba(242, 204, 143, 0.7)')}></span>
                </div>
            </div>
        )
    }

    const BackgroundColorDesc = () => {
        return (
            <div className="table-desc-container">
                <div className="table-desc-item">The background color of the component.</div>
                <div className="table-desc-item">Any color supported by CSS is valid.</div>
                <div className="table-desc-item" style={{marginTop: '0.5rem'}}>Examples:</div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(255, 255, 255, 0)</span>
                    <span style={colorSpanStyle('rgba(255, 255, 255, 0)')}></span>
                </div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(255, 255, 255, 0.1)</span>
                    <span style={colorSpanStyle('rgba(255, 255, 255, 0.1)')}></span>
                </div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(92, 236, 255, 0.1)</span>
                    <span style={colorSpanStyle('rgba(92, 236, 255, 0.1)')}></span>
                </div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(224, 122, 95, 0.1)</span>
                    <span style={colorSpanStyle('rgba(224, 122, 95, 0.1)')}></span>
                </div>
                <div className="table-desc-item">
                    <span style={{width: '11.5rem'}}>rgba(242, 204, 143, 0.1)</span>
                    <span style={colorSpanStyle('rgba(242, 204, 143, 0.1)')}></span>
                </div>
            </div>
        )
    }


    const TriggerTypeDesc = () => {
        return (
            <div className="table-desc-container">
                <div className="table-desc-item"><div className="table-desc-item-title">Auto:</div> Animate immediately.</div>
                <div className="table-desc-item"><div className="table-desc-item-title">Hover:</div> Animate when hover.</div>
                <div className="table-desc-item"><div className="table-desc-item-title">Manual:</div> Animate when startAnimate is true.</div>
            </div>
        )
    }


    const tableHeaders = ['Prop', 'Type','Value', 'Default', 'Description'];
    const tableData = [
        [
            'triggerType',
            'string',
            <ValueInput  demoProps={demoProps} propName='triggerType' onChange={setDemoProps} inputType='switch' options={['auto', 'hover', 'manual']} />,
            'auto',
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
            'borderColor',
            'string',
            <div style={colorContainerStyle}>
                <ValueInput  
                    demoProps={demoProps} 
                    propName='borderColor' 
                    onChange={setDemoProps} 
                    inputType='switch' 
                    options={[
                        'rgba(255, 255, 255, 0.25)',
                        'rgba(92, 236, 255, 0.25)',
                        'rgba(224, 122, 95, 0.25)',
                        'rgba(242, 204, 143, 0.25)'
                    ]} 
                />
            </div>,
            'rgba(255, 255, 255, 0.25)',
            <BorderColorDesc />
        ],
        [
            'borderHighlightColor',
            'string',
            <div style={colorContainerStyle}>
                <ValueInput  
                    demoProps={demoProps} 
                    propName='borderHighlightColor' 
                    onChange={setDemoProps} 
                    inputType='switch' 
                    options={[
                        'rgba(255, 255, 255, 0.7)',
                        'rgba(92, 236, 255, 0.7)',
                        'rgba(224, 122, 95, 0.7)',
                        'rgba(242, 204, 143, 0.7)'
                    ]} 
                />
            </div>,
            'rgba(255, 255, 255, 0.5)',
            <BorderHighlightColorDesc />
        ],
        [
            'backgroundColor',
            'string',
            <div style={colorContainerStyle}>
                <ValueInput  
                    demoProps={demoProps} 
                    propName='backgroundColor' 
                    onChange={setDemoProps} 
                    inputType='switch' 
                    options={[
                        'rgba(255, 255, 255, 0)',
                        'rgba(255, 255, 255, 0.1)',
                        'rgba(92, 236, 255, 0.1)',
                        'rgba(224, 122, 95, 0.1)',
                        'rgba(242, 204, 143, 0.1)'
                    ]} 
                />
            </div>,
            'rgba(255, 255, 255, 0.1)',
            <BackgroundColorDesc />
        ],
        [
            'borderWidth',
            'number',
            <ValueInput  demoProps={demoProps} propName='borderWidth' onChange={setDemoProps} inputType='number' step={1} min={1} max={10} />,
            '2',
            'The width of the border (px).'
        ],
        [
            'borderRadius',
            'string',
            <ValueInput  demoProps={demoProps} propName='borderRadius' onChange={setDemoProps} inputType='switch' options={['1rem', '5rem']} />,
            '1rem',
            'The radius of the border. Any value supported by CSS is valid.'
        ],
        [
            'duration',
            'number',
            <ValueInput  demoProps={demoProps} propName='duration' onChange={setDemoProps} inputType='number' step={0.1} min={0.1} />,
            '5',
            'The duration of the animation (s). If this prop is changed, you have to press the reload button (top right) to see the difference.'
        ],
        [
            'children', 
            'ReactNode', 
            'undefined',
            'undefined',
            'This will be put inside the border beam component.'
        ],
    ];

    const ChildrenDemo = () => {
        return (
            <div className="border-beam-demo-content" style={{fontSize: mediaType === 'mobile' ? '2rem' : '4rem'}}>
                Border Beam
            </div>            
        )
    }

    return (
        <>
            <section className="documents-page-component-section">
                <div className='documents-page-component-demo'>
                    <BorderBeamDemo 
                        key={reloadKey}
                        {...demoProps}
                    >
                        <ChildrenDemo />
                    </BorderBeamDemo>
                    <ReloadBtn handler={handleReload}
                        color="rgb(242, 251, 255)"
                    />
                </div>
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

export default BorderBeamContent;