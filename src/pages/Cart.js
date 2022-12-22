import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addCount } from '../store';

function Cart() {
  let cartList = useSelector((state) => {
    return state.cart;
  });
  let dispatch = useDispatch();
  const [isCheckingProduct, setIsCheckingProduct] = useState([]);

  useEffect(() => {
    console.log('totalPrice');
    console.log(isCheckingProduct);
  }, [isCheckingProduct]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>선택</th>
            <th>상품명</th>
            <th>사이즈</th>
            <th>색상</th>
            <th>수량</th>
            <th>가격</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((a, i) => (
            <tr>
              <td>
                {' '}
                <input
                  id={i}
                  type={'checkbox'}
                  onClick={(e) => {
                    // 해당 상품을 체크했을 때, 가격과 인덱스를 isCheckingProduct에 넣어줌
                    console.log(e.currentTarget.checked, i);
                    if (e.currentTarget.checked) {
                      setIsCheckingProduct([
                        ...isCheckingProduct,
                        {
                          price: a.price * a.count,
                          id: i,
                        },
                      ]);
                    }
                    // 해당 상품이 체크되지 않았을 경우, isCheckingProduct에서 해당 인덱스를 제외한다.
                    else {
                      setIsCheckingProduct(
                        isCheckingProduct.filter((item) => item.id !== i)
                      );
                    }
                  }}
                ></input>
              </td>
              <td>
                <div>
                  <img
                    src={cartList[i].src}
                    style={{ width: '100px', height: '100px' }}
                  />
                  <p>{cartList[i].title}</p>
                </div>
              </td>
              <td>{cartList[i].size}</td>
              <td>{cartList[i].color}</td>
              <td>{cartList[i].count}</td>
              <td>{cartList[i].price}</td>
              <td>
                <button
                  onClick={() => {
                    dispatch(addCount(i));
                  }}
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        total:
        {isCheckingProduct.length >= 1
          ? isCheckingProduct
              .map((item) => item.price)
              .reduce((total, i) => total + i)
          : ''}
      </div>
      <button
        onClick={() => {
          alert(
            `총 가격: ${isCheckingProduct
              .map((item) => item.price)
              .reduce((total, i) => total + i)} 주문 완료!`
          );
        }}
      >
        주문하기
      </button>
    </div>
  );
}

export default Cart;
