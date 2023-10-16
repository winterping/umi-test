import React, { createContext } from "react"
import { SizeType } from "./type";

export type DirectionType = 'ltr' | 'rtl' | undefined;

export interface ConfigConsumerProps {
    getPrefixCls: (suffixCls?: string) => string;
    direction?: DirectionType;
    space?: {
        size: SizeType | number;
    }
}

export const defaultGetPrefixCls = (suffixCls?: string) => {
    return suffixCls ? `ant-${suffixCls}` : 'ant';
}

export const ConfigContext = createContext<ConfigConsumerProps>({
    getPrefixCls: defaultGetPrefixCls,
})