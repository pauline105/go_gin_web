import React, { useState, useEffect } from "react";
import SplitPane from "react-split-pane";
import '@/style/auth/user.scss'
import { Input, Tree, Select, Button, Table, Modal, TreeSelect, Switch } from 'antd';

import { SearchOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';
import { requestOrg, requestUserOrgTable } from "@/request/user";

function User() {
  const [treeData, settreeData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [treeSelectValue, setTreeSelectValue] = useState([]);
  const [orgData, setOrgData] = useState([]);

  useEffect(() => {
    getOrgList()
    getOrgTableList()
  }, []);

  function addNameProperty(data) {
    data.forEach(item => {
      item.value = item.title;
      if (item.children && item.children.length > 0) {
        addNameProperty(item.children);
      }
    });
  }
  // 獲取部門數據
  const getOrgList = async () => {
    try {
      const { data } = await requestOrg()
      addNameProperty(data.org_list)

      settreeData(data.org_list)
    } catch (e) {
      console.log(e);
      return
    }
  }

  // 獲取部門員工信息
  const getOrgTableList = async () => {
    try {
      const { data } = await requestUserOrgTable()
      console.log(data.org_list);
      setOrgData(data.org_list)
    } catch (error) {
      console.log(error);
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
      dataIndex: 'username',
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
      width: 60,
      rowClassName: (record, index) => {
        console.log(record);
        return 'switch';
      },
      render: (value) => {
        return <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={value}></Switch>
      }
    },
    {
      title: '操作',
      fixed: 'right',
      width: 140,
      render: () => {
        return <div>
          <Button icon={
            <svg class="icon svg-icon" aria-hidden="true">
              <use xlinkHref="#edit-04"></use>
            </svg>}>編輯</Button>
          <Button icon={<DownOutlined />} iconPosition={"end"} type="primary">
            更多
          </Button>
        </div>
      }
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
              defaultSelectedKeys={[treeData[0].key]}
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
                  type: "checkbox",
                  ...rowSelection,
                }}
                columns={columns}
                dataSource={orgData}
                bordered
                rowKey="id"
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
              value={treeSelectValue}
              allowClear
              multiple
              treeDefaultExpandAll
              onChange={(value) => setTreeSelectValue(value)}
              treeData={treeData}
              maxTagCount={1}
            />
          </div>
          <div>
            <label>主屬部門</label>
            <Select
              style={{ width: '100%' }}
              mode="multiple"
              // value={treeSelectValue && treeSelectValue.map(item => item.value)} // 這樣選中的 value 是正確的
              options={treeSelectValue.length == 0 ? [] : treeSelectValue.map(item => ({ value: item, label: item }))}
              placeholder="已選項目"
              maxTagCount={1}
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
            <Select
              style={{ width: '100%' }}
              placeholder='請選擇'
              options={[
                { label: '男', value: '男' },
                { label: '女', value: '女' }
              ]} />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default User;
