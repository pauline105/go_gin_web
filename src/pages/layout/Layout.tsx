import React, { useEffect, useState } from 'react';
import '@/style/layout/index.scss'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MailOutlined,
    AppstoreOutlined,
    DownOutlined
} from '@ant-design/icons';
import { Outlet } from 'react-router-dom';

import { Button, Layout, Menu, Breadcrumb, Dropdown, Tooltip } from 'antd';
import type { MenuProps } from 'antd';
import { requestUserInfo } from '../../request/layout'
type MenuItem = Required<MenuProps>['items'][number];
const { Header, Sider, Content } = Layout;

const LayoutComponent: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        document.title = '控制台 - WalAdmin'
        getUserInfoHandle()
    }, [])

    // 獲取用戶信息
    const getUserInfoHandle = async () => {
        const data = await requestUserInfo()
        console.log(data);

    }

    const items: MenuItem[] = [
        {
            key: 'sub1',
            label: 'Navigation One',
            icon: <MailOutlined />,
            children: [
                { key: '5', label: 'Option 5' },
                { key: '6', label: 'Option 6' },
                { key: '7', label: 'Option 7' },
                { key: '8', label: 'Option 8' },
            ],
        },
        {
            key: 'sub2',
            label: 'Navigation Two',
            icon: <AppstoreOutlined />,
            children: [
                { key: '9', label: 'Option 9' },
                { key: '10', label: 'Option 10' },
                {
                    key: 'sub3',
                    label: 'Submenu',
                    children: [
                        { key: '11', label: 'Option 11' },
                        { key: '12', label: 'Option 12' },
                    ],
                },
            ],
        },
    ];

    return (
        <div className='layout_container'>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className='logo'>WalAdmin</div>
                    <div className='menu_box'>
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            items={items}
                        />
                    </div>
                </Sider>
                <Layout>
                    <Header>
                        <div>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                            />
                            <Breadcrumb
                                items={[
                                    {
                                        title: 'Home',
                                    },
                                    {
                                        title: <span>Application Center</span>,
                                    },
                                    {
                                        title: <span>Application List</span>,
                                    },
                                    {
                                        title: 'An Application',
                                    },
                                ]}
                            />
                        </div>
                        <div>
                            <Tooltip arrow={false} title="菜單搜索">
                                <i className='icon search'></i>
                            </Tooltip>
                            <Tooltip arrow={false} title="消息通知">
                                <i className='icon xiaoxi'></i>
                            </Tooltip>
                            <div className='avatar'></div>
                            <Dropdown menu={{ items }}>
                                <span>  管理員<DownOutlined /></span>
                            </Dropdown>
                        </div>
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </div>

    );
};

export default LayoutComponent;