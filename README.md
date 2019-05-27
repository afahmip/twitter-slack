# Twitter-Slack

Slack-styled Twitter app. Now you can tweet safely at your office without having the constant fear of being seen by your boss.

Made this project for learning purposes, using:
- React
- React Hooks, all the components are functional components
- Styled Components
- Mobx for state management

## Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Twitter app](https://developer.twitter.com/en/docs/basics/apps/overview). You'll gonna need its API keys to get this started.

## Usage

1. Clone this repo
2. Install package, `npm install`
3. Create `.env` file based on `.env.example` provided. Fill in the attributes with `YOUR_KEY` to your Twitter developer app keys.
4. Run both the app and the server, `npm run dev`
5. The app will be served at `http://localhost:3000` and the server will be at `http://localhost:5000`

## Current Features

- [x] Timeline
- [x] Profile Page
- [x] Send tweets
- [x] Worldwide trends
- [ ] Retweet
- [ ] Reply tweet
- [ ] Sign in