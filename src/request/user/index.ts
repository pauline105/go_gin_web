import request from "..";
// 獲取部門數據
export const requestOrg = () => {
    return request({
        method: "get",
        url: 'orgList',
    })
}