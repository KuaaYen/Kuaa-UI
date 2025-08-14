import { createContext } from "react";

const MediaTypeContext = createContext<'pc' | 'mobile' | 'tablet'>('pc');

export default MediaTypeContext;