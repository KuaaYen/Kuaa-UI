import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useCleanUpAnimation = () => {
    const location = useLocation();
    const cleanupFunctions = useRef<(() => void)[]>([]);

    const addCleanup = (cleanup: () => void) => {
        cleanupFunctions.current.push(cleanup);
    };

    useEffect(() => {
        return () => {
            // 路由變化時執行所有清理函數
            cleanupFunctions.current.forEach(cleanup => cleanup());
            cleanupFunctions.current = [];
        };
    }, [location.pathname]);

    return { addCleanup };
};