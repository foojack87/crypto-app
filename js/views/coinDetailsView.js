import Views from './Views.js';
import { formatter } from '/js/helpers.js';
import { formatterPrice } from '/js/helpers.js';

class CoinDetailsView extends Views {
  _parentElement = document.querySelector('.query-results-container');

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.bookmark-btn');
      if (!btn) return;
      handler();
    });
  }

  _generateMarkup() {
    return `
    <div class="grid-2-rows">
          
    <div class="price-summary">
      <p class="mktCapRank">${
        this._data.mktCapRank === null
          ? 'Not Ranked'
          : `Rank #${this._data.mktCapRank}`
      }</p>
      
      <div class="coin-id">
        <figure class="preview-fig">
          <img class="detailed-coin-logo" src="${this._data.logo}" />
        </figure>
        <p ><span class="detailed-coin-name">${
          this._data.name
        }</span><span class="detailed-coin-symbol">(${
      this._data.symbol
    })</span></p>
        <button class="bookmark-btn" >
        <svg class="favorites-icon${
          this._data.bookmarked ? '-bookmarked' : ''
        }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg></button>
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
        this._data.totalSupply == null
          ? 'No Total Supply'
          : this._data.totalSupply
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
        <p>Created: <span>${
          this._data.dateCreated === null ? 'Unknown' : this._data.dateCreated
        }</span></p>
      </div>
      <div class="coin-desc">
        <p>${this._data.desc}</p>
      </div>
    </div>
  </div>;`;
  }
}

export default new CoinDetailsView();
