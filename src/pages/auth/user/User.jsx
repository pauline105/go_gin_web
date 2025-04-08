import React, { useState } from "react";
import SplitPane from "react-split-pane";
import '@/style/auth/user.scss'
import { Input, Tree, Select, Button, Table } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

function User() {
  const [selectionType, setSelectionType] = useState('checkbox');
  const select_option = [
    {
      value: '姓名',
      label: '姓名',
    },
    {
      value: '手機號',
      label: '手機號',
    },
    {
      value: '郵箱',
      label: '郵箱',
    },
    {
      value: '用戶名',
      label: '用戶名',
    },
  ]
  const treeData = [
    {
      "title": "根节点1",
      "key": "0-0",
      "children": [
        {
          "title": "子节点1-1",
          "key": "0-0-0"
        },
        {
          "title": "子节点1-2",
          "key": "0-0-1",
          "children": [
            {
              "title": "子节点1-2-1",
              "key": "0-0-1-0"
            }
          ]
        }
      ]
    },
    {
      "title": "根节点2",
      "key": "0-1",
      "children": [
        {
          "title": "子节点2-1",
          "key": "0-1-0"
        }
      ]
    }
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sydney No. 1 Lake Park',
    },
  ];
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  return (
    <div className="user_container">
      <SplitPane split="vertical" minSize={50} defaultSize={1200} primary="second">
        <div>
          <div>
            <div className="search_box">
              <Input
                placeholder="篩選部門"
              // onChange={onChange}
              />
            </div>
            <Tree
              // onExpand={onExpand}
              // expandedKeys={expandedKeys}
              // autoExpandParent={autoExpandParent}
              treeData={treeData}
            />
          </div>
        </div>
        <div>
          <div>
            <Select defaultValue="用戶名" options={select_option}></Select>
            <Input />
            <Button icon={<SearchOutlined />} type="primary">查詢</Button>
          </div>
          <div>
            <Button icon={<PlusOutlined />} type="primary">新增</Button>
            <Button disabled type="primary">部門轉移</Button>
            <div>
              <Table
                rowSelection={{
                  type: selectionType,
                  ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                bordered
              />
            </div>
          </div>
        </div>
      </SplitPane>
    </div>
  )
}

export default User;
