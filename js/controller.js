import * as model from './model.js';

('use strict');

const coinDataContainer = document.querySelector('.coin-data');
const tableContainer = document.querySelector('.crypto-table');

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

const formatterPrice = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const renderSpinner = function (parentEl) {
  const markup = `<div class="spinner">
  <ion-icon class="spinner--icon" name="refresh-outline"></ion-icon>
  </div>`;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

const showCoinData = async function () {
  // Loading coin data

  try {
    await model.loadTop10CoinData();
    const btc = model.state.btc;
    const eth = model.state.eth;
    const tether = model.state.tether;
    const bnb = model.state.bnb;
    const usdc = model.state.usdc;
    const busd = model.state.busd;
    const xrp = model.state.xrp;
    const doge = model.state.doge;
    const cardano = model.state.cardano;
    const matic = model.state.matic;

    // Rendering coin data

    const markup = `
    <tr class="border-top">

    <td class="first-col coin-number center-text ">${btc.mktCapRank}</td>
    <td class="second-col coin-name center-text"><img src="${
      btc.logo
    }" class="coin-logos"><span class="font-bold">${
      btc.name
    }</span><span class="coin-symbol">${btc.symbol.toUpperCase()}</span></td>
    <td class="coin-price center-text">${formatterPrice.format(
      btc.currUsdPrice
    )}</td>
    <td class="1hr-change center-text"><span class="text-negative">
    ${btc.priceChangePercent1h.toFixed(2)}%</span></td>
    <td class="24hr-change center-text"><span class="text-positive">${btc.priceChangePercent24h.toFixed(
      2
    )}%</span></td>
    <td class="7d-change center-text"><span class="text-positive">${btc.priceChangePercent7d.toFixed(
      2
    )}%</span></td>
    <td class="24hr-vol center-text">${formatter.format(
      btc.totalVolume24hr
    )}</td>
    <td class="mkt-cap center-text">${formatter.format(btc.mktCap)}</td>
    <td class="7d-sparkline center-text sparkline><canvas id="sparkline-chart" width="100" height="50"></canvas></td>
  </tr>

  <tr class="border-top">

  <td class="first-col coin-number center-text ">${eth.mktCapRank}</td>
  <td class="second-col coin-name center-text"><img src="${
    eth.logo
  }" class="coin-logos"><span class="font-bold">${
      eth.name
    }</span><span class="coin-symbol">${eth.symbol.toUpperCase()}</span></td>
  <td class="coin-price center-text">${formatterPrice.format(
    eth.currUsdPrice
  )}</td>
  <td class="1hr-change center-text"><span class="text-negative">
  ${eth.priceChangePercent1h.toFixed(2)}%</span></td>
  <td class="24hr-change center-text"><span class="text-positive">${eth.priceChangePercent24h.toFixed(
    2
  )}%</span></td>
  <td class="7d-change center-text"><span class="text-positive">${eth.priceChangePercent7d.toFixed(
    2
  )}%</span></td>
  <td class="24hr-vol center-text">${formatter.format(eth.totalVolume24hr)}</td>
  <td class="mkt-cap center-text">${formatter.format(eth.mktCap)}</td>
  <td class="7d-sparkline center-text sparkline><canvas id="sparkline-chart" width="100" height="50"></canvas></td>
</tr>

<tr class="border-top">

<td class="first-col coin-number center-text ">${tether.mktCapRank}</td>
<td class="second-col coin-name center-text"><img src="${
      tether.logo
    }" class="coin-logos"><span class="font-bold">${
      tether.name
    }</span><span class="coin-symbol">${tether.symbol.toUpperCase()}</span></td>
<td class="coin-price center-text">${formatterPrice.format(
      tether.currUsdPrice
    )}</td>
<td class="1hr-change center-text"><span class="text-negative">
${tether.priceChangePercent1h.toFixed(2)}%</span></td>
<td class="24hr-change center-text"><span class="text-positive">${tether.priceChangePercent24h.toFixed(
      2
    )}%</span></td>
<td class="7d-change center-text"><span class="text-positive">${tether.priceChangePercent7d.toFixed(
      2
    )}%</span></td>
<td class="24hr-vol center-text">${formatter.format(
      tether.totalVolume24hr
    )}</td>
<td class="mkt-cap center-text">${formatter.format(tether.mktCap)}</td>
<td class="7d-sparkline center-text sparkline><canvas id="sparkline-chart" width="100" height="50"></canvas></td>
</tr>

<tr class="border-top">

<td class="first-col coin-number center-text ">${bnb.mktCapRank}</td>
<td class="second-col coin-name center-text"><img src="${
      bnb.logo
    }" class="coin-logos"><span class="font-bold">${
      bnb.name
    }</span><span class="coin-symbol">${bnb.symbol.toUpperCase()}</span></td>
<td class="coin-price center-text">${formatterPrice.format(
      bnb.currUsdPrice
    )}</td>
<td class="1hr-change center-text"><span class="text-negative">
${bnb.priceChangePercent1h.toFixed(2)}%</span></td>
<td class="24hr-change center-text"><span class="text-positive">${bnb.priceChangePercent24h.toFixed(
      2
    )}%</span></td>
<td class="7d-change center-text"><span class="text-positive">${bnb.priceChangePercent7d.toFixed(
      2
    )}%</span></td>
<td class="24hr-vol center-text">${formatter.format(bnb.totalVolume24hr)}</td>
<td class="mkt-cap center-text">${formatter.format(bnb.mktCap)}</td>
<td class="7d-sparkline center-text sparkline><canvas id="sparkline-chart" width="100" height="50"></canvas></td>
</tr>


<tr class="border-top">

<td class="first-col coin-number center-text ">${usdc.mktCapRank}</td>
<td class="second-col coin-name center-text"><img src="${
      usdc.logo
    }" class="coin-logos"><span class="font-bold">${
      usdc.name
    }</span><span class="coin-symbol">${usdc.symbol.toUpperCase()}</span></td>
<td class="coin-price center-text">${formatterPrice.format(
      usdc.currUsdPrice
    )}</td>
<td class="1hr-change center-text"><span class="text-negative">
${usdc.priceChangePercent1h.toFixed(2)}%</span></td>
<td class="24hr-change center-text"><span class="text-positive">${usdc.priceChangePercent24h.toFixed(
      2
    )}%</span></td>
<td class="7d-change center-text"><span class="text-positive">${usdc.priceChangePercent7d.toFixed(
      2
    )}%</span></td>
<td class="24hr-vol center-text">${formatter.format(usdc.totalVolume24hr)}</td>
<td class="mkt-cap center-text">${formatter.format(usdc.mktCap)}</td>
<td class="7d-sparkline center-text sparkline><canvas id="sparkline-chart" width="100" height="50"></canvas></td>
</tr>

<tr class="border-top">

<td class="first-col coin-number center-text ">${busd.mktCapRank}</td>
<td class="second-col coin-name center-text"><img src="${
      busd.logo
    }" class="coin-logos"><span class="font-bold">${
      busd.name
    }</span><span class="coin-symbol">${busd.symbol.toUpperCase()}</span></td>
<td class="coin-price center-text">${formatterPrice.format(
      busd.currUsdPrice
    )}</td>
<td class="1hr-change center-text"><span class="text-negative">
${busd.priceChangePercent1h.toFixed(2)}%</span></td>
<td class="24hr-change center-text"><span class="text-positive">${busd.priceChangePercent24h.toFixed(
      2
    )}%</span></td>
<td class="7d-change center-text"><span class="text-positive">${busd.priceChangePercent7d.toFixed(
      2
    )}%</span></td>
<td class="24hr-vol center-text">${formatter.format(busd.totalVolume24hr)}</td>
<td class="mkt-cap center-text">${formatter.format(busd.mktCap)}</td>
<td class="7d-sparkline center-text sparkline><canvas id="sparkline-chart" width="100" height="50"></canvas></td>
</tr>

<tr class="border-top">

<td class="first-col coin-number center-text ">${xrp.mktCapRank}</td>
<td class="second-col coin-name center-text"><img src="${
      xrp.logo
    }" class="coin-logos"><span class="font-bold">${
      xrp.name
    }</span><span class="coin-symbol">${xrp.symbol.toUpperCase()}</span></td>
<td class="coin-price center-text">${formatterPrice.format(
      xrp.currUsdPrice
    )}</td>
<td class="1hr-change center-text"><span class="text-negative">
${xrp.priceChangePercent1h.toFixed(2)}%</span></td>
<td class="24hr-change center-text"><span class="text-positive">${xrp.priceChangePercent24h.toFixed(
      2
    )}%</span></td>
<td class="7d-change center-text"><span class="text-positive">${xrp.priceChangePercent7d.toFixed(
      2
    )}%</span></td>
<td class="24hr-vol center-text">${formatter.format(xrp.totalVolume24hr)}</td>
<td class="mkt-cap center-text">${formatter.format(xrp.mktCap)}</td>
<td class="7d-sparkline center-text sparkline><canvas id="sparkline-chart" width="100" height="50"></canvas></td>
</tr>

<tr class="border-top">

<td class="first-col coin-number center-text ">${doge.mktCapRank}</td>
<td class="second-col coin-name center-text"><img src="${
      doge.logo
    }" class="coin-logos"><span class="font-bold">${
      doge.name
    }</span><span class="coin-symbol">${doge.symbol.toUpperCase()}</span></td>
<td class="coin-price center-text">${formatterPrice.format(
      doge.currUsdPrice
    )}</td>
<td class="1hr-change center-text"><span class="text-negative">
${doge.priceChangePercent1h.toFixed(2)}%</span></td>
<td class="24hr-change center-text"><span class="text-positive">${doge.priceChangePercent24h.toFixed(
      2
    )}%</span></td>
<td class="7d-change center-text"><span class="text-positive">${doge.priceChangePercent7d.toFixed(
      2
    )}%</span></td>
<td class="24hr-vol center-text">${formatter.format(doge.totalVolume24hr)}</td>
<td class="mkt-cap center-text">${formatter.format(doge.mktCap)}</td>
<td class="7d-sparkline center-text sparkline><canvas id="sparkline-chart" width="100" height="50"></canvas></td>
</tr>

<tr class="border-top">

<td class="first-col coin-number center-text ">${cardano.mktCapRank}</td>
<td class="second-col coin-name center-text"><img src="${
      cardano.logo
    }" class="coin-logos"><span class="font-bold">${
      cardano.name
    }</span><span class="coin-symbol">${cardano.symbol.toUpperCase()}</span></td>
<td class="coin-price center-text">${formatterPrice.format(
      cardano.currUsdPrice
    )}</td>
<td class="1hr-change center-text"><span class="text-negative">
${cardano.priceChangePercent1h.toFixed(2)}%</span></td>
<td class="24hr-change center-text"><span class="text-positive">${cardano.priceChangePercent24h.toFixed(
      2
    )}%</span></td>
<td class="7d-change center-text"><span class="text-positive">${cardano.priceChangePercent7d.toFixed(
      2
    )}%</span></td>
<td class="24hr-vol center-text">${formatter.format(
      cardano.totalVolume24hr
    )}</td>
<td class="mkt-cap center-text">${formatter.format(cardano.mktCap)}</td>
<td class="7d-sparkline center-text sparkline><canvas id="sparkline-chart" width="100" height="50"></canvas></td>
</tr>

<tr class="border-top">

<td class="first-col coin-number center-text ">${matic.mktCapRank}</td>
<td class="second-col coin-name center-text"><img src="${
      matic.logo
    }" class="coin-logos"><span class="font-bold">${
      matic.name
    }</span><span class="coin-symbol">${matic.symbol.toUpperCase()}</span></td>
<td class="coin-price center-text">${formatterPrice.format(
      matic.currUsdPrice
    )}</td>
<td class="1hr-change center-text"><span class="text-negative">
${matic.priceChangePercent1h.toFixed(2)}%</span></td>
<td class="24hr-change center-text"><span class="text-positive">${matic.priceChangePercent24h.toFixed(
      2
    )}%</span></td>
<td class="7d-change center-text"><span class="text-positive">${matic.priceChangePercent7d.toFixed(
      2
    )}%</span></td>
<td class="24hr-vol center-text">${formatter.format(matic.totalVolume24hr)}</td>
<td class="mkt-cap center-text">${formatter.format(matic.mktCap)}</td>
<td class="7d-sparkline center-text sparkline><canvas id="sparkline-chart" width="100" height="50"></canvas></td>
</tr>

    `;
    coinDataContainer.innerHTML = '';
    coinDataContainer.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    alert(err);
  }
};

showCoinData();
