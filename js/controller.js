import * as model from './model.js';
import topCoinsView from './views/topCoinsView.js';
import searchPreviewView from './views/searchPreviewView.js';
import searchView from './views/searchView.js';
import coinDetailsView from './views/coinDetailsView.js';

const controlTopCoins = async function () {
  try {
    topCoinsView.renderSpinner();
    // load search results
    await model.loadTop10CoinData();

    // render results
    console.log(model.state.coins.topCoins);
    topCoinsView.render(model.state.coins.topCoins);
  } catch (err) {
    console.log(err);
  }
};
const controlCoinSearchPreview = async function () {
  try {
    const query = searchView.getQuery();

    if (!query) return;
    searchPreviewView.renderSpinner();
    await model.loadSearchResults(query);

    console.log(model.state.search.results);
    searchPreviewView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
    coinDetailsView.renderError();
  }
};

const controlCoinDetails = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    coinDetailsView.renderSpinner();
    await model.loadCoinDetails(id);

    console.log(model.state.coinData);
    coinDetailsView.render(model.state.coinData);
  } catch (err) {
    console.log(err);
  }
};

const controlBookmarking = function () {
  if (!model.state.coinData.bookmarked) model.addBookmark(model.state.coinData);
  else model.removeBookmark(model.state.coinData.id);

  console.log(model.state.coinData);
  coinDetailsView.update(model.state.coinData);
};

const init = function () {
  searchView.addHandlerSearch(controlCoinSearchPreview);
  topCoinsView.addHandlerRender(controlTopCoins);
  coinDetailsView.addHandlerRender(controlCoinDetails);
  coinDetailsView.addHandlerAddBookmark(controlBookmarking);
};

init();
