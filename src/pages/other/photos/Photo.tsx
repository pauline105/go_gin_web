import React from 'react'
import { Button } from 'antd';
import '../../../style/other/photo.scss'


function Photo() {
  return (
    <div className='photo_container'>
      {/* header */}
      <div className='header'>
        <Button type='primary'>新增圖片分類</Button>
      </div>

      <div className='sider'>
        <div>
          <div>
            <span>運動旅行</span>
            <div>
              <span>修改</span>
              <span>X</span>
            </div>
          </div>

        </div>
        <div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photo