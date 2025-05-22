import React, { useState, useEffect, useCallback } from "react";
import SplitPane from "react-split-pane";
import '@/style/auth/user.scss'
import { Input, Tree, Select, Button, Table, Modal, TreeSelect, Switch, Dropdown } from 'antd';

import { SearchOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';
import { requestOrg, requestUserOrgTable } from "@/request/user";

function User() {
  const [treeData, settreeData] = useState([]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [treeSelectValue, setTreeSelectValue] = useState([]);
  const [orgData, setOrgData] = useState([]);
  // 表格數據加載
  const [tableSpin, setTableSpin] = useState(true);

  // 員工資料
  const [userProfile, setUserProfile] = useState({
    name: '',
    phone: '',
    user: '',
    role: '',
    email: '',
    position: '',
    gender: '',
    director: ''
  })
  const addNameProperty = useCallback((data) => {
    data.forEach(item => {
      item.value = item.title;
      if (item.children && item.children.length > 0) {
        addNameProperty(item.children);
      }
    });
  }, []);
  // 獲取部門數據
  const getOrgList = useCallback(async () => {
    try {
      const { data } = await requestOrg()
      addNameProperty(data.org_list)

      settreeData(data.org_list)
    } catch (e) {
      console.log(e);
      return
    }
  }, [addNameProperty])
  useEffect(() => {
    const init = async () => {
      await getOrgList();
    }
    init();
  }, [getOrgList]);

  useEffect(() => {
    if (treeData.length !== 0 && treeData[0].key) {
      getOrgTableList(treeData[0].key)
    }
  }, [treeData]);







  // 獲取部門員工信息
  const getOrgTableList = async (keyword) => {
    try {
      setTableSpin(true)
      const { data } = await requestUserOrgTable({ keyword })
      setOrgData(data.org_list)
      setTableSpin(false)
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
      render: (value) => {
        return <Switch checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={value}></Switch>
      }
    },
    {
      title: '操作',
      fixed: 'right',
      width: 140,
      render: (value, record) => {
        return <div>
          <Button onClick={() => {
            console.log(record);
            setUserProfile({
              name: record.name,
              email: record.email,
              phone: record.phone,
              role: record.role,
              user: record.username,
              position: record.position,
              gender: record.gender
            })
            setEditModal(true)
          }} icon={
            <svg className="icon svg-icon" aria-hidden="true">
              <use xlinkHref="#edit-04"></use>
            </svg>}>
            編輯
          </Button>
          <Dropdown menu={{ items }} placement="bottom" arrow>

            <Button icon={<DownOutlined />} iconPosition={"end"} type="primary">
              更多
            </Button>
          </Dropdown>

        </div>
      }
    },
  ];

  const items = [
    {
      key: '1',
      label: "設置主管",
    },
    {
      key: '2',
      label: "重置密碼",
    },
    {
      key: '3',
      label: "刪除用戶",
    },
    {
      key: '4',
      label: "一鍵登錄",
    },
    {
      key: '5',
      label: "強制下線",
    },

  ];

  const editTreeData = [
    {
      value: '崗位',
      title: '崗位',
      children: [
        {
          value: '超級管理員',
          title: '超級管理員',
        },
        {
          value: '普通員工',
          title: '普通員工',
        }
      ]
    }
  ]

  const showModal = () => {
    setAddModalOpen(true);
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
  const onSelect = (_, info) => {
    getOrgTableList(info.node.key)
  };
  const onExpand = (keys, info) => {
    console.log('Trigger Expand', keys, info);
  };
  return (
    <div className="user_container">
      <SplitPane paneStyle={{ overflow: 'hidden' }} split="vertical" minSize={300} defaultSize={300} primary="first">
        <div>
          <div>
            <div className="search_box">
              <Input
                placeholder="篩選部門"
              // onChange={onChange}
              />
            </div>
            {treeData.length !== 0 && <Tree
              defaultExpandAll
              defaultSelectedKeys={[treeData[0].key]}
              blockNode
              onSelect={onSelect}
              onExpand={onExpand}
              treeData={treeData}
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
              {treeData &&
                <Table
                  rowSelection={{
                    type: "checkbox",
                    ...rowSelection,
                  }}
                  columns={columns}
                  dataSource={orgData}
                  bordered
                  rowKey="id"
                  loading={tableSpin}
                  scroll={{ x: 'max-content' }}
                />
              }
            </div>
          </div>
        </div>
      </SplitPane>
      <Modal centered className='add_modal' title="新增用戶" open={addModalOpen} onOk={() => setAddModalOpen(false)} onCancel={() => setAddModalOpen(false)}>
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
              options={treeSelectValue.length === 0 ? [] : treeSelectValue.map(item => ({ value: item, label: item }))}
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
      <Modal centered className='edit_modal' title="編輯用戶" open={editModal} onOk={() => setEditModal(false)} onCancel={() => setEditModal(false)}>
        <div>
          <label>姓名</label>
          <Input value={userProfile.name} />
        </div>
        <div>
          <label>手機號</label>
          <Input value={userProfile.phone} />
        </div>
        <div>
          <label>賬號</label>
          <Input value={userProfile.user} />
        </div>
        <div>
          <label>直屬主管</label>
          <Input value={userProfile.director} />
        </div>
        <div>
          <label>角色</label>
          <TreeSelect
            showSearch
            style={{ width: '100%' }}
            value={userProfile.role}
            dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
            placeholder="請選擇主管"
            allowClear
            treeDefaultExpandAll
            // onChange={onChange}
            treeData={editTreeData}
          />
        </div>
        <div>
          <label>郵箱</label>
          <Input value={userProfile.email} />
        </div>
        <div>
          <label>職位</label>
          <Input value={userProfile.position} />
        </div>
        <div>
          <label>性別</label>
          <Input value={userProfile.gender} />
        </div>
      </Modal>
    </div>
  )
}

export default User;
