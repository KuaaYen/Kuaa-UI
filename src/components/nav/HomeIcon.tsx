import { useState } from "react";
import PopText from "./PopText";

const HomeIcon = ({isMobile}: {isMobile: boolean}) => {
    const [ishover, setIshover] = useState(false);

    const handleMouse = ({type}: {type: 'enter' | 'leave'}) => {
        if(isMobile) return;
        setIshover(type === 'enter');
    }


    return (
        <div className="navbar-link-icon"
            onMouseEnter={() => handleMouse({type: 'enter'})}
            onMouseLeave={() => handleMouse({type: 'leave'})}
        >
            {/* <div 
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
            > */}
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 10 55 L 50 15 L 90 56 L 80 56 L 80 90 L 60 90 L 60 70 C 58 60 42 60 40 70 L 40 90 L 20 90 L 20 55 L 10 55"
                        fill="transparent"
                        stroke="#ffffff"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            {/* </div> */}

            <PopText ishover={ishover} text="Home" />
            
        </div>
    )
}
export default HomeIcon;