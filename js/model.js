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
  const res =
    await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d
  `);

  const data = await await res.json();

  console.log(data);

  try {
    if (!res.ok) throw new Error(`${data.error} ${res.status}`);

    const { btc } = data;

    state.btc = {
      id: data[0].id,
      symbol: data[0].symbol,
      name: data[0].name,
      logo: data[0].image,
      currUsdPrice: data[0].current_price,
      mktCap: data[0].market_cap,
      priceChangePercent1h: data[0].price_change_percentage_1h_in_currency,
      priceChangePercent24h: data[0].price_change_percentage_24h_in_currency,
      priceChangePercent7d: data[0].price_change_percentage_7d_in_currency,
      totalVolume24hr: data[0].total_volume,
      mktCapRank: data[0].market_cap_rank,
    };

    const { eth } = data;

    state.eth = {
      id: data[1].id,
      symbol: data[1].symbol,
      name: data[1].name,
      logo: data[1].image,
      currUsdPrice: data[1].current_price,
      mktCap: data[1].market_cap,
      priceChangePercent1h: data[1].price_change_percentage_1h_in_currency,
      priceChangePercent24h: data[1].price_change_percentage_24h_in_currency,
      priceChangePercent7d: data[1].price_change_percentage_7d_in_currency,
      totalVolume24hr: data[1].total_volume,
      mktCapRank: data[1].market_cap_rank,
    };

    const { tether } = data;

    state.tether = {
      id: data[2].id,
      symbol: data[2].symbol,
      name: data[2].name,
      logo: data[2].image,
      currUsdPrice: data[2].current_price,
      mktCap: data[2].market_cap,
      priceChangePercent1h: data[2].price_change_percentage_1h_in_currency,
      priceChangePercent24h: data[2].price_change_percentage_24h_in_currency,
      priceChangePercent7d: data[2].price_change_percentage_7d_in_currency,
      totalVolume24hr: data[2].total_volume,
      mktCapRank: data[2].market_cap_rank,
    };

    const { bnb } = data;

    state.bnb = {
      id: data[3].id,
      symbol: data[3].symbol,
      name: data[3].name,
      logo: data[3].image,
      currUsdPrice: data[3].current_price,
      mktCap: data[3].market_cap,
      priceChangePercent1h: data[3].price_change_percentage_1h_in_currency,
      priceChangePercent24h: data[3].price_change_percentage_24h_in_currency,
      priceChangePercent7d: data[3].price_change_percentage_7d_in_currency,
      totalVolume24hr: data[3].total_volume,
      mktCapRank: data[3].market_cap_rank,
    };

    const { usdc } = data;

    state.usdc = {
      id: data[4].id,
      symbol: data[4].symbol,
      name: data[4].name,
      logo: data[4].image,
      currUsdPrice: data[4].current_price,
      mktCap: data[4].market_cap,
      priceChangePercent1h: data[4].price_change_percentage_1h_in_currency,
      priceChangePercent24h: data[4].price_change_percentage_24h_in_currency,
      priceChangePercent7d: data[4].price_change_percentage_7d_in_currency,
      totalVolume24hr: data[4].total_volume,
      mktCapRank: data[4].market_cap_rank,
    };

    const { busd } = data;

    state.busd = {
      id: data[5].id,
      symbol: data[5].symbol,
      name: data[5].name,
      logo: data[5].image,
      currUsdPrice: data[5].current_price,
      mktCap: data[5].market_cap,
      priceChangePercent1h: data[5].price_change_percentage_1h_in_currency,
      priceChangePercent24h: data[5].price_change_percentage_24h_in_currency,
      priceChangePercent7d: data[5].price_change_percentage_7d_in_currency,
      totalVolume24hr: data[5].total_volume,
      mktCapRank: data[5].market_cap_rank,
    };

    const { xrp } = data;

    state.xrp = {
      id: data[6].id,
      symbol: data[6].symbol,
      name: data[6].name,
      logo: data[6].image,
      currUsdPrice: data[6].current_price,
      mktCap: data[6].market_cap,
      priceChangePercent1h: data[6].price_change_percentage_1h_in_currency,
      priceChangePercent24h: data[6].price_change_percentage_24h_in_currency,
      priceChangePercent7d: data[6].price_change_percentage_7d_in_currency,
      totalVolume24hr: data[6].total_volume,
      mktCapRank: data[6].market_cap_rank,
    };

    const { doge } = data;

    state.doge = {
      id: data[7].id,
      symbol: data[7].symbol,
      name: data[7].name,
      logo: data[7].image,
      currUsdPrice: data[7].current_price,
      mktCap: data[7].market_cap,
      priceChangePercent1h: data[7].price_change_percentage_1h_in_currency,
      priceChangePercent24h: data[7].price_change_percentage_24h_in_currency,
      priceChangePercent7d: data[7].price_change_percentage_7d_in_currency,
      totalVolume24hr: data[7].total_volume,
      mktCapRank: data[7].market_cap_rank,
    };

    const { cardano } = data;

    state.cardano = {
      id: data[8].id,
      symbol: data[8].symbol,
      name: data[8].name,
      logo: data[8].image,
      currUsdPrice: data[8].current_price,
      mktCap: data[8].market_cap,
      priceChangePercent1h: data[8].price_change_percentage_1h_in_currency,
      priceChangePercent24h: data[8].price_change_percentage_24h_in_currency,
      priceChangePercent7d: data[8].price_change_percentage_7d_in_currency,
      totalVolume24hr: data[8].total_volume,
      mktCapRank: data[8].market_cap_rank,
    };

    const { matic } = data;

    state.matic = {
      id: data[9].id,
      symbol: data[9].symbol,
      name: data[9].name,
      logo: data[9].image,
      currUsdPrice: data[9].current_price,
      mktCap: data[9].market_cap,
      priceChangePercent1h: data[9].price_change_percentage_1h_in_currency,
      priceChangePercent24h: data[9].price_change_percentage_24h_in_currency,
      priceChangePercent7d: data[9].price_change_percentage_7d_in_currency,
      totalVolume24hr: data[9].total_volume,
      mktCapRank: data[9].market_cap_rank,
    };
  } catch (err) {
    alert(err);
  }
};

loadTop10CoinData();
