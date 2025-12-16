import IconModal from "./IconModal";
import { useState } from "react";
import getIconCode from "../staticIcons/hooks/getIconCode";
import getKaomojiCode from "../kaomoji/hooks/getKaomojiCode";
import IconContentTemplate from "./IconContentTemplate";

const IconItem = ({
    icon = 'icon', 
    name = 'Icon Name', 
    maxSize = 256, 
    width = "8rem", 
    height = "6rem", 
    fontSize = "2rem",
    group = 'static'
}: {
    icon?: React.ReactNode, 
    name?: string, 
    maxSize?: number, 
    width?: string, 
    height?: string, 
    fontSize?: string,
    group?: 'static' | 'kaomoji'
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const getSnippet = () => {
        if(group === 'static') {
            return getIconCode({name});
        } else if(group === 'kaomoji') {
            // console.log('getKaomojiCode', name);
            return getKaomojiCode({name});
        }
    }

    const {code, usage, name: iconName} = getSnippet() || {code: 'CODE', usage: 'USAGE', name: 'Icon-Name'};
    console.log('usage', usage, 'name', name);
    // const {code, usage, name: iconName} = getIconCode({name}) || {code: 'CODE', usage: 'USAGE', name: 'Icon-Name'};
    return (
        <>
            <div 
                className="icon-components-item-wrapper"
                onClick={() => setIsModalOpen(true)}
            >
                <div className='icon-components-item' style={{width, height, fontSize}}>
                    {icon}
                </div>
                <div className='icon-components-item-name' title={name}>
                    {name}
                </div>
            </div>
            <IconModal 
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                content={<IconContentTemplate icon={icon} name={iconName} code={code} usage={usage} maxSize={maxSize}/>}
            />
        </>
    );
};

export default IconItem;