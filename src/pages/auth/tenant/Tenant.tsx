import React from "react";
import { Input, Button } from 'antd'
import { SearchOutlined, PlusOutlined, } from '@ant-design/icons'
import '@/style/auth/tenant.scss'
function Tenant() {
    return <div className="tenant_container">
        <div>
            <span>企業名稱</span>
            <Input placeholder="企業名稱" />
            <Button icon={<SearchOutlined />} type="primary">
                查詢
            </Button>
            <Button icon={<PlusOutlined />} type="primary">
                新增
            </Button>
        </div>
        <div></div>
    </div>;
}

export default Tenant;
