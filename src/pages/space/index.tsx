import React, { useContext, useEffect, useMemo } from 'react';
import { SpaceSize } from './type';
import classnames from 'classnames';
import { ConfigContext } from './provider';
import useFlexGapSupport from './useFlexGapSupport';
import { toArray } from './util';
import Item from './item';
import './index.less';

export interface SpaceProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    className?: string;
    style?: React.CSSProperties;
    size?: SpaceSize | [SpaceSize, SpaceSize];
    direction?: 'vertical' | 'horizontal';
    align?: 'start' | 'end' | 'center' | 'baseline';
    wrap?: boolean;
    split?: React.ReactNode;
}

export const SpaceContext = React.createContext({
    latestIndex: 0,
    horizontalSize: 0,
    verticalSize: 0,
    supportFlexGap: false,
});
const spaceSize = {
    small: 8,
    middle: 16,
    large: 24,
};
function getNumberSize(size: SpaceSize) {
    return typeof size === 'string' ? spaceSize[size] : size || 0;
}

const Space: React.FC<SpaceProps> = (props: SpaceProps) => {
    const { getPrefixCls, space, direction: directionConfig } = useContext(ConfigContext);
    const {
        className,
        direction = 'horizontal',
        align,
        size = space?.size || 'small',
        split,
        style,
        children,
        wrap = false,
        ...otherProps
    } = props;

    const prefixCls = getPrefixCls('space');
    const mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
    const cn = classnames(
        prefixCls,
        `${prefixCls}-${direction}`,
        {
            [`${prefixCls}-rtl`]: directionConfig === 'rtl',
            [`${prefixCls}-align-${mergedAlign}`]: mergedAlign,
        },
        className
    )
    // console.log('cn', cn);

    const [horizontalSize, verticalSize] = React.useMemo(
        () =>
            ((Array.isArray(size) ? size : [size, size]) as [SpaceSize, SpaceSize]).map(item =>
                getNumberSize(item),
            ),
        [size],
    );

    const supportFlexGap = useFlexGapSupport();
    const gapStyle: React.CSSProperties = {};
    if (wrap) {
        gapStyle.flexWrap = 'wrap';
        if (!supportFlexGap) {
            gapStyle.marginBottom = -verticalSize;
        }
    }

    if (supportFlexGap) {
        gapStyle.columnGap = horizontalSize;
        gapStyle.rowGap = verticalSize;
    }

    const itemClassName = `${prefixCls}-item`;
    const marginDirection = directionConfig === 'rtl' ? 'marginLeft' : 'marginRight';
    let latestIndex = 0;
    const childNodes = toArray(children, { keepEmpty: true });
    const nodes = childNodes.map((child: any, i) => {
        if (child !== null && child !== undefined) {
            latestIndex = i;
        }

        const key = (child && child.key) || `${itemClassName}-${i}`;
        return (
            <Item
                className={itemClassName}
                key={key}
                direction={direction}
                index={i}
                marginDirection={marginDirection}
                split={split}
                wrap={wrap}
            >
                {child}
            </Item>
        );
    });
    // console.log('nodes',nodes);

    const spaceContext = React.useMemo(
        () => ({ horizontalSize, verticalSize, latestIndex, supportFlexGap }),
        [horizontalSize, verticalSize, latestIndex, supportFlexGap],
    );

    return (
        <div className={cn} style={{ ...gapStyle, ...style }} {...otherProps}>
            <SpaceContext.Provider value={spaceContext}>
                {nodes}
            </SpaceContext.Provider>
        </div>
    )
}


export default Space;