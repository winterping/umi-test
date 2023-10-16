import React, { useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
import { IndexRoute } from '../../router/index'

import { Link } from 'umi'


const BasicLayout: React.FC = (props: any) => {
    const { children, location } = props;
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])
    const { routes } = IndexRoute;

    useEffect(() => {
        setSelectedKeys([location.pathname]);
        // console.log('children', children);
    }, [])


    return (
        <Layout style={{ minHeight: '100vh', background: 'rgb(246,242,258)' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#fff' }}>
                <Menu selectedKeys={selectedKeys} mode="inline">
                    {
                        routes.map(item => (
                            <Menu.Item key={item.path} icon={<item.icon />} onClick={() => {
                                setSelectedKeys([item.path]);
                            }}>
                                <Link to={item.path}>{item.name}</Link>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Content>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default BasicLayout;