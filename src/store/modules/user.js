const user = {
  state: {
    userName: ''
  },
  mutations: {
    SET_USERNAME: (states, userName) => {
    // 设置用户的userName
      states.userName = userName
    }
  },
  actions: {
    setUserName ({commit}, userName) {
      commit('SET_USERNAME', userName)
    }
  }
}

export default user
