import { useRef, memo } from 'react';
import { motion, useInView } from 'motion/react';
import RollingNumbers from '../../../shared/components/rollingNumbers/RollingNumbers';
import useSmoothNumber from '../../../../hooks/useSmoothNumber';
import ArrowUp from './arrow/ArrowUp';
import Magnifier from './magnifier/Magnifier';
import LanguagesIcon from './LanguagesIcon/LanguagesIcon';
import useMediaTypeContext from '../../../../context/useMediaTypeContext';

const Dashboard = () => {
    const mediaType = useMediaTypeContext();
    // const ref = useRef(null);
    const block1Ref = useRef(null);
    const block2Ref = useRef(null);
    const block3Ref = useRef(null);
    const isInView1 = useInView(block1Ref, { 
        amount: 0.5, 
    });
    const isInView2 = useInView(block2Ref, { 
        amount: 0.5, 
    });
    const isInView3 = useInView(block3Ref, { 
        amount: 0.5, 
    });

    const  block1Value = useSmoothNumber(isInView1, {
        startValue: 0,
        endValue: 80,
        duration: 1200,
        updateInterval: 100,
    });

    const block2Value = useSmoothNumber(isInView2, {
        startValue: 0,
        endValue: 100,
        duration: 1500,
        updateInterval: 100,
    });

    const block3Value = useSmoothNumber(isInView3, {
        startValue: 0,  
        endValue: 2,
        duration: 1300,
        updateInterval: 100,
    });

    const createDashboardBlocks = () => {
        switch(mediaType) {
            case 'pc':
                return (
                    <>
                        <section className="landing-page-dashboard-content-wrapper">
                            <div className="landing-page-dashboard-content-full">
                                <ArrowUp />
                                <h2 className="landing-page-dashboard-content-text-container">
                                    <div className="landing-page-brick-highlight main">
                                        <RollingNumbers value={block1Value} suffix="+" />
                                    </div>
                                    <p className="sub">Selected Components</p>
                                    <p className="desc">Updated continuously, including icons and filters</p>
                                </h2>
                            </div>
                        </section>
                        <div className="landing-page-dashboard-content-wrapper">
                            <section className="landing-page-dashboard-content-half">
                                <Magnifier />
                                <h2 className="landing-page-dashboard-content-text-container">
                                    <div className="landing-page-brick-highlight main">
                                        <RollingNumbers value={block2Value} suffix="%" />
                                    </div>
                                    <p className="sub">Free and Open Source</p>
                                    <p className="desc">Safe and no hidden fees</p>
                                </h2>
                            </section>
                            <section className="landing-page-dashboard-content-half">
                                <LanguagesIcon />
                                <h2 className="landing-page-dashboard-content-text-container">
                                    <div className="landing-page-brick-highlight main">
                                        <RollingNumbers value={block3Value} suffix="" />
                                    </div>
                                    <p className="sub">Supported Languages</p>
                                    <p className="desc">Use your favorite language, select JSX or TSX as you like</p>
                                </h2>                        
                                
                            </section>
                        </div>
                    </>
                )
            case 'tablet':
            case 'mobile':
                return (
                    <div className="landing-page-dashboard-content-mobile-wrapper">
                        <motion.section 
                            ref={block1Ref}
                            className="landing-page-dashboard-content-mobile"
                            initial={{opacity: 0,scale: 0.8}}
                            whileInView={{opacity: 1,scale: 1}}
                            viewport={{amount: 0.8}}
                            transition={{type: "spring",bounce: 0,delay: 0.3}}
                        >  
                            <ArrowUp mediaType={mediaType}/>
                            <h2 
                                className="landing-page-dashboard-content-text-container"
                                style={{ maxWidth: mediaType === 'mobile' ? '100%' : '50%'}}
                            >
                                <div 
                                    className="landing-page-brick-highlight main"
                                    style={{ fontSize: mediaType === 'mobile' ? '3rem' : '5rem'}}
                                >
                                    <RollingNumbers value={block1Value} suffix="+" />
                                </div>
                                <p className="sub" style={{ fontSize: mediaType === 'mobile' ? '1.3rem' : '1.6rem'}}>Selected Components</p>
                                <p className="desc">Updated continuously, including icons and filters</p>
                            </h2>
                        </motion.section>
                        <motion.section 
                            ref={block2Ref}
                            className="landing-page-dashboard-content-mobile"
                            initial={{opacity: 0,scale: 0.8}}
                            whileInView={{opacity: 1,scale: 1}}
                            viewport={{amount: 0.8}}
                            transition={{type: "spring",bounce: 0,delay: 0.3}}
                        >  
                            <Magnifier mediaType={mediaType}/>
                            <h2 
                                className="landing-page-dashboard-content-text-container"
                                style={{ maxWidth: mediaType === 'mobile' ? '100%' : '50%'}}
                            >
                                <div 
                                    className="landing-page-brick-highlight main"
                                    style={{ fontSize: mediaType === 'mobile' ? '3rem' : '5rem'}}
                                >
                                    <RollingNumbers value={block2Value} suffix="%" />
                                </div>
                                <p className="sub" style={{ fontSize: mediaType === 'mobile' ? '1.3rem' : '1.6rem'}}>Free and Open Source</p>
                                <p className="desc">Safe and no hidden fees</p>
                            </h2>
                        </motion.section>
                        <motion.section 
                            ref={block3Ref}
                            className="landing-page-dashboard-content-mobile"
                            initial={{opacity: 0,scale: 0.8}}
                            whileInView={{opacity: 1,scale: 1}}
                            viewport={{amount: 0.8}}
                            transition={{type: "spring",bounce: 0,delay: 0.1}}
                        >  
                            <LanguagesIcon mediaType={mediaType}/>
                            <h2 
                                className="landing-page-dashboard-content-text-container"
                                style={{ maxWidth: mediaType === 'mobile' ? '100%' : '50%'}}
                            >
                                <div 
                                    className="landing-page-brick-highlight main"
                                    style={{ fontSize: mediaType === 'mobile' ? '3rem' : '5rem'}}
                                >
                                    <RollingNumbers value={block3Value} suffix="" />
                                </div>
                                <p className="sub" style={{ fontSize: mediaType === 'mobile' ? '1.3rem' : '1.6rem'}}>Supported Languages</p>
                                <p className="desc">Use your favorite language, select JSX or TSX as you like</p>
                            </h2>                        
                        </motion.section>
                    </div>
                )
        }
    }


    return (
        <div 
            className="landing-page-dashboard-container"
            // ref={ref}
            style={{
                height: mediaType === 'pc' ? '800px' : '1200px',
                // marginTop: mediaType === 'pc' ? '0' : '11rem',
            }}
        >
            <article className="landing-page-dashboard">
                {createDashboardBlocks()}
            </article>
        </div>
    )
}

export default memo(Dashboard);