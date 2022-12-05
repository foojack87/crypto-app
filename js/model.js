export const state = {
  coins: {},
  btc: {},
  eth: {},
  tether: {},
  bnb: {},
  usdc: {},
  busd: {},
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
    fetch(
      `https://api.coingecko.com/api/v3/coins/binancecoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    ).then(res => res.json()),
    fetch(
      `https://api.coingecko.com/api/v3/coins/usd-coin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    ).then(res => res.json()),
    fetch(
      `https://api.coingecko.com/api/v3/coins/binance-usd?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    ).then(res => res.json()),
    fetch(
      `https://api.coingecko.com/api/v3/coins/ripple?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    ).then(res => res.json()),
    fetch(
      `https://api.coingecko.com/api/v3/coins/dogecoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    ).then(res => res.json()),
    fetch(
      `https://api.coingecko.com/api/v3/coins/cardano?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    ).then(res => res.json()),
    fetch(
      `https://api.coingecko.com/api/v3/coins/matic-network?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`
    ).then(res => res.json()),
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

    const { tether } = data;

    state.tether = {
      id: data[2].id,
      symbol: data[2].symbol,
      name: data[2].name,
      logo: data[2].image.thumb,
      currUsdPrice: data[2].market_data.current_price.usd,
      mktCap: data[2].market_data.market_cap.usd,
      priceChangePercent1h:
        data[2].market_data.price_change_percentage_1h_in_currency.usd,
      priceChangePercent24h:
        data[2].market_data.price_change_percentage_24h_in_currency.usd,
      priceChangePercent7d:
        data[2].market_data.price_change_percentage_7d_in_currency.usd,
      totalVolume24hr: data[2].market_data.total_volume.usd,
      sparkline: data[2].market_data.sparkline_7d,
      mktCapRank: data[2].market_cap_rank,
    };

    const { bnb } = data;

    state.bnb = {
      id: data[3].id,
      symbol: data[3].symbol,
      name: data[3].name,
      logo: data[3].image.thumb,
      currUsdPrice: data[3].market_data.current_price.usd,
      mktCap: data[3].market_data.market_cap.usd,
      priceChangePercent1h:
        data[3].market_data.price_change_percentage_1h_in_currency.usd,
      priceChangePercent24h:
        data[3].market_data.price_change_percentage_24h_in_currency.usd,
      priceChangePercent7d:
        data[3].market_data.price_change_percentage_7d_in_currency.usd,
      totalVolume24hr: data[3].market_data.total_volume.usd,
      sparkline: data[3].market_data.sparkline_7d,
      mktCapRank: data[3].market_cap_rank,
    };

    const { usdc } = data;

    state.usdc = {
      id: data[4].id,
      symbol: data[4].symbol,
      name: data[4].name,
      logo: data[4].image.thumb,
      currUsdPrice: data[4].market_data.current_price.usd,
      mktCap: data[4].market_data.market_cap.usd,
      priceChangePercent1h:
        data[4].market_data.price_change_percentage_1h_in_currency.usd,
      priceChangePercent24h:
        data[4].market_data.price_change_percentage_24h_in_currency.usd,
      priceChangePercent7d:
        data[4].market_data.price_change_percentage_7d_in_currency.usd,
      totalVolume24hr: data[4].market_data.total_volume.usd,
      sparkline: data[4].market_data.sparkline_7d,
      mktCapRank: data[4].market_cap_rank,
    };

    const { busd } = data;

    state.busd = {
      id: data[5].id,
      symbol: data[5].symbol,
      name: data[5].name,
      logo: data[5].image.thumb,
      currUsdPrice: data[5].market_data.current_price.usd,
      mktCap: data[5].market_data.market_cap.usd,
      priceChangePercent1h:
        data[5].market_data.price_change_percentage_1h_in_currency.usd,
      priceChangePercent24h:
        data[5].market_data.price_change_percentage_24h_in_currency.usd,
      priceChangePercent7d:
        data[5].market_data.price_change_percentage_7d_in_currency.usd,
      totalVolume24hr: data[5].market_data.total_volume.usd,
      sparkline: data[5].market_data.sparkline_7d,
      mktCapRank: data[5].market_cap_rank,
    };

    const { xrp } = data;

    state.xrp = {
      id: data[6].id,
      symbol: data[6].symbol,
      name: data[6].name,
      logo: data[6].image.thumb,
      currUsdPrice: data[6].market_data.current_price.usd,
      mktCap: data[6].market_data.market_cap.usd,
      priceChangePercent1h:
        data[6].market_data.price_change_percentage_1h_in_currency.usd,
      priceChangePercent24h:
        data[6].market_data.price_change_percentage_24h_in_currency.usd,
      priceChangePercent7d:
        data[6].market_data.price_change_percentage_7d_in_currency.usd,
      totalVolume24hr: data[6].market_data.total_volume.usd,
      sparkline: data[6].market_data.sparkline_7d,
      mktCapRank: data[6].market_cap_rank,
    };

    const { doge } = data;

    state.doge = {
      id: data[7].id,
      symbol: data[7].symbol,
      name: data[7].name,
      logo: data[7].image.thumb,
      currUsdPrice: data[7].market_data.current_price.usd,
      mktCap: data[7].market_data.market_cap.usd,
      priceChangePercent1h:
        data[7].market_data.price_change_percentage_1h_in_currency.usd,
      priceChangePercent24h:
        data[7].market_data.price_change_percentage_24h_in_currency.usd,
      priceChangePercent7d:
        data[7].market_data.price_change_percentage_7d_in_currency.usd,
      totalVolume24hr: data[7].market_data.total_volume.usd,
      sparkline: data[7].market_data.sparkline_7d,
      mktCapRank: data[7].market_cap_rank,
    };

    const { cardano } = data;

    state.cardano = {
      id: data[8].id,
      symbol: data[8].symbol,
      name: data[8].name,
      logo: data[8].image.thumb,
      currUsdPrice: data[8].market_data.current_price.usd,
      mktCap: data[8].market_data.market_cap.usd,
      priceChangePercent1h:
        data[8].market_data.price_change_percentage_1h_in_currency.usd,
      priceChangePercent24h:
        data[8].market_data.price_change_percentage_24h_in_currency.usd,
      priceChangePercent7d:
        data[8].market_data.price_change_percentage_7d_in_currency.usd,
      totalVolume24hr: data[8].market_data.total_volume.usd,
      sparkline: data[8].market_data.sparkline_7d,
      mktCapRank: data[8].market_cap_rank,
    };

    const { matic } = data;

    state.matic = {
      id: data[9].id,
      symbol: data[9].symbol,
      name: data[9].name,
      logo: data[9].image.thumb,
      currUsdPrice: data[9].market_data.current_price.usd,
      mktCap: data[9].market_data.market_cap.usd,
      priceChangePercent1h:
        data[9].market_data.price_change_percentage_1h_in_currency.usd,
      priceChangePercent24h:
        data[9].market_data.price_change_percentage_24h_in_currency.usd,
      priceChangePercent7d:
        data[9].market_data.price_change_percentage_7d_in_currency.usd,
      totalVolume24hr: data[9].market_data.total_volume.usd,
      sparkline: data[9].market_data.sparkline_7d,
      mktCapRank: data[9].market_cap_rank,
    };
  } catch (err) {
    alert(err);
  }
};

loadTop10CoinData();
