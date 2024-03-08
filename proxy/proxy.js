/**
 * The `ITBookstoreAPI` class provides a service for searching IT books using the IT Bookstore API.
 */
class ITBookstoreAPI {
  /**
   * Search for IT books using the IT Bookstore API.
   * @param {string} searchText - The search text.
   * @returns {Promise} A promise that resolves with the response in JSON format or rejects with an error.
   */
  async searchITBooks(searchText) {
    try {
      const response = await fetch(
        `https://api.itbook.store/1.0/search/${searchText}`
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      return response.json();
    } catch (error) {
      console.error("Error occurred during API request:", error);
      throw error;
    }
  }
}

/**
 * The `ProxyITBookstoreAPI` class provides a proxy for the `ITBookstoreAPI` class with caching functionality.
 */
class ProxyITBookstoreAPI {
  #api = new ITBookstoreAPI();
  #cache = {};

  /**
   * Search for IT books using the IT Bookstore API with caching functionality.
   * @param {string} searchText - The search text.
   * @returns {Promise} A promise that resolves with the response in JSON format or rejects with an error.
   */
  async searchITBooks(searchText) {
    if (this.#cache[searchText]) {
      return this.#cache[searchText];
    }

    const data = await this.#api.searchITBooks(searchText);

    this.#cache[searchText] = data;

    return data;
  }
}

// Requests for service
const ITBooks = new ProxyITBookstoreAPI();

ITBooks.searchITBooks("JS")
  .then((response) => {
    console.log(1, response);

    return ITBooks.searchITBooks("JS");
  })
  .then((response) => {
    console.log(2, response);

    return ITBooks.searchITBooks("JS");
  })
  .then((response) => {
    console.log(3, response);
  });
