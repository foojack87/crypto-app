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
    const res =
      await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d
  `);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data.error} ${res.status}`);

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
  } catch (err) {
    alert(err);
  }
};

export const loadSearchResults = async function (query) {
  try {
    const res =
      await fetch(`https://api.coingecko.com/api/v3/search?query=${query}
    `);

    const data = await res.json();
    console.log(data.coins);

    if (!res.ok) throw new Error(`${data.error} ${res.status}`);
    state.search.results = data.coins.map(results => {
      return {
        id: results.id,
        name: results.name,
        mktCapRank: results.market_cap_rank,
        logo: results.large,
        symbol: results.symbol,
      };
    });
    console.log(state.search.results);
  } catch (err) {
    alert(err);
  }
};

export const loadCoinDetails = async function (id) {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
    `);

    const data = await res.json();
    if (!res.ok) throw new Error(`${data.error} ${res.status}`);
    const coinData = data;
    console.log(data);

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

export const addBookmark = function (coinData) {
  state.bookmarked.push(coinData);

  if (coinData.id === state.coinData.id) state.coinData.bookmarked = true;
};

export const removeBookmark = function (id) {
  const index = state.bookmarked.findIndex(el => el.id === id);
  state.bookmarked.splice(index, 1);

  if (id === state.coinData.id) state.coinData.bookmarked = false;
};
