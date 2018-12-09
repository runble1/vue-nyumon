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
        labelIds: [1, 2],
        done: false
      },
      {
        id: 2,
        name: 'Vue.jsの本を買う',
        labelIds: [1, 3],
        done: true
      }
    ],

    labels: [
      {
        id: 1,
        text: '買い物'
      },
      {
        id: 2,
        text: '食料'
      },
      {
        id: 3,
        text: '本'
      }
    ],

    nextTaskId: 3,
    nextLabelId: 4,
    filter: null
  },
  getters: {
    // フィルタ後のタスクを返す
    filteredTasks(state) {
      // ラベルが選択されていなければそのままの一覧を返す
      if(!state.filter) {
        return state.tasks
      }
      // 選択されているラベルでフィルタリングする
      return state.tasks.filter(tasks => {
        return tasks.labelIds.indexOf(state.filter) >= 0
      })
    }
  },
  mutations: {
    addTask(state, { name, labelIds }) {
      state.tasks.push({
        id: state.nextTaskId,
        name,
        labelIds,
        done: false
      })
      // 次に追加されるタスクに付与するIDを更新
      state.nextTaskId++
    },
    toggleTaskStatus(state, { id }) {
      const filtered = state.tasks.filter(task => {
        return task.id === id
      })

      filtered.forEach(task => {
        task.done = !task.done
      })
    },
    addLabel(state, { text }) {
      state.labels.push({
        id: state.nextLabelId,
        text
      })
      state.nextLabelId++
    },
    // フィルタリング対象のラベルを変更
    changeFilter(state, { filter }) {
      state.filter = filter
    }
  }
})

export default store