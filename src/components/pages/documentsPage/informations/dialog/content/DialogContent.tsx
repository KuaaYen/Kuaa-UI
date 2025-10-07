import { useState, useEffect } from "react";
// import DecodeTextDemo from "./DecodeTextDemo";
import ReloadBtn from "../../sharedComponent/buttons/reloadButton/ReloadBtn";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Props from "../../sharedComponent/table/Props";
import Snippets from "./Snippets";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
import Remark from "../../sharedComponent/remark/Remark";
import DialogDemo from "./DialogDemo";
import useMediaTypeContext from "../../../../../../context/useMediaTypeContext";


interface DemoProps {
    contentText?: string,
    width?: number,
    height?: number,
    borderRadius?: number,
    strokeWidth?: number,
    arrowSize?: number,
    arrowPosition?: number,   
    arrowDirection?: 'right' | 'left',
    strokeColor?: string,
    fillColor?: string,
    textColor?: string, 
    textWrap?: 'nowrap' | 'wrap',
}


const DialogContent = () => {

    const mediaType = useMediaTypeContext();
    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        contentText: 'Anything to say ?',
        width: 400,
        height: 150,
        borderRadius: 32,
        strokeWidth: 6,
        arrowSize: 35,
        arrowPosition: 0.8,
        arrowDirection: 'right',
        strokeColor: '#000000',
        fillColor: '#ffffff',
        textColor: '#000000',
        textWrap: 'nowrap',
    });

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
    }
    
    useEffect(() => {
        if(mediaType === 'mobile') {
            setDemoProps(prev => ({
                ...prev,
                width: Math.min(Number(prev.width), 300),
                height: Math.min(Number(prev.height), 200),
                borderRadius: Math.min(Number(prev.borderRadius), 100),
                arrowSize: Math.min(Number(prev.arrowSize), 50),
            }));
        }
    }, [mediaType]);


    const tableHeaders = ['Prop', 'Type','Value', 'Default', 'Description'];
    const tableData = [
        [
            'children', 
            'ReactNode', 
            <ValueInput  demoProps={demoProps} propName='contentText' onChange={setDemoProps} inputType='string' maxLength={20} />,
            'undefined',
            'This will be put inside the dialog component. You can pass in strings to use default settings, or pass in a component to use your own custom settings.'
        ],
        [
            'width', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='width' onChange={setDemoProps} inputType={mediaType === 'pc' ? 'slider' : 'number'} min={0} max={mediaType === 'mobile' ? 300 : 500} step={1} />,
            '400',
            'The width of the dialog. (px)'
        ],
        [
            'height', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='height' onChange={setDemoProps} inputType={mediaType === 'pc' ? 'slider' : 'number'} min={0} max={mediaType === 'mobile' ? 200 : 300} step={1} />,
            '150',
            'The height of the dialog. (px)'
        ],
        [
            'borderRadius', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='borderRadius' onChange={setDemoProps} inputType={mediaType === 'pc' ? 'slider' : 'number'} min={0} max={mediaType === 'mobile' ? 100 : 250} step={1} />,
            '32',
            'Border radius of the dialog. (px)'
        ],

        [
            'strokeWidth', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='strokeWidth' onChange={setDemoProps} inputType={mediaType === 'pc' ? 'slider' : 'number'} min={0} max={10} step={0.1} />,
            '6',
            'The width of the stroke. (svg\'s stroke width)'
        ],
        [
            'arrowSize', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='arrowSize' onChange={setDemoProps} inputType={mediaType === 'pc' ? 'slider' : 'number'} min={0} max={mediaType === 'mobile' ? 50 : 100} step={1} />,
            '35',
            'The size of the arrow (width in px).'
        ],
        [
            'arrowPosition', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='arrowPosition' onChange={setDemoProps} inputType={mediaType === 'pc' ? 'slider' : 'number'} min={0} max={1} step={0.05} />,
            '0',
            'Where the arrow is located. 0 is at the left, 1 is at the right.'
        ],
        [
            'arrowDirection', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='arrowDirection' onChange={setDemoProps} inputType='switch' options={['right', 'left']} />,
            'right',
            'The direction of the arrow.'
        ],
        [
            'strokeColor', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='strokeColor' onChange={setDemoProps} inputType='color' />,
            '#000000',
            'The color of dialog\'s outline.'
        ],
        [
            'fillColor', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='fillColor' onChange={setDemoProps} inputType='color' />,
            '#ffffff',
            'The color of dialog\'s background.'
        ],
        [
            'textColor', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='textColor' onChange={setDemoProps} inputType='color' />,
            '#000000',
            'The color of dialog\'s text.'
        ],
        [
            'textWrap', 
            `'nowrap' | 'wrap' | 'balance' | 'pretty' | 'stable'`, 
            <ValueInput  demoProps={demoProps} propName='textWrap' onChange={setDemoProps} inputType='switch' options={['nowrap', 'wrap', 'balance', 'pretty', 'stable']} />,
            'nowrap',
            'The text wrap property of the dialog.'
        ],
    ];


    return (
        <>
            <section className="documents-page-component-section">
                <div className='documents-page-component-demo' style={{fontSize: mediaType === 'mobile' ? '1.6rem' : '2rem'}}>
                    <DialogDemo 
                        key={reloadKey}
                        {...demoProps}
                    >
                        {demoProps.contentText || 'Anything to say ?'}
                    </DialogDemo>
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

export default DialogContent;