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
    width: number;
    aspectRatio: number;
    dotColor: string;
    loop: boolean;
    itemWidthRatio: number;
    gap: number;
    rubberBandFactor: number;
    maxRubberPx: number;
    distanceThreshold: number;
    velocityThreshold: number;
    snapDurationMs: number;
    showNavButtons: boolean;
    showIndicator: boolean;
    itemNumbers: number;
}

const SwipeSliderContent = () => {
    const mediaType = useMediaTypeContext();
    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        width: 600,
        aspectRatio: parseFloat((16 / 9).toFixed(2)),
        dotColor: '#E07A5F',
        loop: false,
        itemWidthRatio: 1,
        gap: 12,
        rubberBandFactor: 0.32,
        maxRubberPx: 72,
        distanceThreshold: 0.22,
        velocityThreshold: 0.35,
        snapDurationMs: 500,
        showNavButtons: true,
        showIndicator: true,
        itemNumbers: 5,
    });

    useEffect(() => {
        setReloadKey((prev) => prev + 1);
    }, [demoProps.itemNumbers]);

    // useEffect(() => {
    //     const maxWidth = mediaType === 'mobile' ? 300 : mediaType === 'tablet' ? 480 : 700;
    //     setDemoProps((prev) => ({ ...prev, width: Math.min(prev.width, maxWidth) }));
    // }, [mediaType]);

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

    const WidthDesc = () => (
        <div className="table-desc-container">
            <div className="table-desc-item">Width of the slider container.</div>
            <div className="table-desc-item">Accepts a number (treated as px) or any valid CSS width string.</div>
            <div className="table-desc-item">e.g. <code>600</code>, <code>'100%'</code>, <code>'60vw'</code>, <code>'40rem'</code></div>
        </div>
    );

    const AspectRatioDesc = () => (
        <div className="table-desc-container">
            <div className="table-desc-item">Aspect ratio (width ÷ height) of the slider container.</div>
            <div className="table-desc-item">Accepts a number or a CSS aspect-ratio string.</div>
            <div className="table-desc-item">e.g. <code>1.78</code>, <code>'16/9'</code>, <code>'4/3'</code>, <code>'1'</code></div>
        </div>
    );

    const createPropInput = (propName: 'width' | 'aspectRatio') => {
        if (propName === 'width') {
            const max = mediaType === 'mobile' ? 300 : mediaType === 'tablet' ? 480 : 700;
            return (
                <ValueInput
                    demoProps={demoProps}
                    propName="width"
                    onChange={setDemoProps}
                    inputType={mediaType === 'pc' ? 'slider' : 'number'}
                    step={10}
                    min={200}
                    max={max}
                />
            );
        }
        return (
            <ValueInput
                demoProps={demoProps}
                propName="aspectRatio"
                onChange={setDemoProps}
                inputType={mediaType === 'pc' ? 'slider' : 'number'}
                step={0.01}
                min={0.5}
                max={2.5}
            />
        );
    };

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
            'width',
            'number | string',
            createPropInput('width'),
            '600',
            <WidthDesc />,
        ],
        [
            'aspectRatio',
            'number | string',
            createPropInput('aspectRatio'),
            '1.78',
            <AspectRatioDesc />,
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
            'showNavButtons',
            'boolean',
            <ValueInput
                demoProps={demoProps}
                propName="showNavButtons"
                onChange={setDemoProps}
                inputType="boolean"
            />,
            'true',
            'When false, the left and right arrow buttons are hidden.',
        ],
        [
            'showIndicator',
            'boolean',
            <ValueInput
                demoProps={demoProps}
                propName="showIndicator"
                onChange={setDemoProps}
                inputType="boolean"
            />,
            'true',
            'When false, the bottom dot index indicator is hidden.',
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
                        width={demoProps.width}
                        aspectRatio={demoProps.aspectRatio}
                        dotColor={demoProps.dotColor}
                        loop={demoProps.loop}
                        itemWidthRatio={demoProps.itemWidthRatio}
                        gap={demoProps.gap}
                        rubberBandFactor={demoProps.rubberBandFactor}
                        maxRubberPx={demoProps.maxRubberPx}
                        distanceThreshold={demoProps.distanceThreshold}
                        velocityThreshold={demoProps.velocityThreshold}
                        snapDurationMs={demoProps.snapDurationMs}
                        showNavButtons={demoProps.showNavButtons}
                        showIndicator={demoProps.showIndicator}
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
