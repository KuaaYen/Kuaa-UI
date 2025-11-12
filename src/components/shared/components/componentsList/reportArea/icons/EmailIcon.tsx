const EmailIcon = () => {
    return (
        <div
            style={{
                position: 'relative',
                height: '2.4rem',
                aspectRatio: 1,
            }}
        >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                <path 
                    d="M 15 30 c 0 -5 5 -10 10 -10 l 49 0 c 5 0 10 5 10 10 l 0 40 c 0 5 -5 10 -10 10 l -49 0 c -5 0 -10 -5 -10 -10 l 0 -40 m 0 0 l 25 20 C 47 55 53 55 60 50 L 84 30"
                    fill="transparent"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>    
        </div>
    )
}
export default EmailIcon;