import { useState} from 'react';
import Tabel from './Tabel';

function Menu() {

    const titel = "Daftar Menu Restoran";
    const [menus, setMenu] = useState(

        [
            {
                idmenu: 30, 
                idkategori: 28, 
                menu: "Apel Fuji", 
                gambar: "apelfuji.jpg",
                harga: 3000,
            }, 
            {
                idmenu: 31, 
                idkategori: 28, 
                menu: "Pisang", 
                gambar: "pisang.jpg",
                harga: 5000,
            }, 
            {
                idmenu: 32, 
                idkategori: 25, 
                menu: "Nasi Padang", 
                gambar: "nasipadang.jpg",
                harga: 20000,
            }, 
            {
                idmenu: 33, 
                idkategori: 25, 
                menu: "Nasi Ayam", 
                gambar: "nasiayam.jpg",
                harga: 15000,
            }, 
            {
                idmenu: 34, 
                idkategori: 26, 
                menu: "Es Teh Manis", 
                gambar: "estehmanis.jpg",
                harga: 7000,
            }, 
            {
                idmenu: 35, 
                idkategori: 26, 
                menu: "Es Jeruk Segar", 
                gambar: "esjeruksegar.jpg",
                harga: 7000,
            }, 
        ]

    )

    return (
        <div className="App">
            <Tabel menu = {menus} titel={titel}/>
            <Tabel menu = {menus.filter((data)=>(data.idkategori===26))} titel="MENU BUAH"/>
        </div>
    );
}

    export default Menu;