import { useState } from "react";
import RollingNumbersDemo from "./RollingNumbersDemo";
import ReloadBtn from "../../sharedComponent/buttons/reloadButton/ReloadBtn";
import ValueInput from "../../sharedComponent/input/ValueInput";
import Props from "../../sharedComponent/table/Props";
import Snippets from "./Snippets";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
import Remark from "../../sharedComponent/remark/Remark";


interface DemoProps {
    value: number;
    suffix?: string;
    prefix?: string;
    gap?: number;
    direction?: 'up' | 'down';
}

const RollingNumbersContent = () => {

    const [reloadKey, setReloadKey] = useState(0);
    const [demoProps, setDemoProps] = useState<DemoProps>({
        value: 77777,
        suffix: '',
        prefix: '',
        gap: 0.2,
        direction: 'up',
    });

    const handleReload = () => {
        setReloadKey(prev => prev + 1);
    }


    const handleScrollToHook = () => {
        const hookElement = document.getElementById('rolling-numbers-hook');
        if (hookElement) {
            hookElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }


    const tableHeaders = ['Prop', 'Type','Value', 'Default', 'Description'];
    const tableData = [
        [
            'value', 
            'boolean', 
            <ValueInput  demoProps={demoProps} propName='value' onChange={setDemoProps} inputType='number' />,
            '10000',
            'Display number.'
        ],
        [
            'prefix', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='prefix' onChange={setDemoProps} inputType='string' />,
            '\'\'',
            'The text before the number.'
        ],
        [
            'suffix', 
            'string', 
            <ValueInput  demoProps={demoProps} propName='suffix' onChange={setDemoProps} inputType='string' />,
            '\'\'',
            'The text after the number.'
        ],
        [
            'gap', 
            'number', 
            <ValueInput  demoProps={demoProps} propName='gap' onChange={setDemoProps} inputType='number' step={0.1} min={0} />,
            '0.2',
            'The gap between the number, prefix and suffix (in em units).'
        ],
        [
            'direction', 
            '\'up\' | \'down\'', 
            <ValueInput  demoProps={demoProps} propName='direction' onChange={setDemoProps} inputType='switch' options={['up', 'down']} />,
            '\'up\'',
            'The direction of the animation (up or down).'
        ],
    ];

    return (
        <>
            <section className="documents-page-component-section">
                <div className='documents-page-component-demo'>
                    <RollingNumbersDemo 
                        key={reloadKey}
                        value={demoProps.value}
                        suffix={demoProps.suffix}
                        prefix={demoProps.prefix}
                        gap={demoProps.gap}
                        direction={demoProps.direction}
                    />
                    <ReloadBtn handler={handleReload} />
                </div>
                <Remark>
                    If you want the number to add one by one, please refer to the 
                    <span 
                        className="highlight-link-btn"
                        onClick={handleScrollToHook}
                    >
                        cusomized hook
                    </span> 
                    part.
                </Remark>
                <Remark>
                    This component does not include the label and font styles, you can customize them by yourself.
                </Remark>
            </section>
            <Props headers={tableHeaders} data={tableData} />
            <Snippets />
            <ComponentFooter />
        </>
    )
}

export default RollingNumbersContent;