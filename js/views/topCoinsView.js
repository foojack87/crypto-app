import Views from './Views.js';
import { formatter } from '/js/helpers.js';
import { formatterPrice } from '/js/helpers.js';

class TopCoinsView extends Views {
  _parentElement = document.querySelector('.coin-data');

  _generateMarkup() {
    return this._data.map(this._generateMarkupTopCoins).join('');
  }

  _generateMarkupTopCoins(coins) {
    return `

    
    <tr class="border-top top-coin-data">
  
    <td class="first-col coin-number center-text ">${coins.mktCapRank}</td>

    <td class="second-col coin-name center-text"><a class="top-coins-link" href="#${
      coins.id
    }"><img src="${coins.logo}" class="coin-logos"><span class="font-bold">${
      coins.name
    }</span><span class="coin-symbol">${coins.symbol.toUpperCase()}</span></a></td>

    <td class="coin-price center-text">${formatterPrice.format(
      coins.currUsdPrice
    )}</td>
    <td class="price-1hr-change center-text"><span class="${
      coins.priceChangePercent1h > 0 ? 'text-positive' : 'text-negative'
    }">
    ${
      coins.priceChangePercent1h === null
        ? 0
        : coins.priceChangePercent1h.toFixed(2)
    }%</span></td>
    <td class="price-24hr-change center-text"><span class="${
      coins.priceChangePercent24h > 0 ? 'text-positive' : 'text-negative'
    }">${
      coins.priceChangePercent24h === null
        ? 0
        : coins.priceChangePercent24h.toFixed(2)
    }%</span></td>
    <td class="price-7d-change center-text"><span class="${
      coins.priceChangePercent7d > 0 ? 'text-positive' : 'text-negative'
    }">${
      coins.priceChangePercent7d === null
        ? 0
        : coins.priceChangePercent7d.toFixed(2)
    }%</span></td>
    <td class="price-24hr-vol center-text">${formatter.format(
      coins.totalVolume24hr
    )}</td>
    <td class="mkt-cap center-text">${formatter.format(coins.mktCap)}</td>
  </tr>
  `;
  }
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new TopCoinsView();
