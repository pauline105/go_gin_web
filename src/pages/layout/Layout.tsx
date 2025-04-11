import React, { useEffect, useState } from 'react';
import '@/style/layout/index.scss'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined
} from '@ant-design/icons';
import { Outlet, useNavigate } from 'react-router-dom';

import { Button, Layout, Menu, Breadcrumb, Dropdown, Tooltip } from 'antd';
import type { userInfoType } from '../../type/user'
import { requestUserInfo } from '../../request/layout'
const { Header, Sider, Content } = Layout;

const LayoutComponent: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  // 用戶信息
  const [userInfo, setUserInfo] = useState<userInfoType>()
  // 菜單數據
  const [menu, setMenuData] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    document.title = '控制台 - WalAdmin'
    getUserInfoHandle()
  }, [])

  // 獲取用戶信息
  const getUserInfoHandle = async () => {
    try {
      const res = await requestUserInfo()
      setUserInfo(res.data.userInfo)
      setMenuData(res.data.menu)
    } catch (error) {
      console.log(error);
      return
    }
  }

  // 退出登錄
  const loginOut = () => {
    sessionStorage.clear()
    navigate('login')
  }

  // 點擊菜單事件
  const menuClickHandle = (item: any) => {
    const { path } = item.item.props
    console.log(path);
    navigate(path)
  }

  // 處理菜單數據
  const transformMenuData = (data: any) => {
    return data.map((item: any) => ({
      ...item,
      icon: React.createElement("i", { className: item.icon }),
      children: item.children ? transformMenuData(item.children) : undefined
    }));
  };
  // 下拉數據
  const dropDownItems = [
    {
      key: '1',
      label: (
        <span>工作台</span>
      ),
    },
    {
      key: '2',
      label: (
        <span>個人中心</span>
      ),
    },
    {
      key: '3',
      label: (
        <span>消息通知</span>
      ),
    },
    {
      key: '4',
      label: (
        <span onClick={loginOut}>退出登錄</span>
      ),
    },
  ]
  // 
  return (
    <div className='layout_container'>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className='logo'>WalAdmin</div>
          <div className='menu_box'>
            {menu && menu.length !== 0 && <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              items={transformMenuData(menu)}
              onClick={(item) => menuClickHandle(item)}
            />}
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
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#search"></use>
                </svg>
              </Tooltip>
              <Tooltip arrow={false} title="消息通知">
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#xiaoxi"></use>
                </svg>
              </Tooltip>

              <Dropdown overlayClassName='header-dropdown' menu={{ items: dropDownItems }}>
                <div>
                  <img src={userInfo?.avatar} alt="" />
                  <span>  {userInfo?.name}<DownOutlined /></span>
                </div>
              </Dropdown>
            </div>
          </Header>
          <div className='tabs'></div>
          <div className='content_box'>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
          </div>
        </Layout>
      </Layout>
    </div>

  );
};

export default LayoutComponent;