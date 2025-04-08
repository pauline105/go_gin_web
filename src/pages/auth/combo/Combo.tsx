import React from "react";
import { Input, Button } from 'antd'
import {
  SearchOutlined,
  PlusOutlined,
  DeleteOutlined,
} from "@ant-design/icons"
import '@/style/auth/combo.scss'
function Combo() {
  return <div className="combo_container">
    <div>
      <div>
        <span>套餐名</span>
        <Input placeholder="套餐名" />
        <Button type="primary" icon={<SearchOutlined />}>查詢</Button>
        <Button type="primary" icon={<PlusOutlined />}>新增</Button>
      </div>
      <div>
        <span>企業名</span>
        <Input placeholder="企業名" />
        <Button type="primary" icon={<SearchOutlined />}>查詢</Button>
        <Button type="primary" icon={<PlusOutlined />}>添加企業</Button>
        <Button type="primary" danger icon={<DeleteOutlined />}>移除企業</Button>
      </div>
    </div>
    <div>
      <div></div>
      <div></div>
    </div>
  </div>;
}

export default Combo;
