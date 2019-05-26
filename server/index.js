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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/timeline', (req, res) => {
  oa.get(
    'https://api.twitter.com/1.1/statuses/home_timeline.json?count=75',
    accessToken,
    accessSecret,
    function (e, data, result) {
      res.send(JSON.parse(data))
    }
  )
})

app.post('/api/tweet', (req, res) => {
  const status = req.body.status
  oa.post(
    `https://api.twitter.com/1.1/statuses/update.json`,
    accessToken,
    accessSecret,
    {status},
    function (e, data, result) {
      res.send(JSON.parse(data))
    }
  )
})

app.post('/api/profile', (req, res) => {
  const id = req.body.id
  oa.get(
    `https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${id}&count=25`,
    accessToken,
    accessSecret,
    function (e, data, result) {
      res.send(JSON.parse(data))
    }
  )
})

app.get('/api/trend', (req, res) => {
  if (req.query.q) {
    oa.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.q}`,
      accessToken,
      accessSecret,
      function (e, data, result) {
        res.send(JSON.parse(data))
      }
    )
  } else {
    oa.get(
      'https://api.twitter.com/1.1/trends/place.json?id=1',
      accessToken,
      accessSecret,
      function (e, data, result) {
        res.send(JSON.parse(data))
      }
    )
  }
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})