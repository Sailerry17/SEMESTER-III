import * as config from './1A.js';

function fetchData(endpoint) {
    const url = `${config.Base_Url}/${endpoint}`;
    console.log(`Mengambil data dari ${url}`);
    console.log(`Menggunakan Kunci API: ${config.Api_Key}`);
    console.log(`Batasan Per Halaman: ${config.Limit_Per_Page}`);
}

fetchData('products');
