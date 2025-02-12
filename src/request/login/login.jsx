
import request from "../index"
export const login = data => {
   return request({
        method: "post",
        url: "/login",
        data
    })
}