import * as model from './model.js';

('use strict');

const coinDataContainer = document.querySelector('.coin-data');

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

    `;
    // coinDataContainer.innerHTML = '';
    coinDataContainer.insertAdjacentHTML('beforeend', markup);
  } catch (err) {
    alert(err);
  }
};

showCoinData();

// showCoinData('ethereum');
// showCoinData('tether');
// showCoinData('binancecoin');
// showCoinData('usd-coin');
