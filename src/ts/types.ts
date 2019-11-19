export interface IPost {
  title: string
  description?: string
  url: string,
  user: string
  date: Date
  uploadDate?: Date
  updateDate?: Date
  type: IPostType
  location: number[]
}

export type IPostType =
  'people' |
  'scenery' |
  'architecture' |
  'road' |
  'school' |
  'graduation' |
  'other'