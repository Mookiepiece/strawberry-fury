import React from 'react';
import { CollapsePanelProps } from './CollapsePanel';
declare const Collapse: React.FC & {
    Panel: React.FC<CollapsePanelProps>;
    Item: React.FC<{
        children: [React.ReactElement<CollapseSummaryProps>, React.ReactElement<CollapsePanelProps>];
    }>;
    Summary: React.FC<CollapseSummaryProps>;
};
declare type CollapseSummaryProps = {
    children: React.ReactElement;
    active?: boolean;
    toggle: () => void;
};
export default Collapse;
