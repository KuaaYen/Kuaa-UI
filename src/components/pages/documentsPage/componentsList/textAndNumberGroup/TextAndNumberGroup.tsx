import IndicatorArrow from "../IndicatorArrow";
import { AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";

const TextAndNumberGroup = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (path: string) => {
        navigate(`/documents/${path}`);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const checkIfCurrent = (path: string) => {
        if (location.pathname === `/documents/${path}`) {
            return 'selected';
        } else {
            return '';
        }
    }

    const componentList = [
        {
            name: 'splitText',
            path: '/documents/splitText',
        },
        {
            name: 'test',
            path: '/documents/test',
        },
        {
            name: 'test',
            path: '/documents/test',
        },
    ];

    const currentIndex = componentList.findIndex(component => component.path === location.pathname);
    const ifSelectedComponentInList = componentList.find(component => component.path === location.pathname);
    return (
        <div className='documents-page-component-list-group'>
            <div className='documents-page-component-list-group-name'>
                Text & Number
            </div>
            <div className='documents-page-component-list-items-container'>
                <div className='documents-page-component-list-decoration-line'></div>
                <div className='documents-page-component-list-items-wrapper'>
                    <AnimatePresence mode='wait'>
                        {ifSelectedComponentInList && (
                            <IndicatorArrow currentItemIndex={currentIndex} totalItems={componentList.length}/>
                        )}
                    </AnimatePresence>
                    <div className={`documents-page-component-list-item ${checkIfCurrent('splitText')}`} onClick={() => handleNavigate('splitText')}>
                        list item 1
                    </div>
                    <div className={`documents-page-component-list-item ${checkIfCurrent('test')}`} onClick={() => handleNavigate('test')}>
                        list item 2
                    </div>
                    <div className={`documents-page-component-list-item ${checkIfCurrent('test')}`} onClick={() => handleNavigate('test')}>
                        list item 3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TextAndNumberGroup;