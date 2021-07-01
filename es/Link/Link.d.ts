import React from 'react';
declare type LinkProps = {
    type?: 'button';
    href?: string;
    active?: boolean;
} & React.HTMLProps<HTMLAnchorElement>;
declare const Link: React.FC<LinkProps>;
export default Link;
