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