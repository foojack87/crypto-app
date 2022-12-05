export const state = {
  coins: {},
  btc: {},
  eth: {},
  tether: {},
  bnb: {},
  xrp: {},
  doge: {},
  cardano: {},
  matic: {},
};

export const loadCoinData = async function (id) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
  );
  const data = await res.json();

  try {
    if (!res.ok) throw new Error(`${data.error} ${res.status}`);

    const { coins } = data;

    state.coins = {
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      logo: data.image.thumb,
      currUsdPrice: data.market_data.current_price.usd,
      mktCap: data.market_data.market_cap.usd,
      priceChangePercent1h:
        data.market_data.price_change_percentage_1h_in_currency.usd,
      priceChangePercent24h:
        data.market_data.price_change_percentage_24h_in_currency.usd,
      priceChangePercent7d:
        data.market_data.price_change_percentage_7d_in_currency.usd,
      totalVolume24hr: data.market_data.total_volume.usd,
      sparkline: data.market_data.sparkline_7d,
      mktCapRank: data.market_cap_rank,
    };

    console.log(state.coins);
  } catch (err) {
    alert(err);
  }
};

export const loadTop10CoinData = async function () {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins`);

  const data = await Promise.all([
    fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    ).then(res => res.json()),
    fetch(
      `https://api.coingecko.com/api/v3/coins/ethereum?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    ).then(res => res.json()),
    fetch(
      `https://api.coingecko.com/api/v3/coins/tether?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    ).then(res => res.json()),
    // fetch(
    //   `https://api.coingecko.com/api/v3/coins/binancecoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    // ).then(res => res.json()),
    // fetch(
    //   `https://api.coingecko.com/api/v3/coins/usd-coin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    // ).then(res => res.json()),
    // fetch(
    //   `https://api.coingecko.com/api/v3/coins/binance-usd?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    // ).then(res => res.json()),
    // fetch(
    //   `https://api.coingecko.com/api/v3/coins/ripple?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    // ).then(res => res.json()),
    // fetch(
    //   `https://api.coingecko.com/api/v3/coins/dogecoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    // ).then(res => res.json()),
    // fetch(
    //   `https://api.coingecko.com/api/v3/coins/cardano?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    // ).then(res => res.json()),
    // fetch(
    //   `https://api.coingecko.com/api/v3/coins/matic-network?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    // ).then(res => res.json()),
  ]);

  console.log(data);

  try {
    if (!res.ok) throw new Error(`${data.error} ${res.status}`);

    const { btc } = data;

    state.btc = {
      id: data[0].id,
      symbol: data[0].symbol,
      name: data[0].name,
      logo: data[0].image.thumb,
      currUsdPrice: data[0].market_data.current_price.usd,
      mktCap: data[0].market_data.market_cap.usd,
      priceChangePercent1h:
        data[0].market_data.price_change_percentage_1h_in_currency.usd,
      priceChangePercent24h:
        data[0].market_data.price_change_percentage_24h_in_currency.usd,
      priceChangePercent7d:
        data[0].market_data.price_change_percentage_7d_in_currency.usd,
      totalVolume24hr: data[0].market_data.total_volume.usd,
      sparkline: data[0].market_data.sparkline_7d,
      mktCapRank: data[0].market_cap_rank,
    };

    const { eth } = data;

    state.eth = {
      id: data[1].id,
      symbol: data[1].symbol,
      name: data[1].name,
      logo: data[1].image.thumb,
      currUsdPrice: data[1].market_data.current_price.usd,
      mktCap: data[1].market_data.market_cap.usd,
      priceChangePercent1h:
        data[1].market_data.price_change_percentage_1h_in_currency.usd,
      priceChangePercent24h:
        data[1].market_data.price_change_percentage_24h_in_currency.usd,
      priceChangePercent7d:
        data[1].market_data.price_change_percentage_7d_in_currency.usd,
      totalVolume24hr: data[1].market_data.total_volume.usd,
      sparkline: data[1].market_data.sparkline_7d,
      mktCapRank: data[1].market_cap_rank,
    };

    console.log(state.eth);
  } catch (err) {
    alert(err);
  }
};

loadTop10CoinData();
