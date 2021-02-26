import {link} from './link.js';

export function ubah() {
    let id = 12;
    let data = {
        pelanggan : 'update axios export',
        alamat    : 'update axios export',
        telp      : '098765',
    };

    link.put('/pelanggan/' +id, data).then(res=>{
        console.log(res);
        let tampil = `<h1>${res.data.pesan}</h1>`;
        document.querySelector('#out').innerHTML = tampil;
    });
}