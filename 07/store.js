import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// ストアの作成
const store = new Vuex.Store({
  // ステート
  state: {
    tasks: [
      {
        id: 1,
        name: '牛乳を買う',
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う',
        done: true
      }
    ]
  }
})

export default store