import request from "..";

// 登錄
export const requestLogin = (data: { username: string, password: string }) => {
    return request({
        method: 'post',
        url: 'login',
        data
    })
}