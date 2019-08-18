import CryptoJS from 'crypto-js';

class MarvelApI {
  static getComics(origOptions = {}) {
    const baseUrl = `${process.env.REACT_APP_API_ROUTER}`;
    const defaultOptions = { page: 1, count: 10, name: '', titleStartsWith: '' };
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
    if (options.titleStartsWith) {
      params = params.concat(`&titleStartsWith=${options.titleStartsWith}`);
    }
    if (options.orderBy) {
      params = params.concat(`&orderBy=${options.orderBy}`);
    }
    const url = `${baseUrl}${URI}${params}`;

    return fetch(url);
  }
}

export default MarvelApI;
