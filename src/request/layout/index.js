import request from "..";

// 獲取用戶信息 
export const requestUserInfo = () => {
    return request({
        method: "get",
        url: 'userInfo',
    })
}

// 獲取用戶菜單
export const requestMenu = () => {
    return request({
        method: 'get',
        url: 'menu'
    })
}