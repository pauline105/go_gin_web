// src/App.jsx
import './App.css';
import routes from './router'; // 導入路由配置
import { useRoutes } from 'react-router-dom';
import { useStore } from './compomemt/store';
import { Spin } from 'antd';
function App() {
  const router = useRoutes(routes);  // 使用 useRoutes 處理路由配置
  const { loading } = useStore()
  return (
    <>
      <Spin spinning={loading}>
        {router}
      </Spin>
    </>
  )
}

export default App;
