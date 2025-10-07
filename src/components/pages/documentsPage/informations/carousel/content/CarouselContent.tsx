import { ReactNode, useState, useEffect } from "react";
import CarouselDemo from "./CarouselDemo";
import ReloadBtn from "../../sharedComponent/buttons/reloadButton/ReloadBtn";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Props from "../../sharedComponent/table/Props";
import Snippets from "./Snippets";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
import Remark from "../../sharedComponent/remark/Remark";
import useMediaTypeContext from "../../../../../../context/useMediaTypeContext";


interface DemoProps {
    dotColor?: string;
    autoPlay?: boolean;
    autoPlayInterval?: number;
    autoPlayRest?: number;
    rollInterval?: number;
    rollDuration?: number;
    itemHeight?: number;
    itemNumbers?: number;
    items?: ReactNode[];
}

const CarouselContent = () => {

    const mediaType = useMediaTypeContext();
    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        dotColor: '#E07A5F',
        autoPlay: true,
        autoPlayInterval: 3000,
        autoPlayRest: 2000,
        rollInterval: 500,
        rollDuration: 1000,
        itemHeight: 280,
        itemNumbers: 15,
    });

    useEffect(() => {
        setReloadKey(prev => prev + 1);
    }, [demoProps.itemNumbers]);

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
    }
    
    
    const itemsData = [
        'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 
        'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 
        'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 
        'eighteenth', 'nineteenth', 'twentieth',
    ];

    const items = itemsData
        .slice(0, demoProps.itemNumbers || itemsData.length)
        .map((item, index) => (
            <div className='carousel-demo-item-content'>
                <div className='carousel-demo-item-title' style={{fontSize: mediaType === 'mobile' ? '1.5rem' : '2.5rem'}}>
                    {`Item ${index + 1}`}
                </div>
                <div className='carousel-demo-item-desc' style={{fontSize: mediaType === 'mobile' ? '0.8rem' : '1rem'}}>
                    {`This is the ${item} item`}
                </div>
            </div>
        ));

    const tableHeaders = ['Prop', 'Type','Value', 'Default', 'Description'];
    const tableData = [
        [
            'itemHeight', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='itemHeight' onChange={setDemoProps} inputType='number' step={1} min={mediaType === 'mobile' ? 100 : 150} max={mediaType === 'mobile' ? 200 : 520} />,
            '280',
            'The height of each item. (in pixels) Item aspect ratio is 16:9. Limit is only for demo purposes. You can set it freely.'
        ],
        [
            'dotColor', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='dotColor' onChange={setDemoProps} inputType='color' />,
            '\'#E07A5F\'',
            'Color of the circle that indicates the current item.'
        ],
        [
            'autoPlay', 
            'boolean', 
            <ValueInput  demoProps={demoProps} propName='autoPlay' onChange={setDemoProps} inputType='boolean' />,
            'true',
            'Whether to auto play the carousel.'
        ],
        [
            'autoPlayInterval', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='autoPlayInterval' onChange={setDemoProps} inputType='number' step={100} min={0} />,
            '3000',
            'The interval between each auto play. (ms)'
        ],
        [
            'autoPlayRest', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='autoPlayRest' onChange={setDemoProps} inputType='number' step={100} min={0} />,
            '2000',
            'The rest time after each auto play. (ms)'
        ],
        [
            'rollInterval', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='rollInterval' onChange={setDemoProps} inputType='number' step={1} min={0} />,
            '500',
            'The interval between each roll. (ms) The smaller the value, the faster the you can roll.'
        ],
        [
            'rollDuration', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='rollDuration' onChange={setDemoProps} inputType='number' step={1} min={0} />,
            '1000',
            'The animation duration of each roll. (ms) The smaller the value, the faster the animation end.'
        ],
        [
            'items', 
            'ReactNode[]', 
            'undefined',
            'undefined',
            'Items to display. Each item will be wrapped in a carousel card.'
        ],
    ];

    useEffect(() => {
        if(mediaType === 'mobile') {
            setDemoProps(prev => ({...prev, itemHeight: Math.min(Number(prev.itemHeight), 180)}));
            setReloadKey(prev => prev + 1);
        } else {
            setDemoProps(prev => ({...prev, itemHeight: Math.max(Number(prev.itemHeight), 150)}));
            setReloadKey(prev => prev + 1);
        }
    }, [mediaType]);

    return (
        <>
            <section className="documents-page-component-section">
                <div 
                    className='documents-page-component-demo'
                    style={{backgroundColor: 'var(--basic-purple)'}}
                >
                    <CarouselDemo 
                        key={reloadKey} 
                        itemHeight={demoProps.itemHeight}
                        dotColor={demoProps.dotColor}
                        autoPlay={demoProps.autoPlay}
                        autoPlayInterval={demoProps.autoPlayInterval}
                        autoPlayRest={demoProps.autoPlayRest}
                        rollInterval={demoProps.rollInterval}
                        rollDuration={demoProps.rollDuration}
                        items={items}
                    />
                    <ReloadBtn handler={handleReload}
                        color="rgb(242, 251, 255)"
                    />
                </div>
                <Remark>
                    Try different number of items and see how it works.
                    <span style={{display: 'inline-block', marginLeft: '0.5rem'}}>
                        <ValueInput  demoProps={demoProps} propName='itemNumbers' onChange={setDemoProps} inputType='number' step={1} min={1} max={20} />
                    </span>
                </Remark>
                <Remark>
                    If you feel a little bit laggy at the beginning, it's because code block below is loading. Don't worry, it will be loaded soon.
                </Remark>
                <Remark>
                    Better looking with darker background, but this is not mandatory.
                </Remark>
            </section>
            <Props headers={tableHeaders} data={tableData} />
            <Snippets />
            <ComponentFooter />
        </>
    )
}

export default CarouselContent;