const getIconCode = ({name}: {name: string}) => {
    const iconCodeMap = {
        home: {
            name: 'home',
            code: `
const HomeIcon = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >
            <path 
                d="M 10 55 L 50 15 L 90 56 L 80 56 L 80 85 L 60 85 L 60 70 C 58 60 42 60 40 70 L 40 85 L 20 85 L 20 55 L 10 55"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}

export default HomeIcon;
            `,
            usage: `
<HomeIcon />
            `,
        },
        documents: {
            name: 'documents',
            code: `
const DocsIcon = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >
            <path 
                d="M 30 15 L 65 15 L 80 30 L 80 75 C 80 80 75 85 70 85 L 30 85 C 25 85 20 80 20 75 L 20 25 C 20 20 25 15 30 15 M 65 15 L 65 25 C 65 28 67 30 70 30 L 80 30"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 30 26 L 53 26 L 53 37 L 30 37 L 30 26 M 30 50 l 38 0 M 30 60 l 30 0 M 30 70 l 20 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>   
    )
}

export default DocsIcon; 
            `,
            usage: `
<DocsIcon />
            `,
        },
        image: {
            name: 'image',
            code: `
const ImageIcon = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >
            <path 
                d="M 20 15 L 80 15 C 85 15 90 20 90 25 L 90 75 C 90 80 85 85 80 85 L 20 85 C 15 85 10 80 10 75 L 10 25 C 10 20 15 15 20 15"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 19 70 L 37 52 L 45 65 L 70 50 L 81 70 C 82 72 81 73 79 73 L 21 73 C 18 73 17 72 19 70 M 64 39 A 5 5 0 0 0 52 39 A 5 5 0 0 0 64 39"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}

export default ImageIcon;
            `,
            usage: `
<ImageIcon />
            `,
        },
        reload: {
            name: 'reload',
            code: `
const ReloadIcon = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >
            <path 
                d="M 20 50 A 30 30 0 0 0 50 80 A 30 30 0 0 0 80 50 A 30 30 0 0 0 29 28 M 31 17 L 29 28 L 40 30"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>   
    )
}

export default ReloadIcon;  
            `,
            usage: `
<ReloadIcon />
            `,
        },
        menu: {
            name: 'menu',
            code: `
const MenuIcon = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >
            <path 
                d="M 15 30 l 65 0 M 15 50 l 50 0 M 15 70 l 35 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>   
    )
}

export default MenuIcon; 
            `,
            usage: `
<MenuIcon />
            `,
        },
        more: {
            name: 'more',
            code: `
const MoreIcon = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >            
            <path 
                d="M 70 50 l 0 0 M 50 50 l 0 0 M 30 50 l 0 0" 
                fill="transparent"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default MoreIcon;
            `,
            usage: `
<MoreIcon />
            `,
        },
        github: {
            name: 'github',
            code: `
const GithubIcon = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 38.75 89.566 c 0.091 -10.277 0.091 -10.277 0.091 -10.277 c -15.876 8.607 -21.547 -9.285 -24.508 -12.333 
                c -5.469 -4.889 -0.536 -9.787 5.433 -5.149 c 6.677 4.615 3.815 13.794 18.992 8.438 c 0.755 -1.637 1.355 -3.322 1.13 -4.224 
                c -15.655 0.637 -28.505 -22.454 -15.356 -38.691 c -1.859 -5.52 -1.859 -10.479 1.031 -13.386 c 4.859 -2.345 10.491 1.088 13.392 4.836 
                c 7.619 -2.73 18.605 -2.49 24.786 0.349 c 4.658 -3.383 9.402 -5.737 14.104 -5.376 c 3.134 4.577 2.046 11.106 0.837 13.162 
                c 10.12 16.902 3.815 38.126 -14.224 39.645 c -0.529 1.978 1.485 3.217 1.676 7.802 l 0.088 15.204 l -27.422 0.011"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>   
    )
}

export default GithubIcon;
            `,
            usage: `
<GithubIcon />
            `,
        },
        githubHollow: {
            name: 'github-hollow',
            code: `
const GithubHollow = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 38.75 89.566 c 0.091 -10.277 0.091 -10.277 0.091 -10.277 c -15.876 8.607 -21.547 -9.285 -24.508 -12.333 
                c -5.469 -4.889 -0.536 -9.787 5.433 -5.149 c 6.677 4.615 3.815 13.794 18.992 8.438 c 0.755 -1.637 1.355 -3.322 1.13 -4.224
                c -15.655 0.637 -28.505 -22.454 -15.356 -38.691 c -1.859 -5.52 -1.859 -10.479 1.031 -13.386 c 
                4.859 -2.345 10.491 1.088 13.392 4.836 c 7.619 -2.73 18.605 -2.49 24.786 0.349 c 4.658 -3.383 9.402 -5.737 14.104 -5.376 
                c 3.134 4.577 2.046 11.106 0.837 13.162 c 10.12 16.902 3.815 38.126 -14.224 39.645 c -0.529 1.978 1.485 3.217 1.676 7.802 
                l 0.088 15.204 l -27.422 0.011"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>   
    )
}

export default GithubHollow;
            `,
            usage: `
<GithubHollow />
            `,
        },
        threads: {
            name: 'threads',
            code: `
const ThreadsIcon = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 78 38 C 74 14 38 10 26 30 C 20 41 18 72 37 80 C 50 86 74 83 75 65 C 77 44 37 43 39 58 C 41 67 59 69 63 55 C 68 34 48 27 40 39"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
        </svg>   
    )
}

export default ThreadsIcon;
            `,
            usage: `
<ThreadsIcon />
            `,
        },
        mail: {
            name: 'mail',
            code: `
const MailIcon = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 15 30 c 0 -5 5 -10 10 -10 l 49 0 c 5 0 10 5 10 10 l 0 40 c 0 5 -5 10 -10 10 l -49 0 c -5 0 -10 -5 -10 -10 l 0 -40 m 0 0 l 25 20 C 47 55 53 55 60 50 L 84 30"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}
export default MailIcon;
            `,
            usage: `
<MailIcon />
            `,
        },
        volumeZero: {
            name: 'volume-zero',
            code: `
const VolumeZero = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 17 40 l 0 20 l 10 0 l 20 12 l 0 -44 l -20 12 l -10 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}
export default VolumeZero;
            `,
            usage: `
<VolumeZero />
            `,
        },
        volumeLow: {
            name: 'volume-low',
            code: `
const VolumeLow = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 17 40 l 0 20 l 10 0 l 20 12 l 0 -44 l -20 12 l -10 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 58 40 c 5 4 5 16 0 20"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}
export default VolumeLow;
            `,
            usage: `
<VolumeLow />
            `,
        },
        volumeMid: {
            name: 'volume-mid',
            code: `
const VolumeMid = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 17 40 l 0 20 l 10 0 l 20 12 l 0 -44 l -20 12 l -10 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 58 40 c 5 4 5 16 0 20 M 68 35 c 7 7 7 23 0 30"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}
export default VolumeMid;
            `,
            usage: `
<VolumeMid />
            `,
        },
        volumeMax: {
            name: 'volume-max',
            code: `
const VolumeMax = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 17 40 l 0 20 l 10 0 l 20 12 l 0 -44 l -20 12 l -10 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 58 40 c 5 4 5 16 0 20 M 68 35 c 7 7 7 23 0 30 M 78 29 c 10 10 10 32 0 42"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}
export default VolumeMax;
            `,
            usage: `
<VolumeMax />
            `,
        },
        volumeMute: {
            name: 'volume-mute',
            code: `
const VolumeMute = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 17 40 l 0 20 l 10 0 l 20 12 l 0 -44 l -20 12 l -10 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 62 37 l 21 26 m 0 -26 l -21 26"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}
export default VolumeMute;
            `,
            usage: `
<VolumeMute />
            `,
        },
        volumeZeroHollow: {
            name: 'volume-zero',
            code: `
const VolumeZeroHollow = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 17 40 l 0 20 l 10 0 l 20 12 l 0 -44 l -20 12 l -10 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}
export default VolumeZeroHollow;
            `,
            usage: `
<VolumeZeroHollow />
            `,
        },
        volumeLowHollow: {
            name: 'volume-low',
            code: `
const VolumeLowHollow = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 17 40 l 0 20 l 10 0 l 20 12 l 0 -44 l -20 12 l -10 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 58 40 c 5 4 5 16 0 20"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}
export default VolumeLowHollow;
            `,
            usage: `
<VolumeLowHollow />
            `,
        },
        volumeMidHollow: {
            name: 'volume-mid',
            code: `
const VolumeMidHollow = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 17 40 l 0 20 l 10 0 l 20 12 l 0 -44 l -20 12 l -10 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 58 40 c 5 4 5 16 0 20 M 68 35 c 7 7 7 23 0 30"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}
export default VolumeMidHollow;
            `,
            usage: `
<VolumeMidHollow />
            `,
        },
        volumeMaxHollow: {
            name: 'volume-max',
            code: `
const VolumeMaxHollow = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 17 40 l 0 20 l 10 0 l 20 12 l 0 -44 l -20 12 l -10 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 58 40 c 5 4 5 16 0 20 M 68 35 c 7 7 7 23 0 30 M 78 29 c 10 10 10 32 0 42"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}
export default VolumeMaxHollow;
            `,
            usage: `
<VolumeMaxHollow />
            `,
        },
        volumeMuteHollow: {
            name: 'volume-mute',
            code: `
const VolumeMuteHollow = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d="M 17 40 l 0 20 l 10 0 l 20 12 l 0 -44 l -20 12 l -10 0"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 62 37 l 21 26 m 0 -26 l -21 26"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>  
    )
}
export default VolumeMuteHollow;
            `,
            usage: `
<VolumeMuteHollow />
            `,
        },
        shortArrowRight: {
            name: 'short-arrow-right',
            code: `
const ShortArrowRight = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >            
            <path 
                d="M 30 50 L 70 50 M 56 36 L 70 50 L 56 64" 
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default ShortArrowRight;
            `,
            usage: `
<ShortArrowRight />
            `,
        },
        shortArrowLeft: {
            name: 'short-arrow-left',
            code: `
const ShortArrowLeft = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >            
            <path 
                d="M 30 50 L 70 50 M 44 36 L 30 50 L 44 64" 
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default ShortArrowLeft;
            `,
            usage: `
<ShortArrowLeft />
            `,
        },
        arrowRight: {
            name: 'arrow-right',
            code: `
const ArrowRight = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >            
            <path 
                d="M 25 50 L 75 50 M 53 30 L 75 50 L 53 70" 
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default ArrowRight;
            `,
            usage: `
<ArrowRight />
            `,
        },
        arrowLeft: {
            name: 'arrow-left',
            code: `
const ArrowLeft = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >            
            <path 
                d="M 75 50 L 25 50 M 47 70 L 25 50 L 47 30" 
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default ArrowLeft;
            `,
            usage: `
<ArrowLeft />
            `,
        },
        cross: {
            name: 'cross',
            code: `
const CrossIcon = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >
            <path 
                d="M 25 25 L 75 75 M 25 75 L 75 25"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default CrossIcon;   
            `,
            usage: `
<CrossIcon />
            `,
        },
        check: {
            name: 'check',
            code: `
const CheckIcon = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >
            <path 
                d="M 25 50 L 40 75 L 75 30" 
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default CheckIcon;   
            `,
            usage: `
<CheckIcon />
            `,
        },
        checkBoxFill: {
            name: 'check-box-fill',
            code: `
const CheckBoxFill = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >
            <path 
                d="M 12 25 C 12 18 18 12 25 12 L 75 12 C 82 12 88 18 88 25 L 88 75 C 88 82 82 88 75 88 L 25 88 C 18 88 12 82 12 75 L 12 25 M 30.5 52.8 L 42 66.5 C 43.8 68.3 45.4 67.1 46 66.4 L 70.2 36.2 C 71.2 33.7 68 31.8 66.4 33.4 L 43.9 61 L 34.2 49.8 C 32.2 47.7 28.8 50.4 30.5 52.8"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default CheckBoxFill;      
            `,
            usage: `
<CheckBoxFill />
            `,
        },
        checkBoxOutline: {
            name: 'check-box-outline',
            code: `
const CheckBoxOutline = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >            
            <path 
                d="M 15 25 C 15 20 20 15 25 15 L 75 15 C 80 15 85 20 85 25 L 85 75 C 85 80 80 85 75 85 L 25 85 C 20 85 15 80 15 75 L 15 25" 
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 32 51 L 44 65 L 68 35" 
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default CheckBoxOutline;      
            `,
            usage: `
<CheckBoxOutline />
            `,
        },
        checkCircleFill: {
            name: 'check-circle-fill',
            code: `
const CheckCircleFill = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >
            <path 
                d="M 50 12 A 10 10 0 0 1 50 88 A 10 10 0 0 1 50 12 M 30.5 52.8 L 42 66.5 C 43.8 68.3 45.4 67.1 46 66.4 L 70.2 36.2 C 71.2 33.7 68 31.8 66.4 33.4 L 43.9 61 L 34.2 49.8 C 32.2 47.7 28.8 50.4 30.5 52.8"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default CheckCircleFill;      
            `,
            usage: `
<CheckCircleFill />
            `,
        },
        checkCircleOutline: {
            name: 'check-circle-outline',
            code: `
const CheckCircleOutline = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >            
            <path 
                d="M 50 15 A 10 10 0 0 1 50 85 A 10 10 0 0 1 50 15"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 32 51 L 44 65 L 68 35" 
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default CheckCircleOutline;          
            `,
            usage: `
<CheckCircleOutline />
            `,
        },
        crossBoxFill: {
            name: 'cross-box-fill',
            code: `
const CrossBoxFill = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >
            <path 
                d="M 12 25 C 12 18 18 12 25 12 L 75 12 C 82 12 88 18 88 25 L 88 75 C 88 82 82 88 75 88 L 25 88 C 18 88 12 82 12 75 L 12 25 
                M 33.1 36.7 l 13.3 13.3 l -13.4 13 c -2.1 2.8 1.3 5.7 3.6 4 l 13.4 -13.5 l 12.9 12.9 c 2.8 2.9 6.5 -0.6 3.7 -3.4 l -13.1 -13 
                l 13.3 -13.2 c 2.5 -2.3 -1.4 -6 -3.7 -3.4 l -13.1 13.1 l -13.3 -13.4 c -2.6 -2.2 -5.6 0.9 -3.7 3.4"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default CrossBoxFill;   
            `,
            usage: `
<CrossBoxFill />
            `,
        },
        crossBoxOutline: {
            name: 'cross-box-outline',
            code: `
const CrossBoxOutline = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >            
            <path 
                d="M 15 25 C 15 20 20 15 25 15 L 75 15 C 80 15 85 20 85 25 L 85 75 C 85 80 80 85 75 85 L 25 85 C 20 85 15 80 15 75 L 15 25" 
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 35 35 L 65 65 M 35 65 L 65 35" 
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default CrossBoxOutline;
            `,
            usage: `
<CrossBoxOutline />
            `,
        },
        crossCircleFill: {
            name: 'cross-circle-fill',
            code: `
const CrossCircleFill = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >
            <path 
                d="M 50 12 A 10 10 0 0 1 50 88 A 10 10 0 0 1 50 12 
                M 33.1 36.7 l 13.3 13.3 l -13.4 13 c -2.1 2.8 1.3 5.7 3.6 4 l 13.4 -13.5 l 12.9 12.9 
                c 2.8 2.9 6.5 -0.6 3.7 -3.4 l -13.1 -13 l 13.3 -13.2 c 2.5 -2.3 -1.4 -6 -3.7 -3.4 
                l -13.1 13.1 l -13.3 -13.4 c -2.6 -2.2 -5.6 0.9 -3.7 3.4"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default CrossCircleFill;
            `,
            usage: `
<CrossCircleFill />
            `,
        },
        crossCircleOutline: {
            name: 'cross-circle-outline',
            code: `
const CrossCircleOutline = () => {
    return (
        <svg 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em"
        >            
            <path 
                d="M 50 15 A 10 10 0 0 1 50 85 A 10 10 0 0 1 50 15"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path 
                d="M 35 35 L 65 65 M 35 65 L 65 35" 
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>        
    )
}

export default CrossCircleOutline;
            `,
            usage: `
<CrossCircleOutline />
            `,
        },
    }

    return iconCodeMap[name as keyof typeof iconCodeMap];
}

export default getIconCode;