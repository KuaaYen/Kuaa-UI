import { motion } from 'motion/react';
const GithubIcon = ({ishovered}: {ishovered: boolean}) => {
    return (
        <div
            style={{
                position: 'relative',
                height: '2.4rem',
                aspectRatio: 1,
            }}
        >
            
            {/* github border*/}
            {/* <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <path 
                        d="M 38.75 89.566 c 0.091 -10.277 0.091 -10.277 0.091 -10.277 c -15.876 8.607 -21.547 -9.285 -24.508 -12.333 c -5.469 -4.889 -0.536 -9.787 5.433 -5.149 c 6.677 4.615 3.815 13.794 18.992 8.438 c 0.755 -1.637 1.355 -3.322 1.13 -4.224 c -15.655 0.637 -28.505 -22.454 -15.356 -38.691 c -1.859 -5.52 -1.859 -10.479 1.031 -13.386 c 4.859 -2.345 10.491 1.088 13.392 4.836 c 7.619 -2.73 18.605 -2.49 24.786 0.349 c 4.658 -3.383 9.402 -5.737 14.104 -5.376 c 3.134 4.577 2.046 11.106 0.837 13.162 c 10.12 16.902 3.815 38.126 -14.224 39.645 c -0.529 1.978 1.485 3.217 1.676 7.802 l 0.088 15.204 l -27.422 0.011"
                        fill="rgb(255, 255, 255)"
                        stroke="rgb(255, 255, 255)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>   
            </div> */}

            {/* github shape*/}
            <div 
                style={{
                    position:'absolute',
                    top:'50%',
                    left: '50%',
                    height: '100%',
                    width: '100%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                }}
            >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                    <motion.path 
                        d="M 38.75 89.566 c 0.091 -10.277 0.091 -10.277 0.091 -10.277 c -15.876 8.607 -21.547 -9.285 -24.508 -12.333 c -5.469 -4.889 -0.536 -9.787 5.433 -5.149 c 6.677 4.615 3.815 13.794 18.992 8.438 c 0.755 -1.637 1.355 -3.322 1.13 -4.224 c -15.655 0.637 -28.505 -22.454 -15.356 -38.691 c -1.859 -5.52 -1.859 -10.479 1.031 -13.386 c 4.859 -2.345 10.491 1.088 13.392 4.836 c 7.619 -2.73 18.605 -2.49 24.786 0.349 c 4.658 -3.383 9.402 -5.737 14.104 -5.376 c 3.134 4.577 2.046 11.106 0.837 13.162 c 10.12 16.902 3.815 38.126 -14.224 39.645 c -0.529 1.978 1.485 3.217 1.676 7.802 l 0.088 15.204 l -27.422 0.011"
                        fill="var(--basic-purple)"
                        stroke="transparent"
                        strokeWidth="0"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                            fill: 'var(--basic-purple)',
                        }}
                        animate={{
                            fill: ishovered ? 'var(--basic-brick)' : 'var(--basic-purple)',
                        }}
                    />
                </svg>   
            </div>
            
        </div>
    )
}

export default GithubIcon;