import { Reducer } from 'redux';
import { Model } from 'dva';
import { AnyObj } from '@/util/type';

export interface DragState {
    componentData: any[],
    canvasStyleData: AnyObj,
}

const initState = {
    componentData: [],
    canvasStyleData: {
        width: 1000,
        height: 700,
        scale: 100,
        color: '#000',
        opacity: 1,
        background: '#fff',
        fontSize: 14,
    }
}
const DragModel = {
    namespace: 'drag',
    state: initState,
    effects: {},
    reducers: {
        updateCanvasStyleData(state = initState, { payload }) {
            return {
                ...state,
                canvasStyleData: payload,
            }
        }
    },
}

export default DragModel;