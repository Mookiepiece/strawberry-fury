import React from 'react';
import { ClassValue } from 'clsx';
export declare type CollapsePanelProps = {
    active?: boolean;
} & React.HTMLAttributes<HTMLDivElement> & {
    className?: ClassValue;
};
declare const CollapsePanel: React.FC<CollapsePanelProps>;
export default CollapsePanel;
