// https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true

'use strict';

const showCoinData = async function () {
  try {
    const res = await fetch(
      'https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true'
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.error} ${res.status}`);

    console.log(res, data);
    // console.log(data.);
  } catch (err) {
    alert(err);
  }
};

showCoinData();
