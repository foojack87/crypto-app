import { API_URL } from './config';
import { AJAX } from './helpers';

export const state = {
  coins: {},
  search: {
    query: '',
    results: [],
  },
  coinData: {},
  bookmarked: [],
};

export const loadTop10CoinData = async function () {
  try {
    const data =
      await AJAX(`${API_URL}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d
    `);

    state.coins.topCoins = data.map(coins => {
      return {
        id: coins.id,
        symbol: coins.symbol,
        name: coins.name,
        logo: coins.image,
        currUsdPrice: coins.current_price,
        mktCap: coins.market_cap,
        priceChangePercent1h: coins.price_change_percentage_1h_in_currency,
        priceChangePercent24h: coins.price_change_percentage_24h_in_currency,
        priceChangePercent7d: coins.price_change_percentage_7d_in_currency,
        totalVolume24hr: coins.total_volume,
        mktCapRank: coins.market_cap_rank,
      };
    });

    console.log(state.coins);
  } catch (err) {
    alert(err);
  }
};

export const loadSearchResults = async function (query) {
  try {
    const data = await AJAX(`${API_URL}search?query=${query}
    `);

    state.search.results = data.coins.map(results => {
      return {
        id: results.id,
        name: results.name,
        mktCapRank: results.market_cap_rank,
        logo: results.large,
        symbol: results.symbol,
      };
    });
  } catch (err) {
    alert(err);
  }
};

export const loadCoinDetails = async function (id) {
  try {
    const data = await AJAX(`${API_URL}coins/${id}
    `);

    const coinData = data;

    state.coinData = {
      id: coinData.id,
      name: coinData.name,
      symbol: coinData.symbol,
      mktCapRank: coinData.market_cap_rank,
      desc: coinData.description.en,
      logo: coinData.image.large,
      homepage: coinData.links.homepage[0],
      ath: coinData.market_data.ath.usd,
      atl: coinData.market_data.atl.usd,
      circulatingSupply: coinData.market_data.circulating_supply,
      currPrice: coinData.market_data.current_price.usd,
      fullyDilutedVal: coinData.market_data.fully_diluted_valuation.usd,
      dateCreated: coinData.genesis_date,
      mktCap: coinData.market_data.market_cap.usd,
      maxSupply: coinData.market_data.max_supply,
      totalSupply: coinData.market_data.total_supply,
      priceChangePercent24h:
        coinData.market_data.price_change_percentage_24h_in_currency.usd,
      totalVolume: coinData.market_data.total_volume.usd,
    };

    if (state.bookmarked.some(bookmark => bookmark.id === id))
      state.coinData.bookmarked = true;
    else state.coinData.bookmarked = false;
  } catch (err) {
    alert(err);
    throw err;
  }
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarked));
};

export const addBookmark = function (coinData) {
  state.bookmarked.push(coinData);

  if (coinData.id === state.coinData.id) state.coinData.bookmarked = true;

  persistBookmarks();
};

export const removeBookmark = function (id) {
  const index = state.bookmarked.findIndex(el => el.id === id);
  state.bookmarked.splice(index, 1);

  if (id === state.coinData.id) state.coinData.bookmarked = false;
  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarked = JSON.parse(storage);
};

init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
