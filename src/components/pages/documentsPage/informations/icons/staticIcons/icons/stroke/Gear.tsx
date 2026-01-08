const Gear = () => {
    return (
        <svg viewBox="2.5 2.5 95 95" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
            <path 
                d={`
                    M 45 20 L 55 20 L 57 33 L 63 36 L 73 32 L 78 41 L 68 46 L 68 54 L 78 61 
                    L 72 70 L 63 65 L 56 68 L 55 80 L 45 80 L 44 68 L 37 65 L 28 70 L 22 61
                    L 32 54 L 32 46 L 22 41 L 26 32 L 37 36 L 43 33 L 45 20 
                    M 50 38 a 6 6 0 0 0 0 24 a 6 6 0 0 0 0 -24`
                }
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
export default Gear;