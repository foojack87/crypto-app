import * as model from './model.js';
import topCoinsView from './views/topCoinsView.js';
import searchPreviewView from './views/searchPreviewView.js';
import searchView from './views/searchView.js';

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
  }
};

const init = function () {
  searchView.addHandlerSearch(controlCoinSearchPreview);
  topCoinsView.addHandlerRender(controlTopCoins);
};

init();
