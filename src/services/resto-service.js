export default class RestoService {
  async getResource(url) {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`);
    }
    return await res.json();
  }

  async getBestsellers() {
    return await this.getResource('/bestsellers')
  }

  async getCoffee() {
    return await this.getResource('/coffee')
  }

  async getGoods() {
    return await this.getResource('/goods')
  }

}
