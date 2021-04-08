import clsx, { ClassValue } from 'clsx';
import React from 'react';

export type RowProps = Omit<React.HTMLProps<HTMLDivElement>, 'wrap'> & {
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

const RowCreator = (displayName: string, defaultClassName: string): React.FC<RowProps> => {
  const Row: React.FC<RowProps> = ({
    children,
    reverse,
    className,
    justify,
    align,
    content,
    wrap,
    wrapReverse,
    grow,
    shrink,
    basis,
    flex,
    order,
    style,
  }) => {
    const classNames = clsx(
      reverse ? `${className}-reverse` : className,
      defaultClassName,
      justify && `justify-${justify}`,
      align && `align-${align}`,
      wrap && 'flex-wrap',
      wrapReverse && 'wrap-reverse',
      content && `align-content-${content}`
    );

    return (
      <div
        className={classNames}
        style={{
          flex,
          flexBasis: basis,
          flexGrow: grow,
          flexShrink: shrink,
          order,
          ...style,
        }}
      >
        {children}
      </div>
    );
  };

  Row.displayName = displayName;

  return Row;
};

export const Row = RowCreator('Row', 'row');
export const Col = RowCreator('Col', 'col');
