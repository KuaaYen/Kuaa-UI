import ComponentFooter from "../../sharedComponent/footer/ComponentFooter";
// basic
import IconItem from "../contentTemplate/IconItem";
import DocsIcon from "./icons/stroke/DocsIcon";
import HomeIcon from "./icons/stroke/HomeIcon";
import ImageIcon from "./icons/stroke/ImageIcon";
import ReloadIcon from "./icons/stroke/ReloadIcon";
import MenuIcon from "./icons/stroke/MenuIcon";
import CrossIcon from "./icons/stroke/CrossIcon";
import CheckIcon from "./icons/stroke/CheckIcon";
import MoreIcon from "./icons/stroke/MoreIcon";
import ShortArrowRight from "./icons/stroke/arrow/ShortArrowRight";
import ShortArrowLeft from "./icons/stroke/arrow/ShortArrowLeft";
import ArrowRight from "./icons/stroke/arrow/ArrowRight";
import ArrowLeft from "./icons/stroke/arrow/ArrowLeft";
import GithubIcon from "./icons/stroke/GithubIcon";
import ThreadsIcon from "./icons/stroke/ThreadsIcon";
import MailIcon from "./icons/stroke/MailIcon";
import VolumeZero from "./icons/stroke/volume/VolumeZero";
import VolumeLow from "./icons/stroke/volume/VolumeLow";
import VolumeMid from "./icons/stroke/volume/VolumeMid";
import VolumeMax from "./icons/stroke/volume/VolumeMax";
import VolumeMute from "./icons/stroke/volume/VolumeMute";
// fill
import CheckBoxFill from "./icons/fill/CheckBoxFill";
import CheckCircleFill from "./icons/fill/CheckCircleFill";
import CrossBoxFill from "./icons/fill/CrossBoxFill";
import CrossCircleFill from "./icons/fill/CrossCircleFill";
// outline
import CheckBoxOutline from "./icons/outline/CheckBoxOutline";
import CheckCircleOutline from "./icons/outline/CheckCircleOutline";
import CrossBoxOutline from "./icons/outline/CrossBoxOutline";
import CrossCircleOutline from "./icons/outline/CrossCircleOutline";
// hollow
import GithubHollow from "./icons/hollow/GithubHollow";
import VolumeZeroHollow from "./icons/hollow/volume/VolumeZeroHollow";
import VolumeLowHollow from "./icons/hollow/volume/VolumeLowHollow";
import VolumeMidHollow from "./icons/hollow/volume/VolumeMidHollow";
import VolumeMaxHollow from "./icons/hollow/volume/VolumeMaxHollow";
import VolumeMuteHollow from "./icons/hollow/volume/VolumeMuteHollow";

const StaticIconsContent = ({mediaType}: {mediaType: 'pc' | 'mobile' | 'tablet'}) => {
    const isMobile = mediaType === 'mobile';

    const itemsData = [
        {name: 'Home', icon: <HomeIcon/>},
        {name: 'Documents', icon: <DocsIcon/>},
        {name: 'Image', icon: <ImageIcon/>},
        {name: 'Reload', icon: <ReloadIcon/>},
        {name: 'Menu', icon: <MenuIcon/>},
        {name: 'More', icon: <MoreIcon/>},
        {name: 'Github', icon: <GithubIcon/>},
        {name: 'GithubHollow', icon: <GithubHollow/>},
        {name: 'Threads', icon: <ThreadsIcon/>},
        {name: 'Mail', icon: <MailIcon/>},
        {name: 'VolumeZero', icon: <VolumeZero/>},
        {name: 'VolumeLow', icon: <VolumeLow/>},
        {name: 'VolumeMid', icon: <VolumeMid/>},
        {name: 'VolumeMax', icon: <VolumeMax/>},
        {name: 'VolumeMute', icon: <VolumeMute/>},
        {name: 'VolumeZeroHollow', icon: <VolumeZeroHollow/>},
        {name: 'VolumeLowHollow', icon: <VolumeLowHollow/>},
        {name: 'VolumeMidHollow', icon: <VolumeMidHollow/>},
        {name: 'VolumeMaxHollow', icon: <VolumeMaxHollow/>},
        {name: 'VolumeMuteHollow', icon: <VolumeMuteHollow/>},
        {name: 'ArrowRight', icon: <ArrowRight/>},
        {name: 'ShortArrowRight', icon: <ShortArrowRight/>},
        {name: 'ArrowLeft', icon: <ArrowLeft/>},
        {name: 'ShortArrowLeft', icon: <ShortArrowLeft/>},
        {name: 'Check', icon: <CheckIcon/>},
        {name: 'Cross', icon: <CrossIcon/>},
        {name: 'CheckBoxFill', icon: <CheckBoxFill/>},
        {name: 'CrossBoxFill', icon: <CrossBoxFill/>},
        {name: 'CheckBoxOutline', icon: <CheckBoxOutline/>},
        {name: 'CrossBoxOutline', icon: <CrossBoxOutline/>},
        {name: 'CheckCircleFill', icon: <CheckCircleFill/>},
        {name: 'CrossCircleFill', icon: <CrossCircleFill/>},
        {name: 'CheckCircleOutline', icon: <CheckCircleOutline/>},
        {name: 'CrossCircleOutline', icon: <CrossCircleOutline/>},
    ];

    const createItems = (itemsData: {name: string, icon: React.ReactNode}[]) => {
        return itemsData.map((item) => (
            <IconItem key={item.name} name={item.name} icon={item.icon} group='static' />
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

export default StaticIconsContent;