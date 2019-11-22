import { IPost } from './types'

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
