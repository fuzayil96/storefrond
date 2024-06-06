import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Axiosni import qilish
import './main.css'; // Footer'a özgü stilleri içe aktarın

function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mahsulotlarni olish uchun Axios bilan GET so'rovini yuborish
    axios.get('http://127.0.0.1:8000/api/dress/ayollar-koylagi/') // API_URL o'zgaruvchisiga API ning URL manzilini yozing
      .then(response => {
        setProducts(response.data); // API javoblari ma'lumotlarini saqlash
      })
      .catch(error => {
        console.error('Mahsulotlar olishda xatolik:', error);
      });
  }, []);

  return (
    <main>
      <div className="container">
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={product.Ayollar_koylagi[0].rasmi} className="card-img-top" alt={product.nomi} />
                <div className="card-body">
                  <h5 className="card-title">{product.nomi}</h5>
                  <p className="card-text">{product.tavsif}</p>
                  <p className="card-text">{product.narxi}</p>
                  <p className="card-text">{product.olchamlari}</p>
                  <p className="card-text">{product.zaxiradagi_soni}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Main;
