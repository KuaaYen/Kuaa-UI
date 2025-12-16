import CanIHaveSome from "./icons/CanIHaveSome";
import IconItem from "../contentTemplate/IconItem";
import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
import useMediaTypeContext from "../../../../../../context/useMediaTypeContext";
import BokuSaikyou from "./icons/BokuSaikyou";
import Sadge from "./icons/Sadge";
import ThrowPetals from "./icons/ThrowPetals";
import WhatThe from "./icons/WhatThe";
import Noooo from "./icons/Noooo";
import Hehehe from "./icons/Hehehe";
import IGiveUp from "./icons/IGiveUp";
import Yay from "./icons/Yay";
import MysteriousSmile from "./icons/MysteriousSmile";
import GoAway from "./icons/GoAway";
import WhatDoYouMean from "./icons/WhatDoYouMean";
import Chubby from "./icons/Chubby";
import ThrowPetals2 from "./icons/ThrowPetals2";
import Sigh from "./icons/Sigh";
import Blush from "./icons/Blush";
import Shy from "./icons/Shy";
import YeahOkSure from "./icons/YeahOkSure";
import IUnderstand from "./icons/IUnderstand";
import Whatever from "./icons/Whatever";
import ImJustAKid from "./icons/ImJustAKid";
import HighFive from "./icons/HighFive";
import YouCanDoIt from "./icons/YouCanDoIt";
import Cool from "./icons/Cool";
import Fantastic from "./icons/Fantastic";
import HeartForYou from "./icons/HeartForYou";
import ThatsNonsense from "./icons/ThatsNonsense";
import Hype from "./icons/Hype";
import AnythingYouSay from "./icons/AnythingYouSay";
import Hehe from "./icons/Hehe";
import YouCanDoIt2 from "./icons/YouCanDoIt2";
import Tasty from "./icons/Tasty";
import HeartForYou2 from "./icons/HeartForYou2";
import LookAtYou from "./icons/LookAtYou";
import Blush2 from "./icons/Blush2";
import Wail from "./icons/Wail";
import Why from "./icons/Why";
import WhatThe2 from "./icons/WhatThe2";
import ZokuZoku1 from "./icons/ZokuZoku1";
import ZokuZoku2 from "./icons/ZokuZoku2";

const KaomojiContent = () => {
    const mediaType = useMediaTypeContext();
    const isMobile = mediaType === 'mobile';
    
    const itemsData = [
        {name: 'CanIHaveSome', icon: <CanIHaveSome/>, maxSize: 96},
        {name: 'BokuSaikyou', icon: <BokuSaikyou/>},
        {name: 'Sadge', icon: <Sadge/>},
        {name: 'ThrowPetals', icon: <ThrowPetals/>},
        {name: 'ThrowPetals2', icon: <ThrowPetals2/>, maxSize: 96},
        {name: 'WhatThe', icon: <WhatThe/>},
        {name: 'WhatThe2', icon: <WhatThe2/>},
        {name: 'Noooo', icon: <Noooo/>},
        {name: 'Hehe', icon: <Hehe/>},
        {name: 'Hehehe', icon: <Hehehe/>},
        {name: 'IGiveUp', icon: <IGiveUp/>},
        {name: 'Yay', icon: <Yay/>},
        {name: 'MysteriousSmile', icon: <MysteriousSmile/>},
        {name: 'GoAway', icon: <GoAway/>},
        {name: 'WhatDoYouMean', icon: <WhatDoYouMean/>},
        {name: 'Chubby', icon: <Chubby/>},
        {name: 'Sigh', icon: <Sigh/>},
        {name: 'Blush', icon: <Blush/>},
        {name: 'Blush2', icon: <Blush2/>},
        {name: 'Shy', icon: <Shy/>},    
        {name: 'YeahOkSure', icon: <YeahOkSure/>},  
        {name: 'IUnderstand', icon: <IUnderstand/>},
        {name: 'Whatever', icon: <Whatever/>},
        {name: 'ImJustAKid', icon: <ImJustAKid/>},
        {name: 'HighFive', icon: <HighFive/>, maxSize: 96},
        {name: 'YouCanDoIt', icon: <YouCanDoIt/>},
        {name: 'YouCanDoIt2', icon: <YouCanDoIt2/>},
        {name: 'Cool', icon: <Cool/>},
        {name: 'Fantastic', icon: <Fantastic/>},
        {name: 'HeartForYou', icon: <HeartForYou/>},
        {name: 'HeartForYou2', icon: <HeartForYou2/>},
        {name: 'ThatsNonsense', icon: <ThatsNonsense/>},
        {name: 'Hype', icon: <Hype/>, maxSize: 96},
        {name: 'AnythingYouSay', icon: <AnythingYouSay/>},
        {name: 'Tasty', icon: <Tasty/>},
        {name: 'LookAtYou', icon: <LookAtYou/>},
        {name: 'Wail', icon: <Wail/>, maxSize: 96},
        {name: 'Why', icon: <Why/>},
        {name: 'ZokuZoku1', icon: <ZokuZoku1/>, maxSize: 96},
        {name: 'ZokuZoku2', icon: <ZokuZoku2/>, maxSize: 96},
    ];

    const createItems = (itemsData: {name: string, icon: React.ReactNode, maxSize?: number}[]) => {
        const getMaxSize = (maxSize?: number) => {
            if(isMobile) {
                return maxSize ? maxSize/2 + 8 : 72;
            } else {
                return maxSize ? maxSize : 160;
            };
        }

        return itemsData.map((item) => (
            <IconItem 
                key={item.name} 
                name={item.name} 
                icon={item.icon} 
                maxSize={getMaxSize(item.maxSize)} 
                width={isMobile ? '8rem' : '9rem'} 
                fontSize={isMobile ? '1.6rem' : '1.8rem'}
                group='kaomoji'
            />
        ))
    }

    return (
        <>
            <div 
                className='icon-components-group'
                style={{
                    justifyContent: isMobile ? 'space-between' : 'flex-start',
                    padding: isMobile ? '1rem 2rem' : '1rem 0rem',
                }}
            >
                {createItems(itemsData)}
            </div>
            <ComponentFooter />
        </>
    )
}
export default KaomojiContent;