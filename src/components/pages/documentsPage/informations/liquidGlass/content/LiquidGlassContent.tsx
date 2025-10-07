import { useState, useEffect } from "react";
import { motion } from "motion/react";
// import DecodeTextDemo from "./DecodeTextDemo";
import ReloadBtn from "../../sharedComponent/buttons/reloadButton/ReloadBtn";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Props from "../../sharedComponent/table/Props";
import Snippets from "./Snippets";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
import Remark from "../../sharedComponent/remark/Remark";
import LiquidGlassDemo from "./LiquidGlassDemo";
import useMediaTypeContext from "../../../../../../context/useMediaTypeContext";


interface DemoProps {
    width?: number;
    height?: number;
    borderRadius?: string | number;
    intensity?: number;
    centerSize?: number;
    centerBlur?: number;
    backgroundBlur?: number;
    backgroundOpacity?: number;
    // only for demo purposes
    backgroundFilter: 'normal' | 'grayscale';
    content: 'content' | 'no-content';
}


const LiquidGlassContent = () => {
    const mediaType = useMediaTypeContext();
    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        width: 250,
        height: 250,
        borderRadius: 125,
        intensity: 1.5,
        centerSize: 0.76,
        centerBlur: 7,
        backgroundBlur: 0.6,
        backgroundOpacity: 0.05,
        backgroundFilter: 'normal',
        content: 'no-content',
    });

    // 當mediaType改變時，確保mobile模式下，width和height不會超出視窗
    useEffect(() => {
        if(mediaType === 'mobile') {
            setDemoProps(prev => ({
                ...prev, 
                width: Math.min(Number(prev.width), 250),
                height: Math.min(Number(prev.height), 250)
            }));
        }
    }, [mediaType]);


    const handleReload = () => {
        setReloadKey(prev => prev + 1);
    }
    

    const BorderRadiusDesc = () => {
        return (
            <div className="table-desc-container">
                <div className="table-desc-item">The border radius of the liquid glass component.</div>
                <div className="table-desc-item">This prop support px, %, and rem (no em or vw).</div>
                <div className="table-desc-item">You can pass in number or value with units.</div>
                <div className="table-desc-item">For example, you can pass in 16, '1rem', '100%', '16px', etc.</div>
            </div>
        )
    }

    const createPropInput = (propName: string) => {
        switch(propName) {
            case 'width':
                if(mediaType === 'pc') {
                    return <ValueInput  demoProps={demoProps} propName='width' onChange={setDemoProps} inputType='slider' step={1} min={100} max={500} />
                } else {
                    return <ValueInput  demoProps={demoProps} propName='width' onChange={setDemoProps} inputType='number' step={1} min={100} max={300} />
                }
            case 'height':
                if(mediaType === 'pc') {
                    return <ValueInput  demoProps={demoProps} propName='height' onChange={setDemoProps} inputType='slider' step={1} min={50} max={300} />
                } else {
                    return <ValueInput  demoProps={demoProps} propName='height' onChange={setDemoProps} inputType='number' step={1} min={50} max={300} />
                }
            case 'borderRadius':
                if(mediaType === 'pc') {
                    return <ValueInput  demoProps={demoProps} propName='borderRadius' onChange={setDemoProps} inputType='slider' step={1} min={0} max={250} />
                } else {
                    return <ValueInput  demoProps={demoProps} propName='borderRadius' onChange={setDemoProps} inputType='number' step={1} min={0} max={150} />
                }
            case 'intensity':
                return <ValueInput  demoProps={demoProps} propName='intensity' onChange={setDemoProps} inputType={mediaType === 'pc' ? 'slider' : 'number'} step={0.1} min={-2} max={2} />
            case 'centerSize':
                return <ValueInput  demoProps={demoProps} propName='centerSize' onChange={setDemoProps} inputType={mediaType === 'pc' ? 'slider' : 'number'} step={0.01} min={0} max={1} />
            case 'centerBlur':
                return <ValueInput  demoProps={demoProps} propName='centerBlur' onChange={setDemoProps} inputType={mediaType === 'pc' ? 'slider' : 'number'} step={0.1} min={0} max={10} />
            case 'backgroundBlur':
                return <ValueInput  demoProps={demoProps} propName='backgroundBlur' onChange={setDemoProps} inputType={mediaType === 'pc' ? 'slider' : 'number'} step={0.1} min={0} max={10} />
            case 'backgroundOpacity':
                return <ValueInput  demoProps={demoProps} propName='backgroundOpacity' onChange={setDemoProps} inputType={mediaType === 'pc' ? 'slider' : 'number'} step={0.01} min={0} max={1} />

        }
    }



    const tableHeaders = ['Prop', 'Type','Value', 'Default', 'Description'];
    const tableData = [
        [
            'width', 
            'number', 
            createPropInput('width'),
            '250',
            'The width of the liquid glass component. (px)'
        ],
        [
            'height', 
            'number', 
            createPropInput('height'),
            '250',
            'The height of the liquid glass component. (px)'
        ],
        [
            'borderRadius', 
            'string | number', 
            createPropInput('borderRadius'),
            '125',
            <BorderRadiusDesc />
        ],
        [
            'intensity', 
            'number', 
            createPropInput('intensity'),
            '1.5',
            'The intensity of the glass distortion effect. This controls the displacement scale of the filter.'
        ],
        [
            'centerSize', 
            'number', 
            createPropInput('centerSize'),
            '0.76',
            'The size of the center of the glass distortion effect. (center part won\'t be distorted)'
        ],
        [
            'centerBlur', 
            'number', 
            createPropInput('centerBlur'),
            '7',
            'The blur of the center part, increasing this value will make the boundary between the center and the edge more blurry.'
        ],
        [
            'backgroundBlur', 
            'number', 
            createPropInput('backgroundBlur'),
            '0.6',
            'The blur of the background, increasing this value will make contents behind the liquid glass component more blurry.'
        ],
        [
            'backgroundOpacity', 
            'number', 
            createPropInput('backgroundOpacity'),
            '0.05',
            'The color opacity of the background. (black)'
        ],
        [
            'children', 
            'React.ReactNode', 
            'undefined',
            'undefined',
            'This will be put inside the liquid glass component.'
        ]
    ];

    const getChildrenDemo = () => {
        return (
            <motion.div 
                className="liquid-glass-demo-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: demoProps.content === 'content' ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
                Glass
            </motion.div>
        )
    }
    
    return (
        <>
            <section className="documents-page-component-section">
                <div 
                    className='documents-page-component-demo'
                    // style={{backgroundColor: 'var(--basic-purple)'}}
                >
                    <LiquidGlassDemo 
                        key={reloadKey}
                        width={demoProps.width}
                        height={demoProps.height}
                        borderRadius={demoProps.borderRadius}
                        intensity={demoProps.intensity}
                        centerSize={demoProps.centerSize}
                        centerBlur={demoProps.centerBlur}
                        backgroundBlur={demoProps.backgroundBlur}
                        backgroundOpacity={demoProps.backgroundOpacity}
                        backgroundFilter={demoProps.backgroundFilter}
                    >
                        {getChildrenDemo()}
                    </LiquidGlassDemo>
                    <ReloadBtn handler={handleReload}
                        color="rgb(242, 251, 255)"
                    />
                    <div className="liquid-glass-demo-btn-container">
                        <div className="liquid-glass-demo-btn">
                            <ValueInput  demoProps={demoProps} propName='backgroundFilter' onChange={setDemoProps} inputType='switch' options={['normal', 'grayscale']} />
                        </div>
                        <div className="liquid-glass-demo-btn">
                            <ValueInput  demoProps={demoProps} propName='content' onChange={setDemoProps} inputType='switch' options={['no-content', 'content']} />
                        </div>
                    </div>
                </div>
                <Remark>
                    SVG filters might not be supported in some patch of safari, becareful to use, or set a fallback.
                </Remark>
                <Remark>
                    This component doesn't include background and draggable feature, these are just for demonstration.
                </Remark>
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

export default LiquidGlassContent;