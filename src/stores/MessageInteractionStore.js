import { decorate, observable, action } from 'mobx'

export class MessageInteractionStore {
  message = {}
  active = false

  setActive(state) {
    this.active = state
  }

  setMessage(data) {
    this.message = data
  }
}

decorate(MessageInteractionStore, {
  message: observable,
  tweet: observable,
  active: observable,
  setActive: action,
  setMessage: action
})

export default new MessageInteractionStore()
