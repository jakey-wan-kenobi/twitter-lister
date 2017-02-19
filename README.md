<h1 align="center">
  <img src="https://media.giphy.com/media/8zjUHaJ9fjAVG/giphy.gif" alt="Bird" width="300">
  <br>
  <br>
  Create CSVs from Twitter Lists
  <br>
</h1>

<h4 align="center">Create the perfect audience for your next marketing campaign with Twitter lists.</h4>

<p align="center">
<a align="center" href="http://standardjs.com/"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="Standard"></a>
<br>
<br>
</p>

## Getting Started

Before you can access the Twitter API, you need to create an app. This will grant you a consumer key, a consumer secret, an access token, and an access secret.

Once you've done that, do the following to create your first list!

1. Clone the repo
2. `npm install`
3. Adjust the listName, listOwner, and listCount values in lib/server.js
4. Insert your Twitter app secrets and keys (in an .env file)
4. `npm start`

After running `npm start` you should see `File saved!` logged to console. You'll find your CSV file, with users' `id` and `screen_name`, in the `/csv` directory.

To save another csv, change out all the values again and save -- nodemon will magically restart and save your next file.

## A Few More Details

The listName and listOwner values are the strings that you can grab from Twitter itself. For example, if the list owner is @jakeywankenobi, the listName is "jakeywankenobi." If the list is called "awesomelist", that's the string to insert into listOwner. See the lib/server.js file itself (the comment block at the top of the file).

More details on the .env file: create a .env file in the base of your repo, and place the consumer key, consumer secret, access token, and access token secret in there, according to the following format:

```
const twitter = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
})
```

After this, you're good to go.

Happy hunting!
