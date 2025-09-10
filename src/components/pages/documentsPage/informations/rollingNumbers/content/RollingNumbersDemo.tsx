// import './RollingNumbers.css';
import RollingNumbers from "../../../../../shared/components/rollingNumbers/RollingNumbers";
import useSmoothNumber from "../../../../../../hooks/useSmoothNumber";


const RollingNumbersDemo = ({value, prefix, suffix, gap, direction}: {value: number, prefix?: string, suffix?: string, gap?: number, direction?: 'up' | 'down'}) => {
    const smoothValue = useSmoothNumber(true, {
        startValue: 0,
        endValue: value,
        duration: 1000,
        updateInterval: 100,
    });
    return (
        <div className="rolling-numbers-demo-container">
            <div className="rolling-numbers-demo">
                <div className="rolling-numbers-demo-value">
                    <div className="rolling-numbers-demo-title">Default</div>
                    <div style={{textShadow: '2px 2px 0px var(--dark-eggshell)'}}>
                        <RollingNumbers value={value} prefix={prefix} suffix={suffix} gap={gap} direction={direction} />
                    </div>
                </div>
            </div>
            <div className="rolling-numbers-demo">
                <div className="rolling-numbers-demo-value">
                    <div className="rolling-numbers-demo-title">With hook</div>
                    <div style={{textShadow: '2px 2px 0px var(--dark-eggshell)'}}>
                        <RollingNumbers value={smoothValue} prefix={prefix} suffix={suffix} gap={gap} direction={direction} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RollingNumbersDemo;