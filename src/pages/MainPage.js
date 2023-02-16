import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList';

import axios from 'axios';
import '../App.css';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import Navlist from '../Nav/Navlist';

SwiperCore.use([Navigation, Pagination]);

function MainPage() {
  let [product, setProduct] = useState('');

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
      console.log(result.data.slice(lastId, lastId + 4));
      setProduct([...product, ...result.data.slice(lastId, lastId + 4)]);
    });
    setLastId(lastId + 4);
    console.log(lastId);
  };

  const onClickHandler = (name) => {
    setType(name);
    setProduct('');
    setLastId(0);
  };

  // 스크롤
  const [scrollY, setScrollY] = useState(0);
  const [scrollActive, setScrollActive] = useState(false);

  const scrollFixed = () => {
    if (scrollY >= 100) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }
  };

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', scrollFixed);
    };
    scrollListener();
    return () => {
      window.removeEventListener('scroll', scrollFixed);
    };
  });
  console.log(scrollY, scrollActive);

  return (
    <>
      <Navlist scroll={scrollActive} />
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
                src='img/banner2.png'
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
        {/* menu */}
        <div className='main-menu'>
          <ul className='menu-wrapper'>
            <li
              onClick={() => {
                onClickHandler('top');
              }}
            >
              <div>
                <img src={process.env.PUBLIC_URL + '.././img/top1.jpg'} />
              </div>
              <span>top</span>
            </li>
            <li
              onClick={() => {
                onClickHandler('outer');
              }}
            >
              <div>
                <img src={process.env.PUBLIC_URL + '.././img/outer1.jpg'} />
              </div>
              <span>outer</span>
            </li>

            <li
              onClick={() => {
                onClickHandler('bottom');
              }}
            >
              <div>
                <img src={process.env.PUBLIC_URL + '.././img/bottom.jpg'} />
              </div>
              <span>bottom</span>
            </li>
            <li
              onClick={() => {
                onClickHandler('ops');
              }}
            >
              <div>
                <img src={process.env.PUBLIC_URL + '.././img/ops.jpg'} />
              </div>
              <span>ops</span>
            </li>
            <li
              onClick={() => {
                onClickHandler('shoes');
              }}
            >
              <div>
                <img src={process.env.PUBLIC_URL + '.././img/shoes.jpg'} />
              </div>
              <span>shoes</span>
            </li>
            <li
              onClick={() => {
                onClickHandler('bag');
              }}
            >
              <div>
                <img src={process.env.PUBLIC_URL + '.././img/bag.jpg'} />
              </div>
              <span>acc/bag</span>
            </li>
          </ul>
        </div>
        {/* item */}
        <div className='item-wrapper'>
          {product ? (
            product.map((a) => {
              return <ProductList product={a} key={a.id} />;
            })
          ) : (
            <div>로딩중...</div>
          )}{' '}
        </div>
        <div className='btn-wrapper'>
          <button className='btn-more' onClick={getProduct}>
            더보기
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage;
