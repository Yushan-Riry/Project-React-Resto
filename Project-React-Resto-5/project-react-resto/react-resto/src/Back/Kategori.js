import React, {useState} from "react";
import {link} from "../Axios/link";
import {useForm} from "react-hook-form";
import useGet from "../Hook/useGet";
import Modal from 'react-modal';


const Kategori = () => {
    const [pesan, setPesan] = useState([]);
    const [idkategori, setIdkategori] = useState('');
    const [pilihan, setPilihan] = useState(true);
    const [mopen, setMopen] = useState(false);

    const {register, handleSubmit, reset, errors, setValue} = useForm();

    const [isi] = useGet('/kategori');

        function tambah() {
            setMopen(true);
        }

        function simpan(data) {
            if (pilihan) {
                link.post("/kategori", data).then(res=>setPesan(res.data.pesan));
            } else {
                link
                    .put('/kategori/' + idkategori, data)
                    .then(res => setPesan(res.data.pesan));
                setPilihan(true);
            }

            reset();
            setMopen(false);
            
        }

        async function hapus(id) {
            if (window.confirm('yakin akan menghapus ?')) {
                const res = await link.delete('/kategori/' +id);
                setPesan(res.data.pesan);
            }
        }

        async function showData(id) {
            const res = await link.get('/kategori/' + id);
            setValue('kategori', res.data[0].kategori);
            setValue('keterangan', res.data[0].keterangan);
            setIdkategori(res.data[0].idkategori);
            setPilihan(false);
        };


    let  no = 1;

    return (
        <div>
            <Modal 
                isOpen          = {mopen} 
                onRequestClose  = {()=>setMopen(false)}
                // onAfterOpen     = {isiForm}
                style           = {
                    {
                        overlay:{
                            background: "transparent !important",
                        },
                        content : {
                            top                   : '50%',
                            left                  : '50%',
                            right                 : 'auto',
                            bottom                : 'auto',
                            marginRight           : '-50%',
                            transform             : 'translate(-50%, -50%)',
                            width                 : '40%',
                        }
                    }
                }
            >
                <div className="row">
                    <div className="ml-2">
                        <h2>Input Data Kategori</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="ml-2 col">
                            <form onSubmit={handleSubmit(simpan)}>
                            <div className="mb-3">
                                <label htmlFor="kategori" className="form-label">
                                    Kategori
                                </label>
                                <input  
                                        type        = "text"
                                        className   = "form-control"
                                        name        = "kategori"
                                        placeholder = "kategori" 
                                        ref         = {register({required:true})}
                                />
                                {errors.kategori && "Kategori harus di isi !"}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="keterangan" className="form-label">
                                    Keterangan
                                </label>
                                <input  
                                        type        = "text"
                                        className   = "form-control"
                                        name        = "keterangan"
                                        placeholder = "keterangan"
                                        ref         = {register}
                                />
                            </div>

                            <div className="mb-3">
                                <input  
                                        type        = "submit"
                                        className   = "btn btn-primary"
                                        name        = "keterangan"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
            <div className="row">
                <div>
                    <h2>Data Kategori</h2>
                </div>
            </div>
            <div className="row">
                <div>
                    <input onClick={()=>(tambah())} className="btn btn-primary" type="submit" value="Tambah"/>
                </div>
            </div>
            <div className="row">
                <table className = "table mt-4"> 
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Kategori</th>
                            <th>Keterangan</th>
                            <th>Hapus</th>
                            <th>Ubah</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            isi.map((val,index)=>(
                                <tr key={index}>
                                    <td>{no++}</td>
                                    <td>{val.kategori}</td>
                                    <td>{val.keterangan}</td>
                                    <td>
                                        <button onClick={ () => hapus(val.idkategori)} className="btn btn-danger">Hapus</button>
                                    </td>
                                    <td>
                                        <button onClick={ () => showData(val.idkategori)} className="btn btn-warning">Ubah</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Kategori;
