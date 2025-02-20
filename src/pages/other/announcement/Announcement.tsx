import React from 'react'
import '@/style/other/announcement.scss'
import { Button, Space, Table, Tag } from 'antd'
import type { TableProps } from 'antd';
interface DataType {
    key: string,
    title: string,
    date: string,
    role: string,
    tags: string[],
}
function Announcement() {

    const columns: TableProps<DataType>['columns'] = [
        {
            title: '公告標題',
            dataIndex: 'title',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: '發佈時間',
            dataIndex: 'date',
            key: 'date',
            ellipsis: true,

        },
        {
            title: '發佈人',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: '操作',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        const color = tag == '修改' ? 'blue' : 'red'
                        return (
                            <Tag key={tag} color={color}>
                                {tag}
                            </Tag>
                        );
                    })}
                </>
            ),
        },

    ];

    const data: DataType[] = [
        {
            key: '1',
            title: 'ww',
            date: '2025-02-20',
            role: 'boss',
            tags: ['修改', '刪除']
        },
        {
            key: '2',
            title: 'ww',
            date: '2025-02-20',
            role: 'boss',
            tags: ['修改', '刪除'],
        },
        {
            key: '3',
            title: 'ww',
            date: '2025-02-20',
            role: 'boss',
            tags: ['修改', '刪除']
        },
        {
            key: '4',
            title: 'ww',
            date: '2025-02-20',
            role: 'boss',
            tags: ['修改', '刪除']
        },
        {
            key: '5',
            title: 'ww',
            date: '2025-02-20',
            role: 'boss',
            tags: ['修改', '刪除']
        },

    ];

    return (
        <div className='announcement_container'>
            <div>
                <Button type='primary'>新增通知</Button >
                <span className='iconfont shuaxin'></span>
            </div>
            <Table<DataType> bordered columns={columns} dataSource={data} />
        </div>
    )
}

export default Announcement