import { ReactNode, useState, useEffect } from 'react';
import SwipeSliderDemo from './SwipeSliderDemo';
import ReloadBtn from '../../sharedComponent/buttons/reloadButton/ReloadBtn';
import ValueInput from '../../sharedComponent/input/ValueInput';
import Props from '../../sharedComponent/table/Props';
import Snippets from './Snippets';
import ComponentFooter from '../../sharedComponent/footer/ComponentFooter';
import Remark from '../../sharedComponent/remark/Remark';
import useMediaTypeContext from '../../../../../../context/useMediaTypeContext';

interface DemoProps {
    dotColor: string;
    loop: boolean;
    itemWidthRatio: number;
    gap: number;
    rubberBandFactor: number;
    maxRubberPx: number;
    distanceThreshold: number;
    velocityThreshold: number;
    snapDurationMs: number;
    itemNumbers: number;
}

const SwipeSliderContent = () => {
    const mediaType = useMediaTypeContext();
    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        dotColor: '#E07A5F',
        loop: false,
        itemWidthRatio: 1,
        gap: 12,
        rubberBandFactor: 0.32,
        maxRubberPx: 72,
        distanceThreshold: 0.22,
        velocityThreshold: 0.35,
        snapDurationMs: 500,
        itemNumbers: 5,
    });

    useEffect(() => {
        setReloadKey((prev) => prev + 1);
    }, [demoProps.itemNumbers]);

    const handleReload = () => {
        setReloadKey((prev) => prev + 1);
    };

    const itemsData = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth'];

    const items: ReactNode[] = itemsData.slice(0, demoProps.itemNumbers).map((item, index) => (
        <div key={index} className="swipe-slider-demo-item-inner">
            <div
                style={{
                    fontSize: mediaType === 'mobile' ? '1.5rem' : '2rem',
                    fontWeight: 'bold',
                }}
            >
                {`Item ${index + 1}`}
            </div>
            <div style={{ fontSize: mediaType === 'mobile' ? '0.85rem' : '1rem', opacity: 0.85 }}>
                {`This is the ${item} card`}
            </div>
        </div>
    ));

    const tableHeaders = ['Prop', 'Type', 'Value', 'Default', 'Description'];
    const tableData = [
        [
            'items',
            'ReactNode[]',
            '—',
            '—',
            'Slides to display. Each node is placed inside one slide.',
        ],
        [
            'dotColor',
            'string',
            <ValueInput
                demoProps={demoProps}
                propName="dotColor"
                onChange={setDemoProps}
                inputType="color"
            />,
            "'#E07A5F'",
            'Color of the indicator dot for the current item.',
        ],
        [
            'loop',
            'boolean',
            <ValueInput
                demoProps={demoProps}
                propName="loop"
                onChange={setDemoProps}
                inputType="boolean"
            />,
            'false',
            'When true, prev/next wrap around the ends.',
        ],
        [
            'itemWidthRatio',
            'number',
            <ValueInput
                demoProps={demoProps}
                propName="itemWidthRatio"
                onChange={setDemoProps}
                inputType="number"
                step={0.05}
                min={0.5}
                max={1}
            />,
            '1',
            'Slide width as a fraction of the viewport width. Use 1 to fully fill at rest; values < 1 show next slide even before dragging.',
        ],
        [
            'gap',
            'number',
            <ValueInput
                demoProps={demoProps}
                propName="gap"
                onChange={setDemoProps}
                inputType="number"
                step={1}
                min={0}
                max={48}
            />,
            '12',
            'Gap between slides in pixels.',
        ],
        [
            'rubberBandFactor',
            'number',
            <ValueInput
                demoProps={demoProps}
                propName="rubberBandFactor"
                onChange={setDemoProps}
                inputType="number"
                step={0.02}
                min={0.05}
                max={0.9}
            />,
            '0.32',
            'When loop is false, dampens drag past the first/last slide.',
        ],
        [
            'maxRubberPx',
            'number',
            <ValueInput
                demoProps={demoProps}
                propName="maxRubberPx"
                onChange={setDemoProps}
                inputType="number"
                step={1}
                min={0}
                max={200}
            />,
            '72',
            'Maximum rubber-band offset in pixels at the ends (non-loop only).',
        ],
        [
            'distanceThreshold',
            'number',
            <ValueInput
                demoProps={demoProps}
                propName="distanceThreshold"
                onChange={setDemoProps}
                inputType="number"
                step={0.02}
                min={0.05}
                max={0.6}
            />,
            '0.22',
            'Drag distance (× slide width) required to change slide if velocity is low.',
        ],
        [
            'velocityThreshold',
            'number',
            <ValueInput
                demoProps={demoProps}
                propName="velocityThreshold"
                onChange={setDemoProps}
                inputType="number"
                step={0.05}
                min={0.1}
                max={2}
            />,
            '0.35',
            'Pointer velocity (px/ms) to trigger a slide change on flick.',
        ],
        [
            'snapDurationMs',
            'number',
            <ValueInput
                demoProps={demoProps}
                propName="snapDurationMs"
                onChange={setDemoProps}
                inputType="number"
                step={20}
                min={80}
                max={1200}
            />,
            '500',
            'Duration of the snap animation in milliseconds.',
        ],
        [
            'className',
            'string',
            '—',
            "''",
            'Optional class on the root element.',
        ],
    ];

    return (
        <>
            <section className="documents-page-component-section">
                <div
                    className="documents-page-component-demo"
                    style={{ backgroundColor: 'var(--basic-purple)', overflow: 'hidden' }}
                >
                    <SwipeSliderDemo
                        key={reloadKey}
                        items={items}
                        dotColor={demoProps.dotColor}
                        loop={demoProps.loop}
                        itemWidthRatio={demoProps.itemWidthRatio}
                        gap={demoProps.gap}
                        rubberBandFactor={demoProps.rubberBandFactor}
                        maxRubberPx={demoProps.maxRubberPx}
                        distanceThreshold={demoProps.distanceThreshold}
                        velocityThreshold={demoProps.velocityThreshold}
                        snapDurationMs={demoProps.snapDurationMs}
                    />
                    <ReloadBtn handler={handleReload} color="rgb(242, 251, 255)" />
                </div>
                <Remark>
                    Adjust number of items:
                    <span style={{ display: 'inline-block', marginLeft: '0.5rem' }}>
                        <ValueInput
                            demoProps={demoProps}
                            propName="itemNumbers"
                            onChange={setDemoProps}
                            inputType="number"
                            step={1}
                            min={1}
                            max={8}
                        />
                    </span>
                </Remark>
                <Remark>Drag horizontally (touch or mouse), or use the arrow buttons.</Remark>
            </section>
            <Props headers={tableHeaders} data={tableData} />
            <Snippets />
            <ComponentFooter />
        </>
    );
};

export default SwipeSliderContent;
