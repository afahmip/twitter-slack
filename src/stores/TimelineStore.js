import { decorate, observable, action, computed } from 'mobx'

export class TimelineStore {
  tweets = []
  created_at = null

  get isInLocalStorage() {
    if (localStorage.getItem('timeline')) return true
    return false
  }

  get storedTweets() {
    let timeline = JSON.parse(localStorage.getItem('timeline'))
    if (!timeline) return []
    return timeline.tweets
  }

  get storedCreatedAt() {
    let timeline = JSON.parse(localStorage.getItem('timeline'))
    if (!timeline) return null
    return timeline.created_at
  }

  clearStoredData() {
    localStorage.removeItem('timeline')
  }

  setTweets(data) {
    const result = []
    data.map(d => {
      let item = {
        id: d.user.screen_name,
        name: d.user.name,
        photo: d.user.profile_image_url_https,
        text: d.text
      }
      if (d.quoted_status) {
        const q = d.quoted_status
        item.child = {
          id: q.user.screen_name,
          name: q.user.name,
          photo: q.user.profile_image_url_https,
          text: q.text
        }
      }
      if (d.extended_entities) {
        if (d.extended_entities.media) {
          const data = []
          d.extended_entities.media.map(m => {
            if (m.type === 'photo') data.push(m.media_url_https)
          })
          item.media = data
        }
      }
      result.push(item)
    })
    this.tweets = result
    this.setAllData(result, '')
  }

  setCreatedAt(data) {
    this.created_at = data
    this.setAllData([], data)
  }

  setAllData(tweets = [], created_at = '') {
    let timeline = JSON.parse(localStorage.getItem('timeline')) || {}
    if (!timeline.tweets) timeline.tweets = tweets
    if (!timeline.created_at) timeline.created_at = created_at
    // console.log(timeline)
    localStorage.setItem('timeline', JSON.stringify(timeline))
  }
}

decorate(TimelineStore, {
  tweets: observable,
  created_at: observable,
  isInLocalStorage: computed,
  storedTweets: computed,
  storedCreatedAt: computed,
  setTweets: action,
  setCreatedAt: action,
  clearStoredData: action
})

export default new TimelineStore()
