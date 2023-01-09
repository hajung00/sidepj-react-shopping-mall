import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';

SwiperCore.use([Navigation, Pagination]);

function MainPage() {
  let [product, setProduct] = useState('');

  const [top, setTop] = useState('');
  const [lastId, setLastId] = useState(0);

  const [type, setType] = useState('top');

  const navigation = useNavigate();

  useEffect(() => {
    getProduct();

    console.log(product);
  }, [type]);

  // shoes 3개씩 가져오기
  const getProduct = async () => {
    await axios.get(`http://localhost:3000/${type}`).then((result) => {
      console.log(result.data.slice(lastId, lastId + 3));
      setProduct([...product, ...result.data.slice(lastId, lastId + 3)]);
    });
    setLastId(lastId + 3);
    console.log(lastId);
  };

  const onClickHandler = (name) => {
    setType(name);
    setProduct('');
    setLastId(0);
  };
  return (
    <div className='main-wrapper'>
      <div className='main-banner'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <img
              src='img/banner1.png'
              onClick={() => {
                navigation('/event/one');
              }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src='img/banner2.png'
              onClick={() => {
                navigation('/event/two');
              }}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <span
          onClick={() => {
            onClickHandler('top');
          }}
        >
          top
        </span>
        <span
          onClick={() => {
            onClickHandler('shoes');
          }}
        >
          shoes
        </span>
        <span
          onClick={() => {
            onClickHandler('outer');
          }}
        >
          outer
        </span>
        <span
          onClick={() => {
            onClickHandler('bottom');
          }}
        >
          bottom
        </span>
        <span
          onClick={() => {
            onClickHandler('ops');
          }}
        >
          ops
        </span>
        <span
          onClick={() => {
            onClickHandler('bag');
          }}
        >
          acc/bag
        </span>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, auto)',
          gap: '2%',
        }}
      >
        {product ? (
          product.map((a) => {
            return (
              <div style={{ width: '100%' }}>
                <ProductList product={a} key={a.id} />
              </div>
            );
          })
        ) : (
          <div>로딩중...</div>
        )}{' '}
      </div>
      <Button variant='primary' onClick={getProduct}>
        더보기
      </Button>{' '}
    </div>
  );
}

export default MainPage;
