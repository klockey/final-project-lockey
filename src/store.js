 import {computed, observable, observer} from 'mobx'

 class Store {
@observable user = {}

@observable date = new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate()
}

 const store = new Store()

 window.store = store

 export default store
