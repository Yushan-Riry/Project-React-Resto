import React, {useState} from 'react';
import useGet from '../Hook/useGet';
import {useForm} from "react-hook-form";

const Detail = () => {

    let today = new Date().toISOString().slice(0,10);

    const {register, handleSubmit} = useForm();

    const [awal, setawal]   = useState('2021-03-01');
    const [akhir, setakhir] = useState(today);

    function cari(data) {
        setawal(data.tawal);
        setakhir(data.takhir);
    }

    const [isi] = useGet(`/detail/${awal}/${akhir}`);

    let no = 1;

    return (
        <div>
        <div className="row">
            <div>
                <h2>Detail Penjualan</h2>
            </div>
        </div>
        <div className="row">
            <form onSubmit={handleSubmit(cari)}>
                <div className="mb-3">
                        <label htmlFor="tawal" className="form-label">
                            Tanggal Awal
                        </label>
                        <input  type        = "date"
                                className   = "form-control"
                                name        = "tawal"
                                ref         = {register}
                        />
                </div>
                <div className="mb-3">
                        <label htmlFor="takhir" className="form-label">
                            Tanggal Akhir
                        </label>
                        <input  type        = "date"
                                className   = "form-control"
                                name        = "takhir"
                                ref         = {register}
                        />
                </div>
                <div className="mb-3">
                    <input  type        = "submit"
                            className   = "btn btn-primary"
                            name        = "submit"
                    />
                </div>
            </form>
        </div>
        <div className="row">
            <div>
                <table className="table mt-4">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Faktur</th>
                                <th>Tanggal Order</th>
                                <th>Menu</th>
                                <th>Harga</th>
                                <th>Jumlah</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isi.map((val, index)=> (
                                    <tr key={index}>
                                        <td>{no++}</td>
                                        <td>{val.idorder}</td>
                                        <td>{val.tglorder}</td>
                                        <td>{val.menu}</td>
                                        <td>{val.hargajual}</td>
                                        <td>{val.jumlah}</td>
                                        <td>{val.jumlah * val.hargajual}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Detail;
