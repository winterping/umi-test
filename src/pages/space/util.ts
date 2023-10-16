import React from "react";
import { isFragment } from 'react-is';

interface OptionProps {
    keepEmpty?: boolean; // 保不保留空节点
}

export function toArray(children: React.ReactNode, option: OptionProps = {}): React.ReactElement[] {
    let ret: React.ReactElement[] = [];
    React.Children.forEach(children, (child: any | any[]) => {
        if ((child === undefined || child === null) && !option.keepEmpty) {
            return
        }
        if (Array.isArray(child)) {
            ret = ret.concat(toArray(child))
        } else if (isFragment(child) && child.props) {
            ret = ret.concat(toArray(child.props.children, option))
        } else {
            ret.push(child)
        }
    })
    // console.log('ret', ret);
    return ret;
}

let flexGapSupported: boolean | undefined;

export function detectFlexGapSupported() {
    if (flexGapSupported !== undefined) {
        return flexGapSupported;
    }

    const flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.flexDirection = 'column';
    flex.style.rowGap = '1px';

    flex.appendChild(document.createElement('div'));
    flex.appendChild(document.createElement('div'));

    document.body.appendChild(flex);
    flexGapSupported = flex.scrollHeight === 1;
    document.body.removeChild(flex);
    return flexGapSupported;
};
