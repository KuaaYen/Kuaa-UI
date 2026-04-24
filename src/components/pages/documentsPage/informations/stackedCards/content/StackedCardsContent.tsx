import { ReactNode, useMemo, useState } from 'react';
import useMediaTypeContext from '../../../../../../context/useMediaTypeContext';
import ReloadBtn from '../../sharedComponent/buttons/reloadButton/ReloadBtn';
import ValueInput from '../../sharedComponent/input/ValueInput';
import Props from '../../sharedComponent/table/Props';
import Remark from '../../sharedComponent/remark/Remark';
import ComponentFooter from '../../sharedComponent/footer/ComponentFooter';
import Snippets from './Snippets.tsx';
import StackedCardsDemo from './StackedCardsDemo';

interface DemoProps {
    distanceThresholdRatio: number;
    velocityThreshold: number;
    snapDurationMs: number;
    rubberBandFactor: number;
    maxRubberPx: number;
    edgePeekPx: number;
    scatterXRangePx: number;
    scatterYRangePx: number;
    scatterRotateDeg: number;
    cardRadiusPx: number;
}

const StackedCardsContent = () => {
    const mediaType = useMediaTypeContext();
    const [seedKey, setSeedKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        distanceThresholdRatio: 0.3,
        velocityThreshold: 0.6,
        snapDurationMs: 500,
        rubberBandFactor: 0.32,
        maxRubberPx: 72,
        edgePeekPx: 14,
        scatterXRangePx: 6,
        scatterYRangePx: 6,
        scatterRotateDeg: 3,
        cardRadiusPx: 16,
    });

    const items = useMemo<ReactNode[]>(() => {
        const gradients = [
            'linear-gradient(135deg, #000 0%, #f2cc8f 45%, #e07a5f 70%, #b5179e 100%)',
            'linear-gradient(135deg, #3D405B 0%, #81B29A 55%, #F2CC8F 100%)',
            'linear-gradient(135deg, #0f172a 0%, #3b82f6 50%, #22c55e 100%)',
            'linear-gradient(135deg, #111827 0%, #ef4444 55%, #f59e0b 100%)',
            'linear-gradient(135deg, #1f2937 0%, #a855f7 55%, #06b6d4 100%)',
            'linear-gradient(135deg, #0b1320 0%, #e07a5f 50%, #f4f1de 100%)',
        ];

        return gradients.map((bg, i) => (
            <div
                key={`demo-card-${i}`}
                style={{
                    width: '100%',
                    height: '100%',
                    background: bg,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: mediaType === 'mobile' ? '1.1rem' : '1.4rem',
                    color: 'rgba(255,255,255,0.92)',
                    fontFamily: 'roboto',
                    boxSizing: 'border-box',
                }}
            >
                <div style={{ fontSize: mediaType === 'mobile' ? '1.4rem' : '1.8rem', fontWeight: 700 }}>
                    {`Card ${i + 1}`}
                </div>
                <div style={{ fontSize: mediaType === 'mobile' ? '0.85rem' : '1rem', opacity: 0.9 }}>
                    Drag horizontally. Right = next, left = previous.
                </div>
            </div>
        ));
    }, [mediaType]);

    const tableHeaders = ['Prop', 'Type', 'Value', 'Default', 'Description'];
    const tableData = [
        ['items', 'ReactNode[]', '—', '—', 'Cards to display. The current card is shown on top.'],
        [
            'distanceThresholdRatio',
            'number',
            <ValueInput
                demoProps={demoProps}
                propName="distanceThresholdRatio"
                onChange={setDemoProps}
                inputType="number"
                step={0.05}
                min={0.05}
                max={0.8}
            />,
            '0.3',
            'Drag distance (× card width) required to change card if velocity is low.',
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
            '0.6',
            'Pointer velocity (px/ms) to trigger a change on flick.',
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
            'Duration of the snap-back animation in milliseconds.',
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
            'Dampens drag past the first/last card.',
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
                max={240}
            />,
            '72',
            'Maximum rubber-band stretch (px) at the ends.',
        ],
        [
            'edgePeekPx',
            'number',
            <ValueInput demoProps={demoProps} propName="edgePeekPx" onChange={setDemoProps} inputType="number" step={1} min={0} max={40} />,
            '14',
            'Base x offset per stacked card so edges peek on the right.',
        ],
        [
            'scatterXRangePx',
            'number',
            <ValueInput
                demoProps={demoProps}
                propName="scatterXRangePx"
                onChange={setDemoProps}
                inputType="number"
                step={1}
                min={0}
                max={40}
            />,
            '6',
            'Random-ish horizontal scatter range (px) for the casual stack feel.',
        ],
        [
            'scatterYRangePx',
            'number',
            <ValueInput
                demoProps={demoProps}
                propName="scatterYRangePx"
                onChange={setDemoProps}
                inputType="number"
                step={1}
                min={0}
                max={40}
            />,
            '6',
            'Random-ish vertical scatter range (px) for the casual stack feel.',
        ],
        [
            'scatterRotateDeg',
            'number',
            <ValueInput
                demoProps={demoProps}
                propName="scatterRotateDeg"
                onChange={setDemoProps}
                inputType="number"
                step={0.5}
                min={0}
                max={18}
            />,
            '3',
            'Random-ish rotation range (deg) for the casual stack feel.',
        ],
        [
            'cardRadiusPx',
            'number',
            <ValueInput
                demoProps={demoProps}
                propName="cardRadiusPx"
                onChange={setDemoProps}
                inputType="number"
                step={1}
                min={0}
                max={48}
            />,
            '16',
            'Border radius (px) for cards.',
        ],
        ['seed', 'number | string', '—', 'stable default seed', 'Seed for deterministic scatter (prevents re-render jitter).'],
        ['onIndexChange', '(index: number) => void', '—', 'undefined', 'Called after a successful card change.'],
        ['className', 'string', '—', "''", 'Optional class name on the root element.'],
        ['style', 'React.CSSProperties', '—', 'undefined', 'Optional inline style on the root element.'],
    ];

    return (
        <>
            <section className="documents-page-component-section">
                <div className="documents-page-component-demo" style={{ backgroundColor: 'var(--basic-purple)', overflow: 'hidden' }}>
                    <StackedCardsDemo
                        key={seedKey}
                        items={items}
                        distanceThresholdRatio={demoProps.distanceThresholdRatio}
                        velocityThreshold={demoProps.velocityThreshold}
                        snapDurationMs={demoProps.snapDurationMs}
                        rubberBandFactor={demoProps.rubberBandFactor}
                        maxRubberPx={demoProps.maxRubberPx}
                        edgePeekPx={demoProps.edgePeekPx}
                        scatterXRangePx={demoProps.scatterXRangePx}
                        scatterYRangePx={demoProps.scatterYRangePx}
                        scatterRotateDeg={demoProps.scatterRotateDeg}
                        cardRadiusPx={demoProps.cardRadiusPx}
                        seed={seedKey}
                    />
                    <ReloadBtn handler={() => setSeedKey((v) => v + 1)} color="rgb(242, 251, 255)" />
                </div>
                <Remark>Drag horizontally (touch or mouse). Drag left = next, drag right = previous.</Remark>
                <Remark>
                    At the ends, you can still drag with a rubber-band feel, but it won’t change cards.
                </Remark>
            </section>
            <Props headers={tableHeaders} data={tableData} />
            <Snippets />
            <ComponentFooter />
        </>
    );
};

export default StackedCardsContent;

