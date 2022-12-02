async function getCryptoPrices(SYMBOL) {
  const [symbol, bidPrice, askPrice] = await fetch(
      "https://api1.binance.com/api/v3/ticker/bookTicker"
  )
      .then((x) => x.json())
      .then(
          (list) =>
              list.find((c) => c.symbol === SYMBOL) ??
              Promise.reject("Symbol not found")
      )
      .then(({ symbol, bidPrice, askPrice }) => {
        return [symbol].concat([bidPrice, askPrice].map(Number));
      });

  return { symbol, bidPrice, askPrice };
}

async function main() {
  loadMarquee();
  await loadCrypto();
}

function loadMarquee() {
  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
  );
  const marqueeContent = document.querySelector("ul.marquee-content");

  root.style.setProperty("--marquee-elements", marqueeContent.children.length);

  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
}

async function loadCrypto() {
  const BTCUSDT = await getCryptoPrices("BTCUSDT");
  const btc = document.querySelectorAll('[data-rates="BTC"]');

  const ETHUSDT = await getCryptoPrices("ETHUSDT");
  const eth = document.querySelectorAll('[data-rates="ETH"]');

  const BNBUSDT = await getCryptoPrices("BNBUSDT");
  const bnb = document.querySelectorAll('[data-rates="BNB"]');

  const BUSDUSDT = await getCryptoPrices("BUSDUSDT");
  const busd = document.querySelectorAll('[data-rates="BUSDUSDT"]');

  const XRPUSDT = await getCryptoPrices("XRPUSDT");
  const xrp = document.querySelectorAll('[data-rates="XRPUSDT"]');

  const DOGEUSDT = await getCryptoPrices("DOGEUSDT");
  const doge = document.querySelectorAll('[data-rates="DOGEUSDT"]');

  const ADAUSDT = await getCryptoPrices("ADAUSDT");
  const ada = document.querySelectorAll('[data-rates="ADAUSDT"]');

  const MATICUSDT = await getCryptoPrices("MATICUSDT");
  const matic = document.querySelectorAll('[data-rates="MATICUSDT"]');

  btc.forEach(item => item.innerHTML = BTCUSDT.bidPrice + " $");
  eth.forEach(item => item.innerHTML = ETHUSDT.bidPrice + " $");
  bnb.forEach(item => item.innerHTML = BNBUSDT.bidPrice + " $");
  busd.forEach(item => item.innerHTML = BUSDUSDT.bidPrice + " $");
  xrp.forEach(item => item.innerHTML = XRPUSDT.bidPrice + " $");
  doge.forEach(item => item.innerHTML = DOGEUSDT.bidPrice + " $");
  ada.forEach(item => item.innerHTML = ADAUSDT.bidPrice + " $");
  matic.forEach(item => item.innerHTML = MATICUSDT.bidPrice + " $");
}

main();