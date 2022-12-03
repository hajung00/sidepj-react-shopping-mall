import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './App.css';

// 1. shoes페이지에서 불러오는 경우(shoes) 2. detail페이지의 최근 본 상품에서 불러오는 경우(shoesId)
const ProductList = ({ shoes, shoesId }) => {
  let navigate = useNavigate();
  console.log(shoes, shoesId);
  // shoes페이지에서 불러진 경우 shoes로 초기화, 아닌 경우는 null로 셋팅
  const [_shoes, setShoes] = useState(shoes ? shoes : null);

  // detail페이지에서 불러진 경우 getShoes를 호출해 db.json에서 해당 id의 shoes를 찾아 _shoes에 저장
  useEffect(() => {
    if (_shoes === null) {
      getShoes();
    }
  }, []);

  // shoes 가져오기
  const getShoes = async () => {
    await axios.get('http://localhost:3000/shoes').then((result) => {
      console.log(result.data.find((shoes) => shoes.id === shoesId));
      setShoes(result.data.find((shoes) => shoes.id === shoesId));
    });
  };
  console.log(_shoes);

  return (
    <div className={'shose-' + `${shoes ? 'product' : 'list'}`}>
      {_shoes ? (
        <div
          onClick={() => {
            navigate('/detail/' + _shoes.id, { state: _shoes });
          }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img src={_shoes.src} width='80%' />
          <h4>{_shoes.title}</h4>
          <p>{_shoes.price}</p>
        </div>
      ) : (
        <div>로딩중...</div>
      )}
    </div>
  );
};

export default ProductList;
