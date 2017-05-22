// import {computed, observable} from 'mobx'

class Store {
@observable x = ''
}

const store = new Store()

window.store = store

export default store
