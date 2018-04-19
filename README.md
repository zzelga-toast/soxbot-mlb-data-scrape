# soxbot-mlb-data-scrape

A Node CLI web scraper - part of the [SOXBOT](https://github.com/demarsdouglas/soxbot) project for the Toast Spring 2018 Hackathon.

Scrapes the Red Sox page on mlb.com, with no regard for whether or not there is a game in progress.

`git clone` this repo

`npm install` once you're in the project directory

`node index.js` to run the scraper, and get back a JSON payload.

### Payload structure

`{ awayScore: '', homeScore: '', currentInning: '' }`

If there is no game currently in progress, the payload will have empty values, as shown above - otherwise, it will the current values at the time of the scrape.

## I hate baseball.