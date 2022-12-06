export const state = {
  coins: {
    topCoins: '',
    query: '',
    results: [],
  },
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

loadTop10CoinData();
