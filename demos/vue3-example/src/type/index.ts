export interface Title {
  id?: number
  name?: string
}
export interface User {
  id?: number
  level?: number
  name?: string
  address?: string
  insertTime?: string
  sex?: string
  title?: Title
  courses?: Course[]
}
export interface Course {
  id?: number
  name?: string // 名称
  createTime?: string
  term?: number // 学期
  point?: number // 学分
}

export function listCourses() {
  const courses: Course[] = [
    { name: '高级语言程序设计(C++)', term: 2, point: 2.0 },
    { name: 'Python应用', term: 3, point: 2.0 },
    { name: 'Web开发技术', term: 4, point: 2.5 },
    { name: '数字图像处理', term: 5, point: 2.0 },
    { name: 'Web系统框架', term: 5, point: 2.5 },
    { name: '数据仓库与数据挖掘', term: 5, point: 2.5 },
    { name: 'Web前端开发技术', term: 5, point: 2.0 },
    { name: '服务科学与SOA', term: 6, point: 2.0 },
    { name: '企业资源计划', term: 6, point: 2.0 },
    { name: '机器学习', term: 6, point: 2.0 },
    { name: '人工智能导论', term: 6, point: 2.0 },
    { name: '移动终端软件设计', term: 6, point: 2.5 }
  ]
  return courses
}

//部门接口
export interface Department {
  id?: string
  name?: string
}

//教师接口
export interface Teacher {
  id?: string
  depId?: string
  name?: string
  age?: number
}
