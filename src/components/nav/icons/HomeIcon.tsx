// import { useState } from "react";
// import PopText from "../PopText";

const HomeIcon = ({isMobile, isCurrentPath}: {isMobile: boolean, isCurrentPath: boolean}) => {
    // const [ishover, setIshover] = useState(false);

    // const handleMouse = ({type}: {type: 'enter' | 'leave'}) => {
    //     if(isMobile) return;
    //     setIshover(type === 'enter');
    // }


    return (
        <div className="navbar-link-icon"
            // onMouseEnter={() => handleMouse({type: 'enter'})}
            // onMouseLeave={() => handleMouse({type: 'leave'})}
            style={{
                width: isMobile ? '1.5rem' : '2rem',
                height: isMobile ? '1.5rem' : '2rem',
                color: isCurrentPath ? 'var(--basic-sunset)' : 'var(--primary-color)',
                filter: isCurrentPath ? 'drop-shadow(0 0 2px rgba(242, 204, 143, 0.5))' : 'none',
            }}
        >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <path 
                    d="M 10 55 L 50 15 L 90 56 L 80 56 L 80 85 L 60 85 L 60 70 C 58 60 42 60 40 70 L 40 85 L 20 85 L 20 55 L 10 55"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>   
            {/* <PopText ishover={ishover} text="Home" /> */}
            
        </div>
    )
}
export default HomeIcon;