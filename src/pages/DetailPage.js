import React, { useEffect, useState } from 'react';
import '../App.css';
import { Nav } from 'react-bootstrap';
import { addCart } from '../store';
import { useDispatch } from 'react-redux/es/exports';
import { useLocation } from 'react-router';
import ProductList from '../ProductList';
import { useNavigate } from 'react-router-dom';
import DetailComponent from '../DetailPage/DetailComponent';
import Navlist from '../Nav/Navlist';

function DetailPage() {
  const { state } = useLocation();
  let [detail, setDetail] = useState([1, 0, 0]);
  let [animation, setAnimation] = useState('');
  let dispatch = useDispatch();
  const [items, setItems] = useState();
  console.log(state);

  const [size, setSize] = useState('-[필수] size 선택-');
  const [color, setColor] = useState('-[필수] color 선택-');

  console.log(size, color);
  // let [visible, setVisible] = useState(true);
  // let [count, setCount] = useState(0);

  // 2초 타이머 생성
  // useEffect(() => {
  //   let a = setTimeout(() => {
  //     setVisible(!visible);
  //   }, 2000);
  //   return () => {
  //     clearTimeout(a);
  //   };
  // });
  // useEffect가 업데이트시에도 실행되는데 count 업데이트 될 때 클린업하고 다시 effect실행되면 어짜피 타이머 생기는거 아닌가요?

  //최근 본 상품 list
  useEffect(() => {
    let item = localStorage.getItem('watched');
    let count = 0;
    item = JSON.parse(item);
    // watch가 비었을 때(맨처음) 그냥 넣어줌
    if (item.length === 0) {
      console.log('first');
      item.push({ id: state.id, type: state.type });
    }
    // watct에 값이 있을 경우 id랑 type이 같은게 하나도 없으면 push (count로 같은 경우 세어줌)
    else {
      for (let i = 0; i < item.length; i++) {
        if (item[i].id === state.id && item[i].type === state.type) {
          count += 1;
        }
      }
      if (count === 0) {
        item.push({ id: state.id, type: state.type });
      }
    }

    //item.push({ id: state.id, type: state.type });
    item = Array.from(item);
    console.log('45', item);
    setItems(item);
    localStorage.setItem('watched', JSON.stringify(item));
  }, []);

  useEffect(() => {
    let a = setTimeout(() => {
      setAnimation('end');
    }, 10);

    return () => {
      clearTimeout(a);
      setAnimation('');
    };
  }, [detail]);

  const change = (i) => {
    detail = [0, 0, 0];
    let cpDetail = [...detail];
    cpDetail[i]++;
    setDetail(cpDetail);
    console.log(detail);
  };

  const navigate = useNavigate();

  const useConfirm = (message = null, onConfirm, onCancel) => {
    const confirmAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    };
    return confirmAction;
  };

  const onComfirm = useConfirm(
    '장바구니로 이동하시겠습니까?',
    () => navigate('/cart'),
    () => console.log('쇼핑 계속...')
  );

  return (
    <div>
      <Navlist scroll={true} />
      <div className='container'>
        {/* {visible === true ? (
          <div className="alert alert-warning">2초이내 구매시 할인</div>
        ) : null}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {count}
        </button> */}
        <div className='product-wrapper'>
          <div className='product-image'>
            <img src={state.src} />
          </div>
          <div className='product-info'>
            <h4 className=''>{state.title}</h4>
            <p>{state.content}</p>
            <p>{state.price}</p>
            <div className='product-choice'>
              {state.type === 'shoes' ? (
                <select
                  value={size}
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                >
                  <option>- [필수] size 선택 -</option>
                  <option>230</option>
                  <option>240</option>
                  <option>250</option>
                  <option>260</option>
                  <option>270</option>
                  <option>280</option>
                </select>
              ) : (
                <select
                  value={size}
                  onChange={(e) => {
                    setSize(e.target.value);
                  }}
                >
                  <option>- [필수] size 선택 -</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              )}

              <select
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              >
                <option>- [필수] color 선택 -</option>
                <option>black</option>
                <option>white</option>
                <option>red</option>
                <option>blue</option>
              </select>
            </div>
            <button
              className=''
              onClick={() => {
                dispatch(
                  addCart({
                    id: state.id,
                    src: state.src,
                    title: state.title,
                    size: size,
                    color: color,
                    count: 1,
                    price: state.price,
                  })
                );
                onComfirm();
              }}
            >
              쇼핑백 담기
            </button>
            <button>주문하기</button>
          </div>
        </div>

        <div className='last-product-wrapper'>
          <div className='last-product'>최근 본 상품</div>
          <div className='last-product-list'>
            {items ? (
              items.map((item) => {
                return (
                  <div>
                    <ProductList productId={item} />
                  </div>
                );
              })
            ) : (
              <div>로딩중</div>
            )}
          </div>
        </div>

        <Nav variant='tabs' defaultActiveKey='link0'>
          <Nav.Item style={{ width: '10%' }}>
            <Nav.Link
              eventKey='link0'
              onClick={() => {
                change(0);
              }}
            >
              DETAIL
            </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ width: '10%' }}>
            <Nav.Link
              eventKey='link1'
              onClick={() => {
                change(1);
              }}
            >
              REVIEW
            </Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ width: '10%' }}>
            <Nav.Link
              eventKey='link2'
              onClick={() => {
                change(2);
              }}
            >
              QnA
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {detail.map((a, i) => {
          return (
            <div className={'start ' + animation}>
              {detail[i] != 0 ? <DetailComponent i={i} state={state} /> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DetailPage;
