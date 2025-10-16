import IndicatorArrow from "../IndicatorArrow";
import { AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";


const ComponentsGroup = ({
    componentList, 
    groupName, 
    setIsMenuOpen
}: {
    componentList: {name: string, path: string}[], 
    groupName: string, 
    setIsMenuOpen?: (isMenuOpen: boolean) => void
}) => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (path: string) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen?.(false);
    }

    const checkIfCurrent = (path: string) => {
        if (location.pathname === path) {
            return 'selected';
        } else {
            return '';
        }
    }

    const currentIndex = componentList.findIndex(component => component.path === location.pathname);
    const ifSelectedComponentInList = componentList.find(component => component.path === location.pathname);

    return (
        <div className='component-list-group'>
            <div className='component-list-group-name'>
                {groupName}
            </div>
            <div className='component-list-items-container'>
                <div className={`component-list-decoration-line ${ifSelectedComponentInList ? 'selected' : ''}`}></div>
                <div className='component-list-items-wrapper'>
                    <AnimatePresence mode='wait'>
                        {ifSelectedComponentInList && (
                            <IndicatorArrow currentItemIndex={currentIndex} totalItems={componentList.length}/>
                        )}
                    </AnimatePresence>

                    {componentList.map((component, index) => (
                        <div key={index} className={`component-list-item ${checkIfCurrent(component.path)}`} onClick={() => handleNavigate(component.path)}>
                            {component.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ComponentsGroup;