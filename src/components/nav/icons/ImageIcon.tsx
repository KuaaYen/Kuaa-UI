import { useState } from "react";
import PopText from "../PopText";

const ImageIcon = ({isMobile}: {isMobile: boolean}) => {
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
                        d="M 20 15 L 80 15 C 85 15 90 20 90 25 L 90 75 C 90 80 85 85 80 85 L 20 85 C 15 85 10 80 10 75 L 10 25 C 10 20 15 15 20 15"
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
                        d="M 19 70 L 37 52 L 45 65 L 70 50 L 81 70 C 82 72 81 73 79 73 L 21 73 C 18 73 17 72 19 70 M 64 39 A 5 5 0 0 0 52 39 A 5 5 0 0 0 64 39"
                        fill="#ffffff"
                        stroke="#ffffff"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div>
            
            <PopText ishover={ishover} text="Arts" />
            
        </div>
    )
}
export default ImageIcon;