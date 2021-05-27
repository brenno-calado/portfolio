export default async function getProductList(productName) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${productName}`)
    .then((response) => response.json())
    .then((data) => data.results)
    .catch((reason) => console.log(reason));
}
