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

## Installation

1. Clone the repo.
2. `npm install`
3. Adjust the listName, listOwner, and listCount values in lib/server.js (see comments in file for further details).
4. `npm start`

You should see `File saved!` logged to console. You'll find your CSV file, with users' `id` and `screen_name`, in the `/csv` directory.

To save another csv, change out all the values again and save -- nodemon will magically restart and save your next file.

Easy!
