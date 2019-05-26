import { decorate, observable, action } from 'mobx'

export class TimelineStore {
  tweets = []
  created_at = null

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
      result.push(item)
    })
    this.tweets = result
  }

  setCreatedAt(data) {
    this.created_at = data
  }
}

decorate(TimelineStore, {
  tweets: observable,
  created_at: observable,
  setTweets: action,
  setCreatedAt: action
})

export default new TimelineStore()
