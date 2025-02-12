import React from 'react';
import { Layout, Menu, theme } from 'antd';
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
  HomeOutlined 
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
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
    console.log('click ', e);
  };
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items: MenuItem[] = [
    {
      key: "home",
      icon: React.createElement(HomeOutlined),
      label: "首頁"},

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
          key: "archived-projects",
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
 
  return (
    <div className="home_container">
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
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
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
              <span>你好,管理員</span>
              <span>退出</span>
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