import React from 'react'
import '../style/editProfile/index.scss'
import { Input } from 'antd'
function EditPofile() {
    return (
        <div className='editProfile'>
            <div className='profile_box'>
                <div>姓名:<Input /></div>
            </div>
        </div>
    )
}

export default EditPofile