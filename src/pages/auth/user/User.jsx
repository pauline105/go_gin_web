import React, { useState, useEffect } from "react";
import SplitPane from "react-split-pane";
import '@/style/auth/user.scss'
import { Input, Tree, Select, Button, Table } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { requestOrg } from "@/request/user";

function User() {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [treeData, settreeData] = useState([]);

  useEffect(() => {
    getOrgList()
  }, []);

  // 獲取部門數據
  const getOrgList = async () => {
    try {
      const { data } = await requestOrg()
      console.log(data.org_list);
      settreeData(data.org_list)
    } catch (e) {
      console.log(e);
      return
    }
  }

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
  const onSelect = (keys, info) => {
    console.log('Trigger Select', keys, info);
  };
  const onExpand = (keys, info) => {
    console.log('Trigger Expand', keys, info);
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
            {treeData.length != 0 && <Tree
              defaultExpandAll
              blockNode
              onSelect={onSelect}
              onExpand={onExpand}
              treeData={treeData}
              expandAction="click"
            />}
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
              {treeData && <Table
                rowSelection={{
                  type: selectionType,
                  ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                bordered
              />}
            </div>
          </div>
        </div>
      </SplitPane>
    </div>
  )
}

export default User;
