# Europe in data
Website to view the most meaningfull statistics/indicators about EU countries (+ Switzerland, Norway, Iceland).

Live at: [https://europeindata.eu]

## Scraped sources 
- imf
- eurostat
- wikipedia
- oecd

## How to run
### Frontend
```npm i && npm run dev```

### Python scraping environment
```cd /country-data```
```pipenv shell```
scrape_eurostat.py - indicators from eurostat
scrape_imf.py - indicators from imf
manual.py - all other indicators