import CryptoJS from 'crypto-js';

class MarvelApI {
  static getComics(origOptions = {}) {
    const baseUrl = 'https://gateway.marvel.com:443';
    const defaultOptions = { page: 1, count: 10, name: '', nameStartsWith: '' };
    const options = Object.assign(defaultOptions, origOptions);

    const URI = '/v1/public/comics';
    const timeStamp = new Date().getTime();
    const hash = CryptoJS.MD5(
      timeStamp + process.env.REACT_APP_API_PRIVATE_KEY + process.env.REACT_APP_API_PUBLIC_KEY
    ).toString();

    const currentOffset = options.page - 1;
    let params = `?apikey=${process.env.REACT_APP_API_PUBLIC_KEY}&ts=${timeStamp}&hash=${hash}&limit=${options.count}&offset=${currentOffset}`;

    if (options.name) {
      params = params.concat(`&name=${options.name}`);
    }
    if (options.nameStartsWith) {
      params = params.concat(`&nameStartsWith=${options.nameStartsWith}`);
    }
    const url = `${baseUrl}${URI}${params}`;

    return fetch(url);
  }
}

export default MarvelApI;
