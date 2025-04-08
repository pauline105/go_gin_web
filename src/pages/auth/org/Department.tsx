import { Input, Button } from 'antd'
import { SearchOutlined, PlusOutlined, } from '@ant-design/icons'
import '@/style/auth/org.scss'
function Department() {
    return <div className="org_container">
        <div>
            <span>部門名稱</span>
            <Input placeholder="部門名稱" />
            <Button icon={<SearchOutlined />} type="primary">
                查詢
            </Button>
        </div>
        <div>
            <div>
                <Button icon={<PlusOutlined />} type="primary">
                    新增
                </Button>
            </div>
        </div>
    </div>;
}

export default Department;
