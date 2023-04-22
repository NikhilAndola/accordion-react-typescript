import React, { useState } from 'react';
import { AccordionProps } from '../types/AccordionPropType';
import { AccordionItem } from './AccordionItem';

/**
 * @param data
 * @param titleComponent
 * @returns Accordion with customization!
 * @link https://github.com/NikhilAndola/accordion-react-typescript
 */
export const Accordion: React.FC<AccordionProps> = (props) => {
    const { data, customAccordionStyle, customWrapperStyle, singleItemStyleOverride, titleStyleOverride, descriptionStyleOverride, plusIconCustom, minusIconCustom, titleComponent } = props;

    const [selected, setSelected] = useState<null | number>(null);

    const toggleAccordion: (i: number) => any = (i: number) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    const wrapperStyle = {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'center',
        ...customWrapperStyle
    };

    const accordionStyle = {
        width: '500px',
        ...customAccordionStyle
    };

    return (
        <div style={wrapperStyle}>
            <div style={accordionStyle}>
                {data?.map((item, i) => (
                    <AccordionItem
                        key={i}
                        titleLable={item?.titleLable}
                        descriptionLable={item?.descriptionLable}
                        toggle={toggleAccordion}
                        selectedItemIndex={i}
                        selected={selected}
                        singleItemStyleOverride={singleItemStyleOverride}
                        titleStyleOverride={titleStyleOverride}
                        descriptionStyleOverride={descriptionStyleOverride}
                        plusIconCustom={plusIconCustom}
                        minusIconCustom={minusIconCustom}
                        titleComponent={titleComponent}
                    />
                ))}
            </div>
        </div>
    );
};
