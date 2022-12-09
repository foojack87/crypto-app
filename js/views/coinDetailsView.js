import Views from './Views.js';
import { formatter } from '/js/helpers.js';
import { formatterPrice } from '/js/helpers.js';

class CoinDetailsView extends Views {
  _parentElement = document.querySelector('.query-results-container');

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  _generateMarkup() {
    console.log(this._data);

    return `
    <div class="grid-2-rows">
          
s
    <div class="price-summary">
      <p class="mktCapRank">Rank #${this._data.mktCapRank}</p>
      
      <div class="coin-id">
        <figure class="preview-fig">
          <img class="detailed-coin-logo" src="${this._data.logo}" />
        </figure>
        <p ><span class="detailed-coin-name">${
          this._data.name
        }</span><span class="detailed-coin-symbol">(${
      this._data.symbol
    })</span></p>
        <button class="bookmark-btn">
        <ion-icon class="favorites-icon" name="star-outline"></ion-icon></button>
      </div>
      
      <div class="coin-price-details">
        <p>${formatterPrice.format(this._data.currPrice)}</p>
        <p class="price-change-percentage ${
          this._data.priceChangePercent24h > 0
            ? 'text-positive'
            : 'text-negative'
        }">${this._data.priceChangePercent24h.toFixed(2)}%</p>
      </div>
    </div>
      <div class="coin-information grid-2-cols">
        <div class="market-details">
          <div class="market-stats"><span>Market Cap</span><span class="stats-value">${formatter.format(
            this._data.mktCap
          )}</span></div>
        <div class="market-stats"><span>24h Trading Volume</span><span class="stats-value">${formatter.format(
          this._data.totalVolume
        )}</span></div>
        <div class="market-stats"><span>Fully Diluted Valuation</span><span class="stats-value">${formatter.format(
          this._data.fullyDilutedVal
        )}</span></div>
      </div>
      <div class="market-details market-details-2nd">
        <div class="market-stats"><span>Circulating Supply</span><span class="stats-value">${Math.trunc(
          this._data.circulatingSupply
        )}</span></div>
      <div class="market-stats"> <span>Total Supply</span><span class="stats-value">${
        this._data.totalSupply
      }</div>
      <div class="market-stats"><span>Max Supply</span><span class="stats-value">${
        this._data.maxSupply == null ? 'No Max Supply' : this._data.maxSupply
      }</span></div>
    </div>
        

      </div>

    
    <div class="coin-info">
      <div class="coin-info-heading">
        <h1 class="coin-info-title">Background Info</h1>
        <p class="coin-website">Website:<a class="homepage-link" href="${
          this._data.homepage
        }" >${this._data.homepage}</a></p>
      </div>
      <div class="coin-creation-date">
        <p>Created: <span>${this._data.dateCreated}</span></p>
      </div>
      <div class="coin-desc">
        <p>${this._data.desc}</p>
      </div>
    </div>
  </div>;`;
  }
}

export default new CoinDetailsView();
