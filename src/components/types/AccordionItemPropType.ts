export type AccordionItemProps = {
    titleLable: React.ReactNode | string | number;
    descriptionLable: React.ReactNode | string | number;
    selected: number | null;
    selectedItemIndex: number;
    toggle: (i: number) => void;
    titleStyleOverride?: React.CSSProperties;
    descriptionStyleOverride?: React.CSSProperties;
    singleItemStyleOverride?: React.CSSProperties;
    plusIconCustom?: React.ReactNode;
    minusIconCustom?: React.ReactNode;
    titleComponent?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'code' | 'article' | 'pre' | null | Boolean;
};
