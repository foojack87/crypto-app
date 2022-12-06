import * as model from './model.js';
import topCoinsView from './views/topCoinsView.js';

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

controlTopCoins();
