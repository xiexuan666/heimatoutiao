// 引入axios配置好的基准路径
import axios from '@/utils/axios.js'
// 登录
export const login = (data) => {
  return axios({
    method: 'post',
    url: '/login',
    data
  })
}
// 2.根据id获取用户详情
export const xie = (id) => {
  return axios({
    // method: 'get',
    url: `/user/${id}`
  })
}
// 3. 更新个人信息
export const updateUserById = (id, data) => {
  return axios({
    method: 'post',
    url: `/user_update/${id}`,
    data
  })
}
/// / 4. 实现用户注册
export const register = (data) => {
  return axios({
    method: 'post',
    url: '/register',
    data
  })
}
