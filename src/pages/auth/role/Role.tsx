import React from "react"
import { Button, Input, Dropdown } from "antd"
import type { MenuProps } from "antd"
import {
  SearchOutlined,
  PlusOutlined,
  DownOutlined,
  DeleteOutlined,
} from "@ant-design/icons"
import "@/style/auth/role.scss"
function Role() {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <> 新增分组</>,
    },
    {
      key: "2",
      label: <> 新增角色</>,
    },
  ]
  return (
    <div className="role_container">
      <div>
        <div>
          <span>角色名稱</span>
          <Input placeholder="角色名稱" />
          <Button icon={<SearchOutlined />} type="primary">
            查詢
          </Button>
          <Dropdown
            overlayClassName="add-dropdown"
            arrow
            placement="bottom"
            menu={{ items }}
          >
            <Button icon={<DownOutlined />} iconPosition={"end"} type="primary">
              新增
            </Button>
          </Dropdown>
        </div>
        <div></div>
      </div>
      <div>
        <div>
          <span>姓名</span>
          <Input placeholder="姓名" />
          <Button icon={<SearchOutlined />} type="primary">
            查詢
          </Button>
          <Button icon={<PlusOutlined />} type="primary">
            新增
          </Button>
          <Button danger icon={<DeleteOutlined />} type="primary">
            移除员工
          </Button>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Role
