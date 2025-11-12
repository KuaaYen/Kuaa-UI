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