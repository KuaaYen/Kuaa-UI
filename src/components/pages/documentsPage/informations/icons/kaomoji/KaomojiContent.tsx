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

const KaomojiContent = () => {
    const mediaType = useMediaTypeContext();
    const isMobile = mediaType === 'mobile';
    
    const itemsData = [
        {name: 'CanIHaveSome', icon: <CanIHaveSome/>},
        {name: 'BokuSaikyou', icon: <BokuSaikyou/>},
        {name: 'Sadge', icon: <Sadge/>},
        {name: 'ThrowPetals', icon: <ThrowPetals/>},
        {name: 'WhatThe', icon: <WhatThe/>},
        {name: 'Noooo', icon: <Noooo/>},
        {name: 'Hehehe', icon: <Hehehe/>},
    ];

    const createItems = (itemsData: {name: string, icon: React.ReactNode}[]) => {
        return itemsData.map((item) => (
            <IconItem key={item.name} name={item.name} icon={item.icon} maxSize={isMobile ? 72 : 160} width="10rem" />
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