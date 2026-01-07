import type { Course, Title } from '@/type'

export function listCourses() {
  const courses: Course[] = [
    {
      id: 4,
      name: 'Java程序设计',
      createTime: '2046-05-10T12:00',
      term: 0,
      point: 0
    },
    {
      id: 5,
      name: 'Web开发技术',
      createTime: '2046-04-10T09:00',
      term: 0,
      point: 0
    },
    {
      id: 6,
      name: 'Web系统框架',
      createTime: '2046-06-10T21:30',
      term: 0,
      point: 0
    },
    {
      id: 7,
      name: '移动终端开发技术',
      createTime: '2046-06-13T18:43',
      term: 0,
      point: 0
    }
  ]
  return courses
}

export function listTitles() {
  const titles: Title[] = [
    { id: 1, name: '讲师' },
    { id: 2, name: '副教授' },
    { id: 3, name: '教授' }
  ]
  return titles
}
export interface item {
  id?: String
  name?: String
  price?: number
  number?: number //月销量
  sale?: number //购入数量
}
export interface Shop {
  id?: String
  point?: number
  items?: item[]
  name?: String
}

//店铺列表
export const listShopsMock = async () => {
  const shops: Shop[] = [
    { id: '12', name: '必胜客', point: 4.5 },
    { id: '65', name: '牛肉料理', point: 4.2 },
    { id: '89', name: '小林炸鸡', point: 4.8 }
  ]
  return new Promise<Shop[]>((resolve) => {
    setTimeout(() => {
      resolve(shops)
    }, 1000)
  })
}
