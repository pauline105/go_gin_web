import '../../style/login/index.scss'
import Logo from '../../image/login/logo.jpg'
import type { FormProps } from 'antd';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../../request/login/login';

function Login() {
    document.title = '登錄-川煒堂員工管理後台系統'
    const navigate = useNavigate()
    type FieldType = {
        username: string;
        password: string;
    };

    // 登錄方法
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        const res = await login(values)
        if (res.data.httpStatus === '200') {
            message.success("登陸成功,即將跳轉")
            localStorage.setItem('token', res.data.token)
            setTimeout(() => {
                navigate('/home', { state: { id: res.data.profile.RoleId } })
            }, 1000)

        } else {
            message.error("用戶名或者密碼不正確")
        }

    };
    // 登錄失敗回調
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='login_container'>

            {/* 登錄框 */}
            <div className='login_box'>
                <div className='login_title'>
                    <img src={Logo} alt="" className='logo' />
                    <span>
                        歡迎登錄</span><span>川煒堂公司人員管理系統</span>
                </div>
                <div className="login_box_container">
                    <p>登 錄 系 統</p>
                    <Form
                        name="login_form"
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 17 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        initialValues={{ username: "waley326", password: "123456" }}
                    >
                        <Form.Item
                            label="用戶名"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '請輸入您的用戶名!',
                                },
                            ]}
                        >
                            <Input placeholder='請輸入您的用戶名' />
                        </Form.Item>

                        <Form.Item
                            label="密碼"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '請輸入您的密碼!',
                                },
                            ]}
                        >
                            <Input.Password placeholder='請輸入您的密碼' />
                        </Form.Item>
                        <Form.Item >
                            <span>忘記密碼?</span>
                        </Form.Item>
                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit">
                                登錄
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div >
    )
}

export default Login