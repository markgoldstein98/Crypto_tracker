const API_KEY = "090d863f-b62e-41f4-9347-ff4a11ed909c";
const root = document.querySelector("#root");
const CRYPTO_SYMBOL = "BTC";

async function getFetch(url, headers) {
  const response = await fetch(url, headers);
  {
    headers: {
      Authorization: API_KEY;
    }
  }
  const data = await response.json();

  return data;
}

console.log(
  getFetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${API_KEY}`
  )
);
