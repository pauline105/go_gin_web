import React, { useState, useEffect } from "react";
import SplitPane from "react-split-pane";
import '@/style/auth/user.scss'
import { Input, Tree, Select, Button, Table, Modal, TreeSelect } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import { requestOrg } from "@/request/user";

function User() {
  const [selectionType, setSelectionType] = useState('checkbox');
  const [treeData, settreeData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      title: '賬號',
      dataIndex: 'account',
      width: 200,
      render: (text) => <a>{text}</a>,
    },
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '手機號',
      dataIndex: 'phone',
    },
    {
      title: '郵箱',
      dataIndex: 'email',
    },
    {
      title: '角色',
      dataIndex: 'role',
    },
    {
      title: '狀態',
      fixed: 'right',
      dataIndex: 'phone',
    },
    {
      title: '操作',
      fixed: 'right',
      dataIndex: 'phone',
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


  const showModal = () => {
    setIsModalOpen(true);
  };
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
            <Button onClick={showModal} icon={<PlusOutlined />} type="primary">新增</Button>
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
      <Modal centered className='add_modal' title="新增用戶" open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
        <div>
          <div>
            <label>姓名</label>
            <Input />
          </div>
          <div>
            <label>手机号</label>
            <Input />
          </div>
          <div>
            <label>部門</label>
            <TreeSelect
              style={{ width: '100%' }}
              // value={value}

              allowClear
              multiple
              treeDefaultExpandAll
              // onChange={onChange}
              treeData={treeData}
            />
          </div>
          <div>
            <label>主屬部門</label>
            <TreeSelect
              style={{ width: '100%' }}
              // value={value}
              allowClear
              multiple
              treeDefaultExpandAll
              // onChange={onChange}
              treeData={treeData}
            />
          </div>
          <div>
            <label>賬號</label>
            <Input />
          </div>
          <div>
            <label>密碼</label>
            <Input />
          </div>
          <div>
            <label>直屬主管</label>
            <Input />
          </div>
          <div>
            <label>角色</label>
            <Input />
          </div>
        </div>
        <div className="email">
          <label>郵箱</label>
          <Input />
        </div>
        <div>
          <div>
            <label>職位</label>
            <Input />
          </div>
          <div>
            <label>性別</label>
            <Input />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default User;
