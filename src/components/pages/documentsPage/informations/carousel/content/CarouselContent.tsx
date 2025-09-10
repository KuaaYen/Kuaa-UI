import { ReactNode, useState, useEffect } from "react";
import CarouselDemo from "./CarouselDemo";
import ReloadBtn from "../../sharedComponent/buttons/reloadButton/ReloadBtn";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Props from "../../sharedComponent/table/Props";
import Snippets from "./Snippets";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
import Remark from "../../sharedComponent/remark/Remark";


interface DemoProps {
    dotColor?: string;
    rollInterval?: number;
    rollDuration?: number;
    itemHeight?: number;
    items?: ReactNode[];
    itemNumbers?: number;
}

const CarouselContent = () => {

    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        dotColor: '#E07A5F',
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
        .slice(0, demoProps.itemNumbers || itemsData.length) // 先切片到需要的數量
        .map((item, index) => (
            <div className='carousel-demo-item-content'>
                <div className='carousel-demo-item-title'>
                    {`Item ${index + 1}`}
                </div>
                <div className='carousel-demo-item-desc'>
                    {`This is the ${item} item`}
                </div>
            </div>
        ));

    const tableHeaders = ['Prop', 'Type','Value', 'Default', 'Description'];
    const tableData = [
        [
            'itemHeight', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='itemHeight' onChange={setDemoProps} inputType='number' step={1} min={150} max={520} />,
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
            'rollInterval', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='rollInterval' onChange={setDemoProps} inputType='number' step={1} min={0} />,
            '500',
            'The interval between each roll. (in milliseconds) The smaller the value, the faster the you can roll.'
        ],
        [
            'rollDuration', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='rollDuration' onChange={setDemoProps} inputType='number' step={1} min={0} />,
            '1000',
            'The animation duration of each roll. (in milliseconds) The smaller the value, the faster the animation end.'
        ],
        [
            'items', 
            'ReactNode[]', 
            'undefined',
            'undefined',
            'Items to display. Each item will be wrapped in a carousel card.'
        ],
    ];

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
                    <ValueInput  demoProps={demoProps} propName='itemNumbers' onChange={setDemoProps} inputType='number' step={1} min={1} max={20} />
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