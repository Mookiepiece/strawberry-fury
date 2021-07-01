import { ClassValue } from 'clsx';
import React from 'react';
export declare type RowProps = Omit<React.HTMLProps<HTMLDivElement>, 'wrap'> & {
    className?: ClassValue;
    justify?: 'center' | 'between' | 'around' | 'evenly' | 'start' | 'end' | 'stretch';
    align?: 'center' | 'start' | 'end' | 'stretch';
    content?: 'center' | 'between' | 'around' | 'evenly' | 'start' | 'end' | 'stretch';
    grow?: number;
    shrink?: number;
    basis?: string | number;
    flex?: string | number;
    order?: number;
    wrap?: boolean;
    wrapReverse?: boolean;
    reverse?: boolean;
};
export declare const Row: React.FC<RowProps> & {
    Col: React.FC<RowProps>;
};
