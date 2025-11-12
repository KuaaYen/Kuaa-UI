import useMediaTypeContext from '../../../../context/useMediaTypeContext';
// import { useState } from 'react';
// import TextAndNumberGroup from './textAndNumberGroup/TextAndNumberGroup';
import ComponentsGroup from './ComponentsGroup/ComponentsGroup';
// import IndicatorArrow from './IndicatorArrow';
import LongTailTit from './reportArea/LongTailTit';

const ComponentsList = ({setIsMenuOpen}: {setIsMenuOpen?: (isMenuOpen: boolean) => void}) => {
    const mediaType = useMediaTypeContext();
    // const [selectedComponent, setSelectedComponent] = useState<string>('test1');

    
    const textAndNumberList = [
        {
            name: 'Rolling Numbers',
            path: '/documents/rollingNumbers',
        },
        {
            name: 'Split Text',
            path: '/documents/splitText',
        },  
        {
            name: 'Decode Text',
            path: '/documents/decodeText',
        },
        {
            name: 'Type Text',
            path: '/documents/typeText',
        },
    ];
    const maskAndFilterList = [
        {
            name: 'Mask Reveal',
            path: '/documents/maskReveal',
        },
        {
            name: 'Glitch Effect',
            path: '/documents/glitchEffect',
        },
        {
            name: 'Liquid Glass',
            path: '/documents/liquidglass',
        },
    ];
    const componentItemList = [
        {
            name: 'Carousel',
            path: '/documents/carousel',
        },
        {
            name: 'Blob',
            path: '/documents/blob',
        },
        {
            name: 'Border Beam',
            path: '/documents/borderbeam',
        },
        {
            name: 'Dialog',
            path: '/documents/dialog',
        },
    ];

    const iconList = [
        {
            name: 'Static Icons',
            path: '/documents/staticIcons',
        },
        {
            name: 'Kaomoji',
            path: '/documents/kaomoji',
        },
    ];

    const createComponentsList = () => {
        if (mediaType === "pc") {
            return (
                <nav className='component-list'>
                    <div className='component-list-group-container'>
                        <ComponentsGroup componentList={textAndNumberList} groupName='Text & Number' />
                        <ComponentsGroup componentList={maskAndFilterList} groupName='Masks & Filters' />
                        <ComponentsGroup componentList={componentItemList} groupName='Components' />
                        <ComponentsGroup componentList={iconList} groupName='Icons' />
                    </div>
                    <LongTailTit mediaType={mediaType}/>
                </nav>
            )
        } else {
            return (
                <nav className='component-list-mobile'>
                    <div className={mediaType === 'tablet' ? 'component-list-group-container-tablet' : 'component-list-group-container-mobile'}>
                        <ComponentsGroup componentList={textAndNumberList} groupName='Text & Number' setIsMenuOpen={setIsMenuOpen} />
                        <ComponentsGroup componentList={maskAndFilterList} groupName='Masks & Filters' setIsMenuOpen={setIsMenuOpen} />
                        <ComponentsGroup componentList={componentItemList} groupName='Components' setIsMenuOpen={setIsMenuOpen} />
                        <ComponentsGroup componentList={iconList} groupName='Icons' setIsMenuOpen={setIsMenuOpen} />
                    </div>
                </nav>
            )
        }
    }

    return (
        <>
            {createComponentsList()}
        </>
    );
};

export default ComponentsList;