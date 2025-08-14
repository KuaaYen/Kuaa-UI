import useMediaType from "./useMediaType";
import MediaTypeContext from "./MediaTypeContext";

const MediaTypeProvider = ({children}: {children: React.ReactNode}) => {
    const mediaType = useMediaType();
    return (
        <MediaTypeContext.Provider value={mediaType}>
            {children}
        </MediaTypeContext.Provider>
    )
}

export default MediaTypeProvider;