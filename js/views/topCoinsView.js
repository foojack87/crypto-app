import Views from './Views.js';
import { formatter } from '/js/helpers.js';
import { formatterPrice } from '/js/helpers.js';

class TopCoinsView extends Views {
  _parentElement = document.querySelector('.coin-data');

  _generateMarkup() {
    console.log(this._data);

    return this._data.map(this._generateMarkupTopCoins).join('');
  }

  _generateMarkupTopCoins(coins) {
    return `
    <tr class="border-top top-coin-data">
  
    <td class="first-col coin-number center-text ">${coins.mktCapRank}</td>
    <td class="second-col coin-name center-text"><img src="${
      coins.logo
    }" class="coin-logos"><span class="font-bold">${
      coins.name
    }</span><span class="coin-symbol">${coins.symbol.toUpperCase()}</span></td>
    <td class="coin-price center-text">${formatterPrice.format(
      coins.currUsdPrice
    )}</td>
    <td class="1hr-change center-text"><span class="text-negative">
    ${coins.priceChangePercent1h.toFixed(2)}%</span></td>
    <td class="24hr-change center-text"><span class="text-positive">${coins.priceChangePercent24h.toFixed(
      2
    )}%</span></td>
    <td class="7d-change center-text"><span class="text-positive">${coins.priceChangePercent7d.toFixed(
      2
    )}%</span></td>
    <td class="24hr-vol center-text">${formatter.format(
      coins.totalVolume24hr
    )}</td>
    <td class="mkt-cap center-text">${formatter.format(coins.mktCap)}</td>
    <td class="7d-sparkline center-text sparkline><canvas id="sparkline-chart" width="100" height="50"></canvas></td>
  </tr>`;
  }
}

export default new TopCoinsView();
