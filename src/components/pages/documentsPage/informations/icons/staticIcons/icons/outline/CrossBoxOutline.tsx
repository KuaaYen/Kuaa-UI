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