import React from 'react'
import { Select, Alert } from 'antd'
import "../style/notices/index.scss"
function allNotices() {
  return (
    <div className='allNotices_container'>
      <p>消息通知</p>
      <div>
        <span>
          <Select
            defaultValue="消息類型"
            style={{ width: 120 }}
            // onChange={handleChange}
            options={[
              { value: '消息類型', label: '消息類型' },
              { value: '系統通知', label: '系統通知' },
              { value: '申請通知', label: '申請通知' },
            ]}
          />
        </span>
        <div className='notices_box'>
          <div>
            <span><Alert message="系統通知" type="success" /></span>
            <span>資源審核通過</span>
            <p>你推薦的資源[xxxx]已經通過審核</p>
          </div>
          <div>
            <span><Alert message="系統通知" type="success" /></span>
            <span>資源審核通過</span>
            <p>你推薦的資源[xxxx]已經通過審核</p>
          </div>
          <div>
            <span><Alert message="系統通知" type="success" /></span>
            <span>資源審核通過</span>
            <p>你推薦的資源[xxxx]已經通過審核</p>
          </div>
          <div>
            <span><Alert message="系統通知" type="success" /></span>
            <span>資源審核通過</span>
            <p>你推薦的資源[xxxx]已經通過審核</p>
          </div>
          <div>
            <span><Alert message="系統通知" type="success" /></span>
            <span>資源審核通過</span>
            <p>你推薦的資源[xxxx]已經通過審核</p>
          </div>
          <div>
            <span><Alert message="系統通知" type="success" /></span>
            <span>資源審核通過</span>
            <p>你推薦的資源[xxxx]已經通過審核</p>
          </div>
          <div>
            <span><Alert message="系統通知" type="success" /></span>
            <span>資源審核通過</span>
            <p>你推薦的資源[xxxx]已經通過審核</p>
          </div>
          <div>
            <span><Alert message="系統通知" type="success" /></span>
            <span>資源審核通過</span>
            <p>你推薦的資源[xxxx]已經通過審核</p>
          </div>
          <div>
            <span><Alert message="系統通知" type="success" /></span>
            <span>資源審核通過</span>
            <p>你推薦的資源[xxxx]已經通過審核</p>
          </div>
          <div>
            <span><Alert message="系統通知" type="success" /></span>
            <span>資源審核通過</span>
            <p>你推薦的資源[xxxx]已經通過審核</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default allNotices