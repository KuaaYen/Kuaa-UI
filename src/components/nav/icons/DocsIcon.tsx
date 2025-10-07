import { useState } from "react";
import PopText from "../PopText";

const DocsIcon = ({isMobile}: {isMobile: boolean}) => {
    const [ishover, setIshover] = useState(false);

    const handleMouse = ({type}: {type: 'enter' | 'leave'}) => {
        if(isMobile) return;
        setIshover(type === 'enter');
    }

    return (
        <div className="navbar-link-icon"
            onMouseEnter={() => handleMouse({type: 'enter'})}
            onMouseLeave={() => handleMouse({type: 'leave'})}
            style={{
                width: isMobile ? '1.7rem' : '2rem',
                height: isMobile ? '1.7rem' : '2rem',
            }}
        >
            
            {/* outline */}
            <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff00',
                    zIndex: 1,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 30 15 L 65 15 L 80 30 L 80 75 C 80 80 75 85 70 85 L 30 85 C 25 85 20 80 20 75 L 20 25 C 20 20 25 15 30 15 M 65 15 L 65 25 C 65 28 67 30 70 30 L 80 30"
                        fill="transparent"
                        stroke="#ffffff"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>
            
            {/* content */}
            <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#ffffff00',
                    zIndex: 2,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 30 26 L 53 26 L 53 37 L 30 37 L 30 26 M 30 50 l 38 0 M 30 60 l 30 0 M 30 70 l 20 0"
                        fill="#ffffff"
                        stroke="#ffffff"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>
            
            <PopText ishover={ishover} text="Docs" />
            
        </div>
    )
}
export default DocsIcon;