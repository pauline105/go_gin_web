import request from "..";
// 獲取部門數據
export const requestOrg = () => {
    return request({
        method: "get",
        url: 'orgList',
    })
}


// 獲取部門員工信息
export const requestUserOrgTable = () => {
    return request({
        method: "get",
        url: 'userDataList'
    })
}