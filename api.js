// 定义初始数据
const users = [
  { id: 1, name: 'jack', year: 12, grade: 1 },
  { id: 2, name: 'john', year: 12, grade: 1 },
  { id: 3, name: 'winer', year: 12, grade: 2 }
]

// user的father，根据child链接
const fathers = [
  {id: 11, child: 'jack', name: 'jack_father'},
  {id: 22, child: 'john', name: 'john_father'},
  {id: 33, child: 'winer', name: 'winer_father'}
]

class Api {
  // 根据id获取一个User对象的Promise
  getUserById (id, request_time = 1000, fn = function () {}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(item => {
          return item.id === id
        })
        fn()
        resolve(user)
      }, request_time)
    })
  }
  // 根据grade获取一个User对象列表的Promise
  getUsersByGrade (grade) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const _users = users.filter(item => {
          return item.grade === grade
        })
        resolve(_users)
      }, 1000)
    })
  }
  // 根据user获取一个UserName的Promise
  getUserName (user, request_time = 1000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const child = users.find(item => {
          return item.name === user.name
        })
        resolve(child.name)
      }, request_time)
    })
  }
  // 根据userName获取一个Father的Promise
  getFatherByChildName (childName) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const father = fathers.find(item => {
          return item.child === childName
        })
        resolve(father)
      }, 1000)
    })
  }
  // 抛出一个异常的Promise
  throw_Error () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('api.js-------->抛出了一个错误'))
      }, 1000)
    })
  }
}