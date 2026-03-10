import { request } from '@/utils'

export default {
  read: (params = {}) => request.post('/others/danmaku-info/get-data', params), // 获取列表数据
  export: (params = {}) => request.post('/others/danmaku-info/export-data', params, { responseType: 'blob', timeout: 60000 }), // 导出列表数据
}
