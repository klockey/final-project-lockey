import {computed, observable, observer} from 'mobx'
import { firebase } from './db'

class Store {
  @observable user = {}
  @observable date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
  @observable url = ''
}

window.setTimeout(() => {
  store.user = firebase.auth().currentUser
}, 1000)

const store = new Store()

window.store = store

export default store
