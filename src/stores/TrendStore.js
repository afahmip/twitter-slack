import { decorate, observable, action, computed } from 'mobx'

export class TrendStore {
  hashtags = []
  created_at = null

  get isInLocalStorage() {
    if (localStorage.getItem('trends')) return true
    return false
  }

  get storedHashtags() {
    let trends = JSON.parse(localStorage.getItem('trends'))
    if (!trends) return []
    return trends.hashtags
  }

  get storedCreatedAt() {
    let trends = JSON.parse(localStorage.getItem('trends'))
    if (!trends) return null
    return trends.created_at
  }

  setHashtags(data) {
    this.hashtags = data
    this.setAllData(data, '')
  }

  setCreatedAt(data) {
    this.created_at = data
    this.setAllData([], data)
  }

  setAllData(hashtags = [], created_at = '') {
    let trends = JSON.parse(localStorage.getItem('trends')) || {}
    if (!trends.hashtags) trends.hashtags = hashtags
    if (!trends.created_at) trends.created_at = created_at
    // console.log(trends)
    localStorage.setItem('trends', JSON.stringify(trends))
  }
}

decorate(TrendStore, {
  hashtags: observable,
  created_at: observable,
  isInLocalStorage: computed,
  storedHashtags: computed,
  storedCreatedAt: computed,
  setHashtags: action,
  setCreatedAt: action
})

export default new TrendStore()
