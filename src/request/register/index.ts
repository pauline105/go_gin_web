import request from "..";

// 註冊用戶信息
export const requestRegister = (data: { username: string, password: string }) => {
    return request({
        method: "post",
        url: "register",
        data
    })
}