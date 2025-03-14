// src/App.jsx
import './App.css';
import routes from './router'; // 導入路由配置
import { useRoutes } from 'react-router-dom';
function App() {
  const router = useRoutes(routes);  // 使用 useRoutes 處理路由配置
  return (
    <>
      {router}
    </>
  )
}

export default App;
