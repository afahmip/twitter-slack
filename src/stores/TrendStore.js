import { decorate, observable, action } from 'mobx'

export class TrendStore {
  trends = []
  created_at = null

  setTrends(data) {
    this.trends = data
  }

  setCreatedAt(data) {
    this.created_at = data
  }
}

decorate(TrendStore, {
  trends: observable,
  created_at: observable,
  setTrends: action,
  setCreatedAt: action
})

export default new TrendStore()
