const CART_REST_API_URL = "/carts";

class CartFetch {
  getCart() {
    return fetch(CART_REST_API_URL).then((res) => res.json);
  }
}
export default new CartFetch();
