import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import data from './data.js';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function MainPage() {
  let [shoes, setShoes] = useState('');
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    getShoes();
  }, []);

  // shoes 3개씩 가져오기
  const getShoes = async () => {
    await axios.get('http://localhost:3000/shoes').then((result) => {
      console.log(result.data.slice(lastId, lastId + 3));
      setShoes([...shoes, ...result.data.slice(lastId, lastId + 3)]);
    });
    setLastId(lastId + 3);
    console.log(lastId);
  };

  return (
    <div>
      <>
        {/* 상품 title 정렬
              <button
                onClick={() => {
                  let copy = [...shoes];
                  copy.sort(function (a, b) {
                    if (a["title"] > b["title"]) {
                      return 1;
                    } else if (a["title"] < b["title"]) {
                      return -1;
                    }
                  });
                  setShoes(copy);
                  console.log(shoes);
                }}
              >
                {" "}
                정렬{" "}
              </button> */}
        <div className='main-bg'></div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, auto)',
            gap: '2%',
          }}
        >
          {shoes ? (
            shoes.map((a) => {
              return (
                <div style={{ width: '100%' }}>
                  <ProductList shoes={a} key={a.id} />
                </div>
              );
            })
          ) : (
            <div>로딩중...</div>
          )}{' '}
        </div>
        <Button variant='primary' onClick={getShoes}>
          더보기
        </Button>{' '}
      </>
    </div>
  );
}

export default MainPage;
