import { request } from '@/utils'

export default {
  login: data => request.post('/auth/login', data, { needToken: false }), // 登陆
  getUser: () => request.post('/users/detail'), // 获取用户详细信息
  isCaptcha: () => request.post('/auth/captcha', { needToken: false }), // 是否开启验证码
}
