# Europe in data
<img src="/public/whole-logo.png" height="120"/>
Website to view the most meaningful statistics/indicators about EU countries (+ Switzerland, Norway, Iceland).

Live at: https://europeindata.eu

## Scraped sources 
- imf
- eurostat
- wikipedia
- oecd

## How to run
### Frontend
```
npm i && npm run dev
```

### Python scraping environment
```
cd /country-data
```
```
pipenv shell
```
scrape_eurostat.py - indicators from eurostat <br/>
scrape_imf.py - indicators from imf <br/>
manual.py - all other indicators <br/>
