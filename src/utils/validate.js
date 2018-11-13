export function checkData (data) {
  // 当有数据为空时,不能发送请求
  for (let k in data) {
    if (data[k] === '') {
      if (k === 'password') alert('密码不能为空')
      else if (k === 'username') alert('用户名不能为空')
      else alert('请再次输入密码')
      return false
    }
  }
  return true
}
