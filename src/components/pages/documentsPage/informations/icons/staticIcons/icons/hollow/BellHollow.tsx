const BellHollow = () => {
    return (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            {/* body */}
            <path 
                d="M 80 75 q -30 -3 -60 0 q -5 0 5 -5 c 0 -20 0 -47 25 -47 c 25 0 25 27 25 47 q 10 5 5 5"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* top */}
            <path 
                d="M 48 22 a 2 2 0 0 1 4 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* bottom */}
            <path 
                d="M 40 80 q 10 -1 20 0 c 0 9 -20 9 -20 0"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default BellHollow;