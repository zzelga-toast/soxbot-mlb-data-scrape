const puppeteer = require('puppeteer');

let scrape = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.mlb.com/redsox');
  await page.waitFor(1000);

  // scrape
  const result = await page.evaluate(() => {
    let activeGame = document.querySelector('[data-game-status-description="In Progress"]');

    if (activeGame === null) {
      return {
        awayScore: '',
        homeScore: '',
        currentInning: ''
      };
    }
    
    let awayScore = document.querySelector('div.g5-component--mlb-scores__MIG__team-matchup > div.g5-component--mlb-scores__MIG__score.g5-component--mlb-scores__MIG__score--away').innerText;
    let homeScore = document.querySelector('div.g5-component--mlb-scores__MIG__team-matchup > div.g5-component--mlb-scores__MIG__score.g5-component--mlb-scores__MIG__score--home').innerText;  
    let currentInning = document.querySelector('span.g5-component--mlb-scores__bases-graphic__game-time').innerText.trim();

    return {
      awayScore,
      homeScore,
      currentInning
    };
  });

  browser.close();
  return result;
};

scrape().then((value) => {
  console.log(value);
});