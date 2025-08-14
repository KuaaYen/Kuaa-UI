import { useState, useEffect } from "react";

const useMediaType = () => {
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

    return mediaType;
}

export default useMediaType;