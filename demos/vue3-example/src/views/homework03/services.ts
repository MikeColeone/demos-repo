import type { Teacher, Department } from '@/type'
import error from '@/components/error.vue'
import { defineAsyncComponent } from 'vue'
const deps: Department[] = [
  {
    id: '102',
    name: '大数据'
  },
  {
    id: '154',
    name: '人工智能'
  },
  {
    id: '243',
    name: '软件工程'
  }
]

const teachers: Teacher[] = [
  {
    id: '32',
    name: '张阳',
    depId: '102'
  },
  {
    id: '41',
    name: '詹泽晔',
    depId: '102'
  },
  {
    id: '43',
    name: '林玥辰',
    depId: '102'
  },
  {
    id: '52',
    name: '薛瀚',
    depId: '154'
  },
  {
    id: '54',
    name: '赖申婷',
    depId: '154'
  },
  {
    id: '56',
    name: '王青',
    depId: '154'
  },
  {
    id: '63',
    name: '蔡瑶',
    depId: '243'
  },
  {
    id: '64',
    name: '郭夏瑶',
    depId: '243'
  },
  {
    id: '67',
    name: '王思盈',
    depId: '243'
  }
]

export const listDepartmentsService = () => {
  return new Promise<Department[]>((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(deps)
      }, 1000)
    } catch {
      reject(error)
    }
  })
}

export const listTeachersService = (depId: string | undefined) => {
  const teacher = teachers.filter((t) => {
    return t.depId === depId
  })
  return new Promise<Teacher[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(teacher)
    }, 2000)
  })
}
