import Views from './Views.js';

class SearchPreviewView extends Views {
  _parentElement = document.querySelector('.query-results-container');

  _generateMarkup() {
    console.log(this._data);

    return this._data.map(this._generateMarkupPreviewResults).join('');
  }

  _generateMarkupPreviewResults(results) {
    return `
    <li class="preview">
    <a class="preview-link" href="#${results.id}">
      <figure class="preview-fig">
        <img src="${results.logo}" alt="coin logo" />
      </figure>
      <div class="preview-data">
        <h4 class="preview-coin-name">${
          results.name
        }<span class="preview-coin-symbol">(${results.symbol})</span></h4>
        <p class="preview-coin-mktCapRank"><span class="mktCapRank-title">Market Cap Rank</span><span class="rank-number">${
          results.mktCapRank === null ? 'Not Ranked' : `#${results.mktCapRank}`
        }</span></p>
        <!-- <p class="preview-coin-mktCap"><span class="mktCapRank-title">Mkt Cap</span> <span class="mktCap-amount">$327,237,941,276</span></p> -->
      </div>
    </a>
  </li>`;
  }
}

export default new SearchPreviewView();
