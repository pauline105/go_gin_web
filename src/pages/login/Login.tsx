import { useEffect, useState } from 'react'
import { requestRegister } from '../../request/register'
import { requestLogin } from '../../request/login'
import { Button, message } from 'antd'
import '@/style/login/index.scss'


function Login() {
  // 用戶提示
  const [userTips, setUserTips] = useState('')
  // 密碼提示
  const [pwdTips, setPwdTips] = useState('')
  // 用戶名
  const [username, setUserame] = useState("")
  // 密碼
  const [password, setPassword] = useState("")
  // 判斷登錄還是註冊
  const [register, setRegister] = useState("login")
  useEffect(() => {
    document.title = "WalAdmin"
    initHandle()
  }, [])

  // 註冊用戶事件
  const registerHandle = async () => {
    const data = await requestRegister({ "username": username, "password": password })
    console.log(data);
    if (data.status === 200) {
      message.success("註冊成功,即將自動登錄")
    }
  }

  // 登錄事件
  const loginHandle = async () => {
    const data = await requestLogin({ "username": username, "password": password })
    console.log(data);
    if (data.status === 200) {
      message.success("登錄成功,即將跳轉首頁")
    }
  }

  //  初始化是否用戶名於密碼 
  const initHandle = () => {
    username.trim() !== "" ? setUserTips("用戶名") : setUserTips('請輸入用戶名')

    password.trim() !== "" ? setPwdTips("密碼") : setPwdTips("請輸入密碼")

  }
  // 登錄事件
  const loginBtnHandle = () => {
    if (register === "login") {
      loginHandle()
    } else {
      registerHandle()
    }

  }
  // 失去焦點事件
  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>, tips: string) => {
    if (e.target.value === '') {
      tips === '請輸入用戶名' ? setUserTips('請輸入用戶名') : setPwdTips('請輸入密碼')
    }
  };
  return (
    // 登錄框
    <div className='login_container'>
      <div className="login_box">
        {/* 用戶輸入 */}
        <div className="input_data">
          <div className="radius_box">
            <input autoComplete="username" name='username' value={username} type="text" required onChange={e => setUserame(e.target.value)} onFocus={() => setUserTips('用戶名')} onBlur={(e) => handleBlur(e, '請輸入用戶名')} />
            <div className="underline"></div>
            <label>{userTips}</label>
          </div>
        </div>
        {/* 密碼輸入 */}
        <div className="input_data">
          <div className="radius_box">
            <input name='password' value={password} type="password" onChange={e => setPassword(e.target.value)} required onFocus={() => setPwdTips('密碼')} onBlur={(e) => handleBlur(e, '請輸入密碼')} />
            <div className="underline"></div>
            <label>{pwdTips}</label>
          </div>
        </div>
        {/* 忘記密碼 */}
        {register === "login" && <div className="forget_pwd">
          <span onClick={() => setRegister("register")}>註冊</span>
          <span>忘記密碼?</span>
        </div>}
        {register === 'register' && <div className='back_login'><span onClick={() => setRegister("login")} className='back_login'>返回登錄</span></div>}
        {/* 登錄按鈕 */}
        <div className='btn_box'>
          <Button type='primary' onClick={loginBtnHandle}>{register === "register" ? "註冊" : "登錄"}</Button>
        </div>
      </div>
    </div >
  )
}

export default Login