import React, { useEffect, useState, useRef, useImperativeHandle } from 'react';
import { Form, Row, Col, Checkbox, Empty } from 'antd';
import { FormProps } from 'antd/lib/form/Form';
import styles from './style.less';
import { cloneDeep, uniq, uniqBy } from 'lodash';
import { RightOutlined } from '@ant-design/icons';


interface AnyObj {
    [key: string]: any;
}

interface levelListProps {
    level_num: number,
    level_title: string[],
    original_data: AnyObj[],
    name_key?: string,
    id_key?: string,
}

interface CascaderProps {
    levelList: levelListProps;
    callback?: Function;
    search?: Function;
    cRef: any;
    no_check: number[];
}
interface InfoProps {
    chooses: any[];
    trees: any[];
}

const Cascader: React.FC<CascaderProps> = (props: CascaderProps) => {
    const { levelList, callback, search, cRef, no_check = [] } = props;
    const { level_num = 0, level_title, name_key = 'alias', id_key = 'code', original_data = [] } = levelList;
    const [levelConfig, setLevelConfig] = useState<AnyObj>({});
    const [chooseList, setChooseList] = useState<any[]>([]);
    const [showList, setShowList] = useState<AnyObj[]>([]);

    const infoRef = useRef<InfoProps>({
        chooses: [],
        trees: [],
    })

    const updateLevelConfig = (obj = {}) => {
        setLevelConfig({ ...levelConfig, ...obj })
    }

    useImperativeHandle(cRef, () => ({
        updateCheckbox: (check: boolean, record: AnyObj) => {
            changeCheckbox(check, record);
        },
        clearAll: () => {
            setShowList([]);
            setChooseList([]);
            infoRef.current.chooses = [];
        },
        getEditList: (list: any[] | ((prevState: AnyObj[]) => AnyObj[])) => {
            let result: any[] = [];
            setShowList(list);
            list.map((i: { [x: string]: string; children: any; }) => {
                const childrens = flatTree(i.children).map((i: { [x: string]: any; }) => i[id_key]);
                const arr = [i[id_key], ...childrens];
                const parentData = getParentNode(i[id_key], original_data).splice(1);
                for (let k = 0; k < parentData.length; k++) {
                    const temp = parentData[k];
                    arr.push(temp[id_key]);
                }
                result = result.concat(arr);
            })
            result = uniq(result);
            setChooseList(result);
        },
    }));

    const initData = () => {
        if (original_data.length > 0) {
            infoRef.current.trees = flatTree(original_data);
            setLevelConfig({ ...levelConfig, tab_0: true, tab_option_0: original_data, tab_title_0: level_title[0] });
        }
    }

    useEffect(() => {
        initData();
    }, [levelList])

    // 两个数组中相同的元素
    const getArrEqual = (arr1: any[], arr2: string | any[]) => arr1.filter((v: any) => arr2.includes(v));

    // 扁平化树
    const flatTree = (data: any[], childName = 'children'): any[] => {
        if (!Array.isArray(data)) {
            return []
        }
        return data.reduce((prev, curt) => {
            // 有子节点的话把子节点作为一级节点递归遍历
            const childs = curt[childName]?.length ? flatTree(curt[childName]) : []
            return [...prev, curt, ...childs]
        }, [])
    }

    // 获取某一节点的所有父节点
    const getParentNode = (id: string, data: any[], prop = id_key) => {
        const arrRes: any[] = []
        const rev = (data: any[], nodeId: string) => {
            for (let i = 0, { length } = data; i < length; i++) {
                const node = data[i]
                if (node[prop] === nodeId) {
                    // arrRes.unshift(node);
                    arrRes.push(node);
                    return true
                } else if (node.children && node.children.length) {
                    if (rev(node.children, nodeId)) {
                        // arrRes.unshift(node);
                        arrRes.push(node);
                        return true
                    }
                }
            }
            return false
        }
        rev(data, id)
        return arrRes;
    }

    // 获取某一节点的所有子节点
    const getChildren = (data: any[] = [], arr: any[] = []) => {
        if (!Array.isArray(data)) {
            return []
        }
        for (const item of data) {
            arr.push(item)
            if (item.children && item.children.length) getChildren(item.children, arr)
        }
        return arr
    }

    // 点击展示下一层级选项列表框
    const handleShowNextTab = (item: AnyObj, level: number) => {
        const param: AnyObj = {};
        if (level < level_num - 1) { // 不是最后一级
            const num = level + 1;
            for (let i = num; i < level_num; i++) {
                param[`tab_${i}`] = false;
            }
            if (item.children) {
                param[`tab_${num}`] = true;
                param[`tab_option_${num}`] = item.children;
                param[`tab_title_${num}`] = item[name_key];
            }
            updateLevelConfig(param);
        }
    }

    const changeShowList = (val: boolean, item: AnyObj, isAll = false) => {
        const { chooses } = infoRef.current
        const { children } = item;
        // console.log('chooses', chooses);
        let show_data = cloneDeep(showList);
        const parent_data = getParentNode(item[id_key], original_data).splice(1);
        const parent_codes = parent_data.map(i => i[id_key]);
        const childrens = getChildren(children);
        const childrens_codes: any[] = childrens.map(i => i[id_key]);
        show_data = show_data.filter(i => !childrens_codes.includes(i[id_key]));
        if (val) {
            show_data.push(item);
        } else {
            const arr_codes = [item[id_key], ...parent_codes];
            show_data = show_data.filter(i => !arr_codes.includes(i[id_key]));
        }

        if (parent_data.length > 0) {
            parent_data.map((record, index) => {
                const { children, code } = record;
                const childrens_codes = children.map((i: { [x: string]: any; }) => i[id_key]);
                const is_part = isIndeterminate(record);
                const is_check = chooses.includes(record[id_key]);
                if (is_check && !is_part) {
                    // console.log('全选');
                    show_data.push(record);
                    show_data = show_data.filter(i => !childrens_codes.includes(i[id_key]));
                } else {
                    // console.log('没全选');
                    show_data = show_data.filter(i => i[id_key] !== record[id_key]);
                    let is_choose = children.filter((i: { [x: string]: any; }) => chooses.includes(i[id_key]));
                    is_choose = is_choose.filter((i: AnyObj) => !isIndeterminate(i));
                    // console.log('is_choose', is_choose);
                    show_data = show_data.concat(is_choose);
                }
            })
        } else if (isAll) {
            if (val) {
                show_data = original_data;
            } else {
                show_data = [];
            }
        }
        const result = uniqBy(show_data, id_key);
        // console.log('result', result.map(item => item[name_key]), result.length);
        setShowList(result);
        callback && callback(result);
    }

    const changeAllShowListOne = (val: boolean, level_data: []) => {
        let show_data = cloneDeep(showList);
        let show_data_ids: any[] = level_data.map(i => i[id_key]);
        if (val) {
            show_data = show_data.concat(level_data);
        } else {
            show_data = show_data.filter(i => !show_data_ids.includes(i[id_key]))
        }
        const result = uniqBy(show_data, id_key);
        setShowList(result);
        callback && callback(result);
    }

    const changeShowListOne = (val: boolean, item: AnyObj) => {
        let show_data = cloneDeep(showList);
        if (val) {
            show_data.push(item);
        } else {
            show_data = show_data.filter(i => i[id_key] !== item[id_key])
        }
        const result = uniqBy(show_data, id_key);
        setShowList(result);
        callback && callback(result);
    }

    // 改变复选框状态 --需判断子和父是否需要改变状态
    const changeCheckbox = (val: boolean, item: AnyObj, level = 0) => {
        // console.log('changeCheckbox', item);
        let choose_data = cloneDeep(chooseList);
        const childrens = flatTree(item.children).map((i: { [x: string]: any; }) => i[id_key]);
        const parentData = getParentNode(item[id_key], original_data).splice(1);
        const arr = [item[id_key], ...childrens];
        if (val) {
            choose_data = choose_data.concat(arr);
            search && search(item);
        } else {
            search && search({});
            choose_data = choose_data.filter(j => !arr.includes(j));
        }
        for (let i = 0; i < parentData.length; i++) {
            const temp = parentData[i];
            const { children } = temp;
            const res = children.filter((j: { [x: string]: any; }) => choose_data.includes(j[id_key]));
            if (res.length === 0) {
                choose_data = choose_data.filter(j => j !== temp[id_key]);
            } else {
                choose_data.push(temp[id_key]);
            }
        }
        const result = uniq(choose_data);
        infoRef.current.chooses = result;
        if (no_check.length === 0) {
            changeShowList(val, item);
        } else {
            changeShowListOne(val, item);
        }

        setChooseList(result);
    }

    // 是否半选状态
    const isIndeterminate = (item: AnyObj, level = 0) => {
        const data = infoRef.current.chooses;
        if (!item.children) {
            return false;
        }
        const childrens = flatTree(item.children).map((i: { [x: string]: any; }) => i[id_key]);
        const choose_data = getArrEqual(data, childrens);
        return !!choose_data.length && choose_data.length < childrens.length;
    }

    // 全选
    const changeChooseAll = (val: boolean, level: number) => {
        let choose_data = cloneDeep(chooseList);
        const level_data = levelConfig[`tab_option_${level}`];
        const childrens = flatTree(level_data).map((i: { [x: string]: any; }) => i[id_key]);
        const parents = getParentNode(level_data[0][id_key], original_data).slice(1).map(j => j[id_key]);
        const arr = [...parents, ...childrens]
        if (val) {
            choose_data = uniq(choose_data.concat(arr));
        } else {
            choose_data = choose_data.filter(j => !arr.includes(j));
        }
        infoRef.current.chooses = choose_data;
        if (no_check.length === 0) {
            changeShowList(val, level_data[0], true);
        } else {
            changeAllShowListOne(val, level_data)
        }
        setChooseList(choose_data);
    }

    // 是否全选状态
    const isChooseAll = (level: number, type = 1) => {
        const data = cloneDeep(chooseList);
        const level_data = levelConfig[`tab_option_${level}`].map((item: AnyObj) => item[id_key]);
        const res = getArrEqual(level_data, data);
        if (type === 1) {
            return res.length === level_data.length;
        } else {
            return res.length > 0 && res.length < level_data.length;
        }
    }

    const chooseAllEle = (level: number) => (
        <div className={styles.contentItem}>
            <div>
                <Checkbox
                    checked={isChooseAll(level)}
                    indeterminate={isChooseAll(level, 2)}
                    onChange={e => { changeChooseAll(e.target.checked, level); }}></Checkbox>
                <span style={{ marginLeft: 5 }}>全选</span>
            </div>
        </div>
    )

    const chooseItemELe = (item: AnyObj, index: number, level: number) => (
        <div className={styles.contentItem} key={index} onClick={() => {
            handleShowNextTab(item, level);
        }}>
            <div>
                {
                    !no_check.includes(level) && (
                        <Checkbox checked={chooseList.includes(item[id_key])}
                            indeterminate={isIndeterminate(item, level)}
                            onChange={e => {
                                changeCheckbox(e.target.checked, item, level);
                            }}></Checkbox>
                    )
                }
                <span style={{ marginLeft: 5 }}>{item[name_key]}</span>
            </div>
            {
                item.children && level < level_num - 1 && (
                    <div>
                        <RightOutlined />
                    </div>
                )
            }
        </div>
    )

    const areaEle = () => {
        const arr = level_title.filter((item, i) => levelConfig[`tab_${i}`]);
        return <>
            {
                arr.map((item, index) => (
                    <Col className={styles.wrapper} key={index}>
                        <Col className={styles.header}> {
                            levelConfig[`tab_title_${index}`]
                        }</Col>
                        <Col className={styles.content}>
                            {/* 全选选择框 */}
                            {
                                !no_check.includes(index) && chooseAllEle(index)
                            }
                            {/* 单选选择框 */}
                            {
                                levelConfig[`tab_option_${index}`].map((obj: AnyObj, j: number) => (
                                    chooseItemELe(obj, j, index)
                                ))
                            }
                        </Col>
                    </Col>
                ))
            }
        </>
    }

    return (
        <>
            <Row className={styles.container} ref={cRef}>
                {
                    original_data.length > 0 ? <>
                        {
                            areaEle()
                        }
                    </> : <Empty className={styles.loading} image={Empty.PRESENTED_IMAGE_SIMPLE} />
                }
            </Row >
        </>
    )
}


export default Cascader;
