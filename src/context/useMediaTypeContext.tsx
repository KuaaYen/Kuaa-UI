import { useContext } from "react";
import MediaTypeContext from "./MediaTypeContext";

const useMediaTypeContext = () => {
    const context = useContext(MediaTypeContext);
    if(!context) {
        throw new Error('useMediaTypeContext must be used within a MediaTypeProvider');
    }
    return context;
}

export default useMediaTypeContext;