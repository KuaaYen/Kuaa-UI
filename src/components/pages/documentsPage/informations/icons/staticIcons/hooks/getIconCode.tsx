// ========== stroke icons ==========
import homeCode from '../icons/stroke/HomeIcon.tsx?raw';
import docsCode from '../icons/stroke/DocsIcon.tsx?raw';
import imageCode from '../icons/stroke/ImageIcon.tsx?raw';
import reloadCode from '../icons/stroke/ReloadIcon.tsx?raw';
import menuCode from '../icons/stroke/MenuIcon.tsx?raw';
import moreCode from '../icons/stroke/MoreIcon.tsx?raw';
import githubCode from '../icons/stroke/GithubIcon.tsx?raw';
import threadsCode from '../icons/stroke/ThreadsIcon.tsx?raw';
import mailCode from '../icons/stroke/MailIcon.tsx?raw';
import checkCode from '../icons/stroke/CheckIcon.tsx?raw';
import crossCode from '../icons/stroke/CrossIcon.tsx?raw';
import maximizeCode from '../icons/stroke/Maximize.tsx?raw';
import minimizeCode from '../icons/stroke/Minimize.tsx?raw';
import restoreCode from '../icons/stroke/Restore.tsx?raw';
import gearCode from '../icons/stroke/Gear.tsx?raw';

// ========== stroke/arrow ==========
import arrowLeftCode from '../icons/stroke/arrow/ArrowLeft.tsx?raw';
import arrowRightCode from '../icons/stroke/arrow/ArrowRight.tsx?raw';
import shortArrowLeftCode from '../icons/stroke/arrow/ShortArrowLeft.tsx?raw';
import shortArrowRightCode from '../icons/stroke/arrow/ShortArrowRight.tsx?raw';

// ========== stroke/volume ==========
import volumeZeroCode from '../icons/stroke/volume/VolumeZero.tsx?raw';
import volumeLowCode from '../icons/stroke/volume/VolumeLow.tsx?raw';
import volumeMidCode from '../icons/stroke/volume/VolumeMid.tsx?raw';
import volumeMaxCode from '../icons/stroke/volume/VolumeMax.tsx?raw';
import volumeMuteCode from '../icons/stroke/volume/VolumeMute.tsx?raw';

// ========== fill icons ==========
import checkBoxFillCode from '../icons/fill/CheckBoxFill.tsx?raw';
import checkCircleFillCode from '../icons/fill/CheckCircleFill.tsx?raw';
import crossBoxFillCode from '../icons/fill/CrossBoxFill.tsx?raw';
import crossCircleFillCode from '../icons/fill/CrossCircleFill.tsx?raw';
import pinFillCode from '../icons/fill/PinFill.tsx?raw';
import computerFillCode from '../icons/fill/ComputerFill.tsx?raw';
import computerHalfFillCode from '../icons/fill/ComputerHalfFill.tsx?raw';
import bellFillCode from '../icons/fill/BellFill.tsx?raw';
import bellRingFillCode from '../icons/fill/BellRingFill.tsx?raw';

// ========== outline icons ==========
import checkBoxOutlineCode from '../icons/outline/CheckBoxOutline.tsx?raw';
import checkCircleOutlineCode from '../icons/outline/CheckCircleOutline.tsx?raw';
import crossBoxOutlineCode from '../icons/outline/CrossBoxOutline.tsx?raw';
import crossCircleOutlineCode from '../icons/outline/CrossCircleOutline.tsx?raw';

// ========== hollow icons ==========
import githubHollowCode from '../icons/hollow/GithubHollow.tsx?raw';
import pinHollowCode from '../icons/hollow/PinHollow.tsx?raw';
import computerHollowCode from '../icons/hollow/ComputerHollow.tsx?raw';
import bellHollowCode from '../icons/hollow/BellHollow.tsx?raw';
import bellRingHollowCode from '../icons/hollow/BellRingHollow.tsx?raw';

// ========== hollow/volume ==========
import volumeZeroHollowCode from '../icons/hollow/volume/VolumeZeroHollow.tsx?raw';
import volumeLowHollowCode from '../icons/hollow/volume/VolumeLowHollow.tsx?raw';
import volumeMidHollowCode from '../icons/hollow/volume/VolumeMidHollow.tsx?raw';
import volumeMaxHollowCode from '../icons/hollow/volume/VolumeMaxHollow.tsx?raw';
import volumeMuteHollowCode from '../icons/hollow/volume/VolumeMuteHollow.tsx?raw';

interface IconCodeItem {
    name: string;
    code: string;
    usage: string;
}

const getIconCode = ({name}: {name: string}) => {

    const iconCodeMap: Record<string, IconCodeItem> = {
        Home: {
            name: 'home',
            code: homeCode,
            usage: '<HomeIcon />',
        },
        Documents: {
            name: 'documents',
            code: docsCode,
            usage: '<DocsIcon />',
        },
        Image: {
            name: 'image',
            code: imageCode,
            usage: '<ImageIcon />',
        },
        Reload: {
            name: 'reload',
            code: reloadCode,
            usage: '<ReloadIcon />',
        },
        Menu: {
            name: 'menu',
            code: menuCode,
            usage: '<MenuIcon />',
        },
        More: {
            name: 'more',
            code: moreCode,
            usage: '<MoreIcon />',
        },
        Github: {
            name: 'github',
            code: githubCode,
            usage: '<GithubIcon />',
        },
        Threads: {
            name: 'threads',
            code: threadsCode,
            usage: '<ThreadsIcon />',
        },
        Mail: {
            name: 'mail',
            code: mailCode,
            usage: '<MailIcon />',
        },
        VolumeZero: {
            name: 'volume-zero',
            code: volumeZeroCode,
            usage: '<VolumeZero />',
        },
        VolumeLow: {
            name: 'volume-low',
            code: volumeLowCode,
            usage: '<VolumeLow />',
        },
        VolumeMid: {
            name: 'volume-mid',
            code: volumeMidCode,
            usage: '<VolumeMid />',
        },
        VolumeMax: {
            name: 'volume-max',
            code: volumeMaxCode,
            usage: '<VolumeMax />',
        },
        VolumeMute: {
            name: 'volume-mute',
            code: volumeMuteCode,
            usage: '<VolumeMute />',
        },
        VolumeZeroHollow: {
            name: 'volume-zero',
            code: volumeZeroHollowCode,
            usage: '<VolumeZeroHollow />',
        },
        VolumeLowHollow: {
            name: 'volume-low',
            code: volumeLowHollowCode,
            usage: '<VolumeLowHollow />',
        },
        VolumeMidHollow: {
            name: 'volume-mid',
            code: volumeMidHollowCode,
            usage: '<VolumeMidHollow />',
        },
        VolumeMaxHollow: {
            name: 'volume-max',
            code: volumeMaxHollowCode,
            usage: '<VolumeMaxHollow />',
        },
        VolumeMuteHollow: {
            name: 'volume-mute',
            code: volumeMuteHollowCode,
            usage: '<VolumeMuteHollow />',
        },
        ArrowRight: {
            name: 'arrow-right',
            code: arrowRightCode,
            usage: '<ArrowRight />',
        },
        ShortArrowRight: {
            name: 'short-arrow-right',
            code: shortArrowRightCode,
            usage: '<ShortArrowRight />',
        },
        ArrowLeft: {
            name: 'arrow-left',
            code: arrowLeftCode,
            usage: '<ArrowLeft />',
        },
        ShortArrowLeft: {
            name: 'short-arrow-left',
            code: shortArrowLeftCode,
            usage: '<ShortArrowLeft />',
        },
        Check: {
            name: 'check',
            code: checkCode,
            usage: '<CheckIcon />',
        },
        Cross: {
            name: 'cross',
            code: crossCode,
            usage: '<CrossIcon />',
        },
        CheckBoxFill: {
            name: 'check-box-fill',
            code: checkBoxFillCode,
            usage: '<CheckBoxFill />',
        },
        CrossBoxFill: {
            name: 'cross-box-fill',
            code: crossBoxFillCode,
            usage: '<CrossBoxFill />',
        },
        CheckBoxOutline: {
            name: 'check-box-outline',
            code: checkBoxOutlineCode,
            usage: '<CheckBoxOutline />',
        },
        CrossBoxOutline: {
            name: 'cross-box-outline',
            code: crossBoxOutlineCode,
            usage: '<CrossBoxOutline />',
        },
        CheckCircleFill: {
            name: 'check-circle-fill',
            code: checkCircleFillCode,
            usage: '<CheckCircleFill />',
        },
        CrossCircleFill: {
            name: 'cross-circle-fill',
            code: crossCircleFillCode,
            usage: '<CrossCircleFill />',
        },
        CheckCircleOutline: {
            name: 'check-circle-outline',
            code: checkCircleOutlineCode,
            usage: '<CheckCircleOutline />',
        },
        CrossCircleOutline: {
            name: 'cross-circle-outline',
            code: crossCircleOutlineCode,
            usage: '<CrossCircleOutline />',
        },
        GithubHollow: {
            name: 'github-hollow',
            code: githubHollowCode,
            usage: '<GithubHollow />',
        },
        PinFill: {
            name: 'pin-fill',
            code: pinFillCode,
            usage: '<PinFill />',
        },
        PinHollow: {
            name: 'pin-hollow',
            code: pinHollowCode,
            usage: '<PinHollow />',
        },
        Maximize: {
            name: 'maximize',
            code: maximizeCode,
            usage: '<Maximize />',
        },
        Restore: {
            name: 'restore',
            code: restoreCode,
            usage: '<Restore />',
        },
        Minimize: {
            name: 'minimize',
            code: minimizeCode,
            usage: '<Minimize />',
        },
        Gear: {
            name: 'gear',
            code: gearCode,
            usage: '<Gear />',
        },
        ComputerHollow: {
            name: 'computer-hollow',
            code: computerHollowCode,
            usage: '<ComputerHollow />',
        },
        ComputerFill: {
            name: 'computer-fill',
            code: computerFillCode,
            usage: '<ComputerFill />',
        },
        ComputerHalfFill: {
            name: 'computer-half-fill',
            code: computerHalfFillCode,
            usage: '<ComputerHalfFill />',
        },
        BellFill: {
            name: 'bell-fill',
            code: bellFillCode,
            usage: '<BellFill />',
        },
        BellRingFill: {
            name: 'bell-ring-fill',
            code: bellRingFillCode,
            usage: '<BellRingFill />',
        },
        BellHollow: {
            name: 'bell-hollow',
            code: bellHollowCode,
            usage: '<BellHollow />',
        },
        BellRingHollow: {
            name: 'bell-ring-hollow',
            code: bellRingHollowCode,
            usage: '<BellRingHollow />',
        },
    }
    return iconCodeMap[name as keyof typeof iconCodeMap];
}

export default getIconCode;