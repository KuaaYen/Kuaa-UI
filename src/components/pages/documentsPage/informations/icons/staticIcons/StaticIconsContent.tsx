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
        {name: 'home', icon: <HomeIcon/>},
        {name: 'documents', icon: <DocsIcon/>},
        {name: 'image', icon: <ImageIcon/>},
        {name: 'reload', icon: <ReloadIcon/>},
        {name: 'menu', icon: <MenuIcon/>},
        {name: 'more', icon: <MoreIcon/>},
        {name: 'github', icon: <GithubIcon/>},
        {name: 'githubHollow', icon: <GithubHollow/>},
        {name: 'threads', icon: <ThreadsIcon/>},
        {name: 'mail', icon: <MailIcon/>},
        {name: 'volumeZero', icon: <VolumeZero/>},
        {name: 'volumeLow', icon: <VolumeLow/>},
        {name: 'volumeMid', icon: <VolumeMid/>},
        {name: 'volumeMax', icon: <VolumeMax/>},
        {name: 'volumeMute', icon: <VolumeMute/>},
        {name: 'volumeZeroHollow', icon: <VolumeZeroHollow/>},
        {name: 'volumeLowHollow', icon: <VolumeLowHollow/>},
        {name: 'volumeMidHollow', icon: <VolumeMidHollow/>},
        {name: 'volumeMaxHollow', icon: <VolumeMaxHollow/>},
        {name: 'volumeMuteHollow', icon: <VolumeMuteHollow/>},
        {name: 'arrowRight', icon: <ArrowRight/>},
        {name: 'shortArrowRight', icon: <ShortArrowRight/>},
        {name: 'arrowLeft', icon: <ArrowLeft/>},
        {name: 'shortArrowLeft', icon: <ShortArrowLeft/>},
        {name: 'check', icon: <CheckIcon/>},
        {name: 'cross', icon: <CrossIcon/>},
        {name: 'checkBoxFill', icon: <CheckBoxFill/>},
        {name: 'crossBoxFill', icon: <CrossBoxFill/>},
        {name: 'checkBoxOutline', icon: <CheckBoxOutline/>},
        {name: 'crossBoxOutline', icon: <CrossBoxOutline/>},
        {name: 'checkCircleFill', icon: <CheckCircleFill/>},
        {name: 'crossCircleFill', icon: <CrossCircleFill/>},
        {name: 'checkCircleOutline', icon: <CheckCircleOutline/>},
        {name: 'crossCircleOutline', icon: <CrossCircleOutline/>},
    ];

    const createItems = (itemsData: {name: string, icon: React.ReactNode}[]) => {
        return itemsData.map((item) => (
            <IconItem key={item.name} name={item.name} icon={item.icon} />
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