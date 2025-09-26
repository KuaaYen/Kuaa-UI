import useMediaTypeContext from '../../../../context/useMediaTypeContext';
// import { useState } from 'react';
// import TextAndNumberGroup from './textAndNumberGroup/TextAndNumberGroup';
import ComponentsGroup from './ComponentsGroup/ComponentsGroup';
// import IndicatorArrow from './IndicatorArrow';

const ComponentList = () => {
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
    ];


    return (
        <>
            {mediaType === "pc" && (
                <nav 
                    className='documents-page-component-list'
                    // style={{
                    //     paddingTop: '8rem',
                    // }}
                >
                    <div className='documents-page-component-list-group-container'>
                        <ComponentsGroup componentList={textAndNumberList} groupName='Text & Number' />
                        <ComponentsGroup componentList={maskAndFilterList} groupName='Masks & Filters' />
                        <ComponentsGroup componentList={componentItemList} groupName='Components' />
                    </div>
                </nav>
            )}
        </>
    );
};

export default ComponentList;