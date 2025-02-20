import React from 'react';
import { Layout, Menu, theme, Dropdown, message } from 'antd';
import {
  UserOutlined,
  BellOutlined,
  SettingOutlined,
  ProfileOutlined,
  NotificationOutlined,
  FileTextOutlined,
  FolderOutlined,
  FileDoneOutlined,
  SolutionOutlined,
  IdcardOutlined,
  CheckCircleOutlined,
  SmileOutlined,
  MessageOutlined,
  HomeOutlined,
  ContactsOutlined
} from "@ant-design/icons";
import type { MenuProps } from 'antd';
import '../style/layout/index.scss'
import Logo from '../image/login/logo_dark.jpg'
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];
const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const navigate = useNavigate()
  // 跳轉路由
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
    console.log('click ', e);
  };
  // 退出登錄
  const loginOut = () => {
    localStorage.clear()
    navigate('/login')
    message.success("退出登錄")
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items: MenuItem[] = [
    {
      key: "home",
      icon: React.createElement(HomeOutlined),
      label: "首頁"
    },

    {
      key: "notifications",
      icon: React.createElement(BellOutlined),
      label: "通知中心",
      children: [
        {
          key: "allNotices",
          icon: React.createElement(NotificationOutlined),
          label: "所有通知",
        },
        {
          key: "unreadNotice",
          icon: React.createElement(NotificationOutlined),
          label: "未讀通知",
        },
      ],
    },
    {
      key: "",
      icon: React.createElement(ContactsOutlined),
      label: "員工管理",
      children: [
        {
          key: "userManage",
          icon: React.createElement(ContactsOutlined),
          label: "用戶管理",
        },
        {
          key: "emp_Manage",
          icon: React.createElement(FileTextOutlined),
          label: "員工管理",
        },
      ]
    },
    {
      key: "projects",
      icon: React.createElement(FolderOutlined),
      label: "項目管理",
      children: [
        {
          key: "active_projects",
          icon: React.createElement(FileTextOutlined),
          label: "進行中的項目",
        },
        {
          key: "archived_projects",
          icon: React.createElement(FileTextOutlined),
          label: "已存檔項目",
        },
      ],
    },
    {
      key: "customers",
      icon: React.createElement(SolutionOutlined),
      label: "客戶管理",
      children: [
        {
          key: "customer-list",
          icon: React.createElement(IdcardOutlined),
          label: "客戶列表",
        },
        {
          key: "customer-feedback",
          icon: React.createElement(SmileOutlined),
          label: "客戶反饋",
        },
        {
          key: "customer-messages",
          icon: React.createElement(MessageOutlined),
          label: "客戶消息",
        },
      ],
    },
    {
      key: "attendance",
      icon: React.createElement(CheckCircleOutlined),
      label: "考勤管理",
      children: [
        {
          key: "attendance-view",
          icon: React.createElement(FileTextOutlined),
          label: "考勤查看",
        },
        {
          key: "leave-management",
          icon: React.createElement(FileDoneOutlined),
          label: "請假管理",
        },
      ],
    }, {
      key: "other",
      icon: React.createElement(UserOutlined),
      label: "其他模塊",
      children: [
        {
          key: "photos",
          icon: React.createElement(UserOutlined),
          label: "圖片管理",
        },
        {
          key: "announcement",
          icon: React.createElement(UserOutlined),
          label: "公告管理",
        }
      ]
    },
    {
      key: "profile",
      icon: React.createElement(UserOutlined),
      label: "個人資料",
      children: [
        {
          key: "view-profile",
          icon: React.createElement(ProfileOutlined),
          label: "查看資料",
        },
        {
          key: "edit_pofile",
          icon: React.createElement(SettingOutlined),
          label: "編輯資料",
        },
      ],
    },
  ];
  const menuItems: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <span>修改密碼</span>
      ),
    },
    {
      key: '2',
      label: (
        <span onClick={loginOut}>退出登錄</span>
      ),
    },
  ]
  return (
    <div className="layout_container">
      <Layout>
        <Sider
          width={"256px"}
          breakpoint="lg"
          collapsedWidth="0"

        >
          <div className='logo'>
            <img src={Logo} alt="" />
            <span>川煒堂員工系統</span>
          </div>
          <div className='menu_box'>
            <Menu
              onClick={onClick}
              defaultSelectedKeys={['home']}
              defaultOpenKeys={['home']}
              mode="inline"
              items={items}

            />
          </div>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} >
            <div>
              <span>2025年1月6日 晴</span>
              <span>星期一</span>
              <span>
                <Dropdown menu={{ items: menuItems }}>
                  <a >
                    你好,管理員
                  </a>
                </Dropdown>
              </span>
            </div>
          </Header>
          <Content>
            <Outlet />
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            川 煒 堂©{new Date().getFullYear()} Created
          </Footer>
        </Layout>
      </Layout>
    </div>

  );
};

export default Home;