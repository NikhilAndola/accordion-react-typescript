import { AccordionItemProps } from './AccordionItemPropType';

type accordionItemData = Pick<AccordionItemProps, 'titleLable' | 'descriptionLable'>;

export type AccordionProps = {
    data: Array<accordionItemData>;
    customWrapperStyle?: React.CSSProperties;
    customAccordionStyle?: React.CSSProperties;
    singleItemStyleOverride?: React.CSSProperties;
    titleStyleOverride?: React.CSSProperties;
    descriptionStyleOverride?: React.CSSProperties;
    plusIconCustom?: React.ReactNode;
    minusIconCustom?: React.ReactNode;
    titleComponent?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'code' | 'article' | 'pre' | null | Boolean;
};
