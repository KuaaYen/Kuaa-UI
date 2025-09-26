// MediaTypeProvider.tsx
import { useState, useEffect } from "react";
import MediaTypeContext from "./MediaTypeContext";

const MediaTypeProvider = ({children}: {children: React.ReactNode}) => {
    const [mediaType, setMediaType] = useState<'pc' | 'mobile' | 'tablet'>('pc');

    useEffect(() => {
        const getMediaType = () => {
            if(typeof window === 'undefined') return 'pc';
            
            const width = window.innerWidth;
            if(width < 600) return 'mobile';
            if(width < 1100) return 'tablet';
            return 'pc';
        }

        const handleResize = () => {
            setMediaType(getMediaType());
        }
        
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <MediaTypeContext.Provider value={mediaType}>
            {children}
        </MediaTypeContext.Provider>
    )
}

export default MediaTypeProvider;