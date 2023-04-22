import React from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { AccordionItemProps } from '../types/AccordionItemPropType';
import { itemStyle, titleStyle, show, hide } from '../styles';

export const AccordionItem: React.FC<AccordionItemProps> = (props) => {
    const {
        titleLable,
        descriptionLable,
        toggle,
        selectedItemIndex,
        selected,
        titleStyleOverride,
        descriptionStyleOverride,
        plusIconCustom = null,
        minusIconCustom = null,
        singleItemStyleOverride,
        titleComponent = null
    } = props;

    let plus: any = null;
    let minus: any = null;

    if (plusIconCustom) {
        plus = plusIconCustom;
    } else {
        plus = <AiOutlinePlusCircle />;
    }

    if (minusIconCustom) {
        minus = minusIconCustom;
    } else {
        minus = <AiOutlineMinusCircle />;
    }

    const ComponentFunc = (componentToBeUsed, whichLable) => {
        switch (componentToBeUsed) {
            case 'h1':
                return <h1>{whichLable}</h1>;
            case 'h2':
                return <h2>{whichLable}</h2>;
            case 'h3':
                return <h3>{whichLable}</h3>;
            case 'h4':
                return <h4>{whichLable}</h4>;
            case 'h5':
                return <h5>{whichLable}</h5>;
            case 'h6':
                return <h6>{whichLable}</h6>;
            case 'p':
                return <p>{whichLable}</p>;
            case 'code':
                return <code>{whichLable}</code>;
            case 'pre':
                return <pre>{whichLable}</pre>;
            case 'article':
                return <article>{whichLable}</article>;
            default:
                return <h2>{whichLable}</h2>;
        }
    };

    return (
        <div style={{ ...itemStyle, ...singleItemStyleOverride }}>
            <div style={{ ...titleStyle, ...titleStyleOverride }} onClick={() => toggle(selectedItemIndex)}>
                {ComponentFunc(titleComponent, titleLable)}
                {selected === selectedItemIndex ? minus : plus}
            </div>
            <div style={selected === selectedItemIndex ? { ...hide, ...descriptionStyleOverride } : show}>{descriptionLable}</div>
        </div>
    );
};
