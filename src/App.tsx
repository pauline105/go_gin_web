// src/App.jsx
import './App.scss';
import routes from './router'; // 導入路由配置
import { useRoutes } from 'react-router-dom';
import './assets/font/iconfont'
function App() {
  const router = useRoutes(routes);  // 使用 useRoutes 處理路由配置
  return (
    <>
      {router}
    </>
  )
}

export default App;
