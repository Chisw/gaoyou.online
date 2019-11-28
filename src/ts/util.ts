import { IPost, ICategory } from './types'

export const emptyPost: IPost = {
  id: '',
  title: '加载中..',
  description: '',
  url: '',
  user: '',
  date: new Date(),
  type: 'school',
  location: [131, 32]
}


export const categories: ICategory[] = [
  {
    id: 'A',
    name: '风景',
    children: [
      { id: 'A1', name: '田园' },
      { id: 'A2', name: '河湖' },
      { id: 'A3', name: '古建筑' },
    ]
  },
  {
    id: 'B',
    name: '人物',
    children: [
      { id: 'B1', name: '肖像' },
      { id: 'B2', name: '合影' },
      { id: 'B3', name: '毕业照' },
    ]
  },
  {
    id: 'C',
    name: '场所',
    children: [
      { id: 'C1', name: '学校' },
      { id: 'C2', name: '单位' },
      { id: 'C3', name: '街道' },
      { id: 'C4', name: '公共' }
    ]
  },
  {
    id: 'D',
    name: '文档',
    children: [
      { id: 'D1', name: '书籍' },
      { id: 'D2', name: '报刊' },
      { id: 'D3', name: '证书' },
      { id: 'D4', name: '票张' }
    ]
  },
  {
    id: 'E',
    name: '物件',
    children: [
      { id: 'E1', name: '摆件' },
      { id: 'E2', name: '工具' },
      { id: 'E3', name: '大件' },
      { id: 'E4', name: '杂类' }
    ]
  },
]