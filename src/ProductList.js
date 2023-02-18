import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './App.css';

// 1. main페이지에서 불러오는 경우(product) 2. detail페이지의 최근 본 상품에서 불러오는 경우(productId)
const ProductList = ({ product, productId }) => {
  let navigate = useNavigate();
  console.log(product, productId);
  // shoes페이지에서 불러진 경우 shoes로 초기화, 아닌 경우는 null로 셋팅
  const [_product, setProduct] = useState(product ? product : null);

  // detail페이지에서 불러진 경우 getShoes를 호출해 db.json에서 해당 id의 shoes를 찾아 _shoes에 저장
  useEffect(() => {
    if (_product === null) {
      getProduct();
    }
  }, []);

  // product 가져오기
  const getProduct = async () => {
    console.log('getProduct');
    await axios
      .get(`https://hajung-shop.herokuapp.com/${productId.type}`)
      .then((result) => {
        console.log(
          result.data.find(
            (product) =>
              product.id === productId.id && product.type === productId.type
          )
        );
        setProduct(
          result.data.find(
            (product) =>
              product.id === productId.id && product.type === productId.type
          )
        );
      });
  };
  console.log(_product);

  return (
    <div className={`${product ? 'product' : 'list'}-wrapper`}>
      {_product ? (
        <div
          className='product'
          onClick={() => {
            navigate('/detail/' + _product.title.replace(/ /g, ''), {
              state: _product,
            });
          }}
        >
          <img src={_product.src} />
          <div>
            <h4>{_product.title}</h4>
            <p>{_product.price}</p>
          </div>
        </div>
      ) : (
        <div>로딩중...</div>
      )}
    </div>
  );
};

export default ProductList;
