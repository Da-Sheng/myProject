import { get } from '@/utils/request';

// 使用示例
export const getList = async () => {
  try {
    const response = await get<{data: any[]}>('/api/list');
    console.log('用户列表:', response.data);
    return response.data;
  } catch (error) {
    console.error('获取用户失败:', error);
  }
}
