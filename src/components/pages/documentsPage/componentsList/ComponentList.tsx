import useMediaTypeContext from '../../../../context/useMediaTypeContext';
// import { useState } from 'react';
// import TextAndNumberGroup from './textAndNumberGroup/TextAndNumberGroup';
import ComponentsGroup from './ComponentsGroup/ComponentsGroup';
// import IndicatorArrow from './IndicatorArrow';

const ComponentList = () => {
    const mediaType = useMediaTypeContext();
    // const [selectedComponent, setSelectedComponent] = useState<string>('test1');

    
    const componentList1 = [
        {
            name: 'splitText',
            path: '/documents/splitText',
        },  
        {
            name: 'maskReveal',
            path: '/documents/maskReveal',
        },
    ];

    // const componentList2 = [
    //     {
    //         name: 'splitText',
    //         path: '/documents/splitText',
    //     },  
    //     {
    //         name: 'test',
    //         path: '/documents/test',
    //     },
    // ];

    return (
        <nav 
            className='documents-page-component-list'
            style={{
                paddingTop: mediaType === 'mobile' ? '7rem' : '9rem',
            }}
        >
            <div className='documents-page-component-list-group-container'>
                <ComponentsGroup componentList={componentList1} groupName='Text & Number' />
                {/* <ComponentsGroup componentList={componentList2} groupName='Components' /> */}
                {/* <ComponentsGroup componentList={componentList1} groupName='Text & Number' />
                <ComponentsGroup componentList={componentList2} groupName='Components' />
                <ComponentsGroup componentList={componentList1} groupName='Text & Number' />
                <ComponentsGroup componentList={componentList2} groupName='Components' />
                <ComponentsGroup componentList={componentList1} groupName='Text & Number' />
                <ComponentsGroup componentList={componentList2} groupName='Components' /> */}
            </div>
        </nav>
    );
};

export default ComponentList;