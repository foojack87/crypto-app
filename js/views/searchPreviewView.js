import Views from './Views.js';

class SearchPreviewView extends Views {
  _parentElement = document.querySelector('.query-results-container');
  _errorMessage = 'Cannot find related coin, please try again 😥';

  _generateMarkup() {
    console.log(this._data);

    return this._data.map(this._generateMarkupPreviewResults).join('');
  }

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="error">
    <div><svg class="error-message-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
  </svg>  
  </div>
  <p>${message}</p>
    </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
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
