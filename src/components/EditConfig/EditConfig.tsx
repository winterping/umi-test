import React, { useEffect, useRef, useState, useCallback, useImperativeHandle } from 'react';
import { Row, Button, Icon, Dropdown, Menu, Modal, Col, Input, Select, message } from 'antd';
import styles from './style.less';
import { isJsonString } from '@/util/tool';
import BlindBoxSelect from './BlindBoxSelect';

const { SubMenu } = Menu;

interface Props {
    defaultValue: any;
    callback: Function;
    isCheck: Function;
    itemKey?: string;
    cRef?: any;
    idInfo?: AnyObj;
    item_label_id?: any;
    item_id?: any;
    landing_page_id?: any;
}

const EditConfig: React.FC<Props> = (props: Props) => {
    const { defaultValue = '', callback, isCheck, cRef, idInfo = {}, item_label_id = undefined, item_id = undefined, landing_page_id = undefined } = props;
    const textRef = useRef<any>();
    const savedRange = useRef<any>(null);
    const [visible, setVisible] = useState(false);
    const [macroList, setMacroList] = useState<any[]>([]);
    const [currentInfo, setCurrentInfo] = useState<AnyObj>({});
    const [textHtml, setTextHtml] = useState('');
    const [defaultInfo, setDefaultInfo] = useState<any>({})
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({
        left: 0,
        top: 0,
    })
    const [blindFields, setBlindFields] = useState({
        macro_type: 0,
        label_id: 0,
    })

    const tagRef = useRef({});
    const idRef = useRef('0');

    useImperativeHandle(cRef, () => ({
        changeDefaultValue: (val: string) => {
            updateHtml(val);
        },
    }))

    const handleSelectionChange = () => {
        const sel = window.getSelection && window.getSelection();
        if (sel && sel.rangeCount) {
            savedRange.current = sel.getRangeAt(0);
        }
    }

    const getMacroFilterList = () => {
        const test_data = [
            {
                "macro_label_id": "2",
                "macro_label": "盲盒标签",
                "macro_type": "4",
                "is_need_item": 1,
                "attr_list": [
                    {
                        "label_id": 1,
                        "label": "盲盒",
                        "table": "dw.dws_tag_box_project_view",
                        "join_field": "",
                        "primary_key": "box_id",
                        "options": [
                            {
                                "ck_val_type": "STRING",
                                "field": "name",
                                "name": "盲盒名称",
                                "alias": "name",
                                "is_val_enum": 0,
                                "description": "盲盒名称",
                                "id": 1,
                                "val_type": "STRING"
                            },
                            {
                                "ck_val_type": "INT",
                                "field": "box_id",
                                "name": "盲盒ID",
                                "alias": "box_id",
                                "is_val_enum": 0,
                                "description": "盲盒唯一标识ID",
                                "id": 2,
                                "val_type": "INT"
                            },
                            {
                                "ck_val_type": "DOUBLE",
                                "field": "original_price",
                                "name": "盲盒原价",
                                "alias": "original_price",
                                "is_val_enum": 0,
                                "description": "盲盒原售价",
                                "id": 3,
                                "val_type": "DOUBLE"
                            },
                            {
                                "ck_val_type": "DOUBLE",
                                "field": "sale_price",
                                "name": "盲盒售价",
                                "alias": "sale_price",
                                "is_val_enum": 0,
                                "description": "盲盒现售价",
                                "id": 4,
                                "val_type": "DOUBLE"
                            }
                        ]
                    }
                ]
            },
            {
                "macro_label_id": "3",
                "macro_label": "活动标签",
                "macro_type": "4",
                "is_need_item": 1,
                "attr_list": [
                    {
                        "label_id": 2,
                        "label": "拼团发车",
                        "table": "dim.dim_box_activity_view",
                        "join_field": "",
                        "primary_key": "sub_activity_id",
                        "options": [
                            {
                                "ck_val_type": "INT",
                                "field": "sub_activity_id",
                                "name": "活动ID",
                                "alias": "sub_activity_id",
                                "is_val_enum": 0,
                                "description": "活动id",
                                "id": 5,
                                "val_type": "INT"
                            },
                            {
                                "ck_val_type": "STRING",
                                "field": "sub_activity_name",
                                "name": "活动名称",
                                "alias": "sub_activity_name",
                                "is_val_enum": 0,
                                "description": "活动名称",
                                "id": 6,
                                "val_type": "STRING"
                            }
                        ]
                    },
                    {
                        "label_id": 3,
                        "label": "活动奖品",
                        "table": "dim.dim_box_activity_view",
                        "join_field": "",
                        "primary_key": "sub_activity_id",
                        "options": [
                            {
                                "ck_val_type": "INT",
                                "field": "sub_activity_id",
                                "name": "活动ID",
                                "alias": "sub_activity_id",
                                "is_val_enum": 0,
                                "description": "活动id",
                                "id": 7,
                                "val_type": "INT"
                            },
                            {
                                "ck_val_type": "STRING",
                                "field": "sub_activity_name",
                                "name": "活动名称",
                                "alias": "sub_activity_name",
                                "is_val_enum": 0,
                                "description": "活动名称",
                                "id": 8,
                                "val_type": "STRING"
                            }
                        ]
                    },
                    {
                        "label_id": 4,
                        "label": "优惠券",
                        "table": "dim.dim_box_activity_view",
                        "join_field": "",
                        "primary_key": "sub_activity_id",
                        "options": [
                            {
                                "ck_val_type": "INT",
                                "field": "sub_activity_id",
                                "name": "优惠券ID",
                                "alias": "sub_activity_id",
                                "is_val_enum": 0,
                                "description": "优惠券id",
                                "id": 9,
                                "val_type": "INT"
                            },
                            {
                                "ck_val_type": "INT",
                                "field": "sub_activity_name",
                                "name": "优惠券名称",
                                "alias": "sub_activity_name",
                                "is_val_enum": 0,
                                "description": "优惠券名称",
                                "id": 10,
                                "val_type": "INT"
                            }
                        ]
                    }
                ]
            }
        ]
        setMacroList(test_data);
    }

    const getBoxSpan = (obj: AnyObj) => {
        for (let i = 0; i < macroList.length; i++) {
            const record = macroList[i];
            // console.log('record', record);
            // if (record.macro_label_id === obj.macro_label_id) {
            const arr = record.attr_list;
            for (let j = 0; j < arr.length; j++) {
                // if (arr[j].join_field === obj.join_field){
                const { options, label_id, label } = arr[j];
                for (let k = 0; k < options.length; k++) {
                    if (options[k].field === obj.attr_field) {
                        // console.log('ooo', options[j]);
                        const num = getRandomNum();
                        const id = `${i}_${j}_${k}_${num}`;
                        // <span style="line-height:14px"></span>
                        const val = `<span contenteditable="false" class="tag_item" data-need=${record.is_need_item} data-id=${id} data-type=${record.macro_type} id=${id} data-labelid=${label_id} ><span class="tab_title">${label}：${options[k].name}</span></span>`;
                        // console.log(val);
                        tagRef.current[id] = {};
                        if (obj.item_id) {
                            tagRef.current[id].item_id = obj.item_id;
                        }
                        if (item_id && item_label_id === label_id) {
                            tagRef.current[id].item_id = item_id;
                        }
                        if (obj.default_value) {
                            tagRef.current[id].default_value = obj.default_value;
                        }
                        return val;
                    }
                }
            }
            // }
        }
    }

    const updateHtml = (val: string) => {
        // console.log('val', val);
        savedRange.current = null;
        if (val === '') {
            textRef.current.innerHTML = '';
            return;
        }
        let mentionStr = '';
        val.split('##').map(item => {
            if (isJsonString(item)) {
                const str = getBoxSpan(JSON.parse(item));
                mentionStr += str;
            } else {
                mentionStr += `${item}`
            }
        })
        // console.log('mentionStr', mentionStr);
        textRef.current.innerHTML = mentionStr;
        handleBlur();
    }

    useEffect(() => {
        updateHtml(defaultValue);
        // if (macroList.length > 0) {
        //     updateHtml(defaultValue);
        // }
    }, [macroList]);

    useEffect(() => {
        if (landing_page_id) {
            updateHtml(defaultValue);
        }
    }, [macroList, JSON.stringify(landing_page_id)])

    const clickFunc = useCallback(e => {
        if (e && e.target.className === 'tag_item') {
            e.stopPropagation();
            const { need, id, type, labelid } = e.target.dataset;
            setCurrentInfo({ need, id });
            if (need === '1') {
                setBlindFields({
                    macro_type: type,
                    label_id: labelid,
                })
            }
            if (tagRef.current[id]) {
                setDefaultInfo(tagRef.current[id])
            }
            setVisible(true);
        } else if (e && e.target.className === 'tab_title') {
            // console.log('1', e);
            e.stopPropagation();
            const parent_node = e.target.parentNode;
            if (idRef.current === parent_node.id) {
                setMenuVisible(false);
                idRef.current = '0';
            } else {
                setMenuVisible(true);
                setMenuPosition({
                    left: e.clientX,
                    top: e.clientY + 20,
                })
                idRef.current = parent_node.id;
            }
        }
    }, []);

    useEffect(() => {
        getMacroFilterList();
    }, [])

    useEffect(() => {
        textRef.current.addEventListener('click', clickFunc);
        return () => {
            textRef.current.removeEventListener('click', clickFunc);
        }
    }, [])

    // 1-100随机数
    const getRandomNum = () => Math.floor(Math.random() * 100 + 1)

    const addTagItem = (parent_obj, sub_obj, obj, str) => {
        // console.log('sub_obj', sub_obj);
        const num = getRandomNum();
        const id = `${str}_${num}`;
        if (item_id && item_label_id === sub_obj.label_id) {
            tagRef.current[id] = {
                item_id,
            }
        }
        const tag = `<span contenteditable="false" class="tag_item" data-need=${parent_obj.is_need_item} data-id=${id} id=${id} data-type=${parent_obj.macro_type} data-labelid=${sub_obj.label_id}><span class="tab_title">${sub_obj.label}：${obj.name}</span></span>`;
        pasteHtmlAtCaret(tag);
    }

    const pasteHtmlAtCaret = html => {
        const sel: any = window.getSelection();
        let range = savedRange.current || keepCursorEnd(true).getRangeAt(0);
        const input = range.createContextualFragment(html);
        range.insertNode(input);
        const lastNode = input.lastChild; // 记录插入input之后的最后节点位置
        if (lastNode) { // 如果有最后的节点
            range = range.cloneRange();
            range.setStartAfter(lastNode);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
        }
        savedRange.current = null;
        // keepCursorEnd(false);
        handleBlur();
    }

    /**
    * 将光标重新定位到内容最后
    * isReturn 是否要将range实例返回
    * */
    const keepCursorEnd = isReturn => {
        if (window.getSelection) {
            // ie11 10 9 firefox safari
            textRef.current.focus();
            const sel: any = window.getSelection(); // 创建range
            sel.selectAllChildren(textRef.current); // range 选择obj下所有子内容
            sel.collapseToEnd(); // 光标移至最后
            if (isReturn) return sel;
        } else if (document.selection) {
            // ie9以下
            const sel = document.selection.createRange(); // 创建选择对象
            sel.moveToElementText(textRef.current); // range定位到编辑器
            sel.collapse(false);// 光标移至最后
            sel.select();
            if (isReturn) return sel;
        }
    }

    const handleBlur = () => {
        const element = textRef.current.childNodes;
        let str = '';
        for (let i = 0; i < element.length; i++) {
            const ele = element[i];
            if (ele.dataset && ele.dataset.id) {
                // console.log('ele', ele);
                const { id, need } = ele.dataset;

                const arr = id.split('_');
                const [i, j, k] = arr.map(val => +val);
                const fields = {
                    attr_name: macroList[i].attr_list[j].options[k].name,
                    attr_field: macroList[i].attr_list[j].options[k].field,
                    table: macroList[i].attr_list[j].table,
                    join_field: macroList[i].attr_list[j].join_field,
                    macro_label_id: macroList[i].macro_label_id,
                    label_id: macroList[i].attr_list[j].label_id,
                }

                if (need === '1') {
                    if (!tagRef.current[id] || !tagRef.current[id].item_id) {
                        // message.error('盲盒标签需绑定盲盒');
                        isCheck(false);
                        return;
                    }
                    fields.item_id = tagRef.current[id].item_id;
                }

                if (tagRef.current[id]) {
                    fields.default_value = tagRef.current[id].default_value;
                }
                // console.log(fields);
                const data = `##${JSON.stringify(fields)}##`;
                str += data;
            } else {
                str += ele.nodeValue || ele.innerText || '';
            }
        }
        // console.log('str', str);
        callback(str);
        isCheck(true);
    }

    const handlePaste = e => {
        e.stopPropagation();
        e.preventDefault();
        let text = '';
        const event = (e.originalEvent || e);
        if (event.clipboardData && event.clipboardData.getData) {
            text = event.clipboardData.getData('text/plain');
        } else if (window.clipboardData && window.clipboardData.getData) {
            text = window.clipboardData.getData('Text');
        }
        if (document.queryCommandSupported('insertText')) {
            document.execCommand('insertText', false, text);
        } else {
            document.execCommand('paste', false, text);
        }
    }

    const menu = (
        <Menu>
            {
                macroList.map((item: AnyObj, i) => (
                    <SubMenu title={item.macro_label} key={item.macro_label_id} popupClassName={styles.tag_menu}>
                        {
                            item.attr_list.map((obj, j) => (
                                <Menu.ItemGroup title={obj.label} key={obj.label_id}>
                                    {
                                        obj.options.map((row, k) => (
                                            <Menu.Item key={row.id} onClick={() => {
                                                addTagItem(item, obj, row, `${i}_${j}_${k}`);
                                            }}>{row.name}</Menu.Item>
                                        ))
                                    }
                                </Menu.ItemGroup>
                            ))
                        }
                    </SubMenu>
                ))
            }
        </Menu>
    );

    const handleCancel = () => {
        setVisible(false);
        setDefaultInfo({});
        keepCursorEnd(false);
        handleBlur();
    }

    const handleAddDefault = () => {
        const { id } = currentInfo;
        tagRef.current[id] = defaultInfo;
        handleCancel();
    }

    return (
        <div>
            <div style={{ position: 'relative' }} onClick={() => {
                setMenuVisible(false);
                idRef.current = '0';
            }}>
                <div className={styles.edit_container} style={{ marginBottom: 20 }}>
                    <div className={styles.header}>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <div>
                                <Icon type="plus-circle" style={{ color: '#2e88fc', marginRight: 5 }} />添加标签
                            </div>
                        </Dropdown>
                    </div>
                    <div
                        placeholder="请输入内容"
                        className={styles.edit_body}
                        ref={textRef}
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={() => {
                            handleBlur()
                        }}
                        onClick={() => {
                            handleSelectionChange();
                        }}
                        // onPaste={handlePaste}
                        onKeyUp={e => {
                            if (e.keyCode === 8) {
                                const spans = textRef.current.getElementsByTagName('span');
                                for (let i = 0; i < spans.length; i++) {
                                    if (spans[i].innerText === '\n ') {
                                        textRef.current.removeChild(spans[i])
                                    }
                                }
                            }
                            handleSelectionChange();
                        }}
                    // dangerouslySetInnerHTML={{ __html: textHtml }}
                    ></div>
                    {
                        menuVisible && (
                            <Menu className={styles.menu_content} style={{ left: menuPosition.left, top: menuPosition.top }}>
                                {
                                    macroList.map((item: AnyObj, i) => (
                                        <SubMenu title={item.macro_label} key={item.macro_label_id}>
                                            {
                                                item.attr_list.map((obj, j) => (
                                                    <Menu.ItemGroup title={obj.label} key={obj.label_id}>
                                                        {
                                                            obj.options.map((row, k) => (
                                                                <Menu.Item key={row.id} onClick={() => {
                                                                    const dom: any = document.getElementById(idRef.current);
                                                                    const child_dom = dom.firstChild;
                                                                    const num = getRandomNum();
                                                                    const id = `${i}_${j}_${k}_${num}`;
                                                                    if (tagRef.current[idRef.current]) {
                                                                        delete tagRef.current[idRef.current];
                                                                    }
                                                                    dom.setAttribute('data-need', item.is_need_item);
                                                                    dom.setAttribute('data-type', item.macro_type);
                                                                    dom.setAttribute('data-id', id);
                                                                    dom.setAttribute('id', id);
                                                                    child_dom.innerText = `${item.macro_label}：${row.name}`;
                                                                    setMenuVisible(false);
                                                                    handleBlur();
                                                                }}>{row.name}</Menu.Item>
                                                            ))
                                                        }
                                                    </Menu.ItemGroup>
                                                ))
                                            }
                                        </SubMenu>
                                    ))
                                }
                            </Menu>
                        )
                    }
                </div>

                <Modal title="设置默认值" width={500} visible={visible} onCancel={handleCancel} onOk={handleAddDefault}>
                    <Row style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {
                            currentInfo.need === '1' && (
                                <Col style={{ marginBottom: 15 }}>
                                    <BlindBoxSelect
                                        value={defaultInfo.item_id}
                                        parent_fields={
                                            {
                                                ...blindFields,
                                                ...idInfo,
                                            }
                                        }
                                        visible={visible}
                                        callbackUpdate={val => {
                                            setDefaultInfo({
                                                ...defaultInfo,
                                                item_id: val,
                                            })
                                        }} />
                                    <div style={{ color: '#999', marginTop: 3 }}>用于动态获取指定盲盒下的标签</div>
                                </Col>
                            )
                        }
                        <Col>
                            <Input style={{ width: 400 }} placeholder="请输入默认值" allowClear value={defaultInfo.default_value} onChange={e => {
                                setDefaultInfo({
                                    ...defaultInfo,
                                    default_value: e.target.value,
                                })
                            }} />
                            <div style={{ color: '#999', marginTop: 3 }}>建议填写默认值，用于属性被删除或空值时占位</div>
                        </Col>
                    </Row>
                </Modal>
            </div>
        </div>
    )
}

export default EditConfig;
