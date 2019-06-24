const state = {
  user: {
    userName: 'm.sajede',
    name: 'ساجده',
    family: 'محمدی',
    emailAddress: 'm.sajede1375@gmail.com',
    department:'کامپیوتر',
    password: '123456',
    role: 'student'
  }
};

const getters = {
  userRole : state => {
    return state.user.role;
  },
  userInfo : state => {
    return state.user;
  }
};

const mutations = {

};

export default {
  state,
  getters,
  mutations
}
