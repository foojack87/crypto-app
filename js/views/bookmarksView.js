import Views from './Views.js';
import { formatter } from '/js/helpers.js';
import { formatterPrice } from '/js/helpers.js';

class BookmarksView extends Views {
  _parentElement = document.querySelector('.bookmarks-modal-view');
  _errorMessage = 'Add a coin to track here! 😀';
  _window = document.querySelector('.add-bookmark-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav-btn-favorites');
  _btnClose = document.querySelector('.btn--close-modal');
  _link = document.querySelector('.bookmarks-preview');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
    this._parentElement.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreviewResults).join('');
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  renderError(message = this._errorMessage) {
    const markup = `
    <div class="bookmark-message">
                    <p>${message}</p>
                  </div>`;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _generateMarkupPreviewResults(coinData) {
    return `

    <li class="bookmarks-preview">

    <a class="preview-link-bookmarks" href="#${coinData.id}">
    <div class="bookmark-coin-basics">
                      <figure class="preview-figure"><img src="${
                        coinData.logo
                      }" alt="coin logo" /></figure>
                      
                        <h4 class="bookmark-coin-name">${coinData.name}
                        <span class="preview-coin-symbol">(${
                          coinData.symbol
                        })</span></h4> </div>

                        <div class="bookmark-coin-details">
                        <p class="bookmark-coin-currprice">${formatterPrice.format(
                          coinData.currPrice
                        )}</p>
                        <p class="bookmark-price-change-percentage ${
                          coinData.priceChangePercent24h > 0
                            ? 'text-positive'
                            : 'text-negative'
                        }">${coinData.priceChangePercent24h.toFixed(
      2
    )}%</p></div>
                    </a>
                  </li>`;
  }
}

export default new BookmarksView();
