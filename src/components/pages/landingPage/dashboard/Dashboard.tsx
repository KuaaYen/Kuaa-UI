import { useRef, memo } from 'react';
import { useInView } from 'motion/react';
import NumberFlow from '@number-flow/react';
import useSmoothNumber from '../../../../hooks/useSmoothNumber';
import ArrowUp from './arrow/ArrowUp';
import Magnifier from './magnifier/Magnifier';
import LanguagesIcon from './LanguagesIcon/LanguagesIcon';

const Dashboard = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        amount: 0.5, 
    });

    const {currentValue: block1Value} = useSmoothNumber(isInView, {
        startValue: 1,
        endValue: 10,
        duration: 1200,
        updateInterval: 100,
    });

    const {currentValue: block2Value} = useSmoothNumber(isInView, {
        startValue: 1,
        endValue: 100,
        duration: 1500,
        updateInterval: 100,
    });

    const {currentValue: block3Value} = useSmoothNumber(isInView, {
        startValue: 1,  
        endValue: 2,
        duration: 1300,
        updateInterval: 100,
    });

    return (
        <div className="landing-page-dashboard-container" ref={ref}>
            <article className="landing-page-dashboard">
                <section className="landing-page-dashboard-content-wrapper">
                    <div className="landing-page-dashboard-content-full">
                        <ArrowUp />
                        <h2 className="landing-page-dashboard-content-text-container">
                            <p className="landing-page-brick-highlight main">
                                <NumberFlow
                                    value={block1Value}
                                    suffix="+"
                                    willChange={true}
                                    transformTiming={{
                                        duration: 300,
                                        easing: "ease-in-out",
                                    }}
                                />
                            </p>
                            <p className="sub">Selected Components</p>
                            <p className="desc">Updated continuously, including icons and filters</p>
                        </h2>
                    </div>
                </section>
                <div className="landing-page-dashboard-content-wrapper">
                    <section className="landing-page-dashboard-content-half">
                        <Magnifier />
                        <h2 className="landing-page-dashboard-content-text-container">
                            <p className="landing-page-brick-highlight main">
                                <NumberFlow
                                    value={block2Value}
                                    suffix="%"
                                    willChange={true}
                                    transformTiming={{
                                        duration: 300,
                                        easing: "ease-in-out",
                                    }}
                                />
                            </p>
                            <p className="sub">Free and Open Source</p>
                            <p className="desc">Safe and no hidden fees</p>
                        </h2>
                    </section>
                    <section className="landing-page-dashboard-content-half">
                        <LanguagesIcon />
                        <h2 className="landing-page-dashboard-content-text-container">
                            <p className="landing-page-brick-highlight main">
                                <NumberFlow
                                    value={block3Value}
                                    willChange={true}
                                    transformTiming={{
                                        duration: 300,
                                        easing: "ease-in-out",
                                    }}
                                />
                            </p>
                            <p className="sub">Supported Languages</p>
                            <p className="desc">Use your favorite language, select JSX or TSX as you like</p>
                        </h2>                        
                        
                    </section>
                </div>
            </article>
        </div>
    )
}

export default memo(Dashboard);