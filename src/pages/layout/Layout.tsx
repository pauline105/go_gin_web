import React, { useEffect, useState } from 'react';
import '@/style/layout/index.scss'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme, Breadcrumb } from 'antd';

const { Header, Sider, Content } = Layout;

const LayoutComponent: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        document.title = '控制台 - WalAdmin'
    }, [])
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

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
                            items={[
                                {
                                    key: '1',
                                    icon: <UserOutlined />,
                                    label: 'nav 1',
                                },
                                {
                                    key: '2',
                                    icon: <VideoCameraOutlined />,
                                    label: 'nav 2',
                                },
                                {
                                    key: '3',
                                    icon: <UploadOutlined />,
                                    label: 'nav 3',
                                }
                            ]}
                        />
                    </div>
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }}>
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
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </div>

    );
};

export default LayoutComponent;