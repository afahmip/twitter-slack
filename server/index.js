require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const OAuth = require('oauth')

const consumerKey = process.env.CONSUMER_KEY || ''
const consumerSecret = process.env.CONSUMER_SECRET || ''
const accessToken = process.env.ACCESS_TOKEN || ''
const accessSecret = process.env.ACCESS_SECRET || ''
const PORT = 5000

const app = express()
const oa = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  consumerKey,
  consumerSecret,
  '1.0A',
  null,
  'HMAC-SHA1'
)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/timeline', (req, res) => {
  oa.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json',
    accessToken,
    accessSecret,
    function (e, data, result) {
      res.send(JSON.parse(data))
    }
  )
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})