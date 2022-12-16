import React, { useCallback, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { addCount } from './store';

function Cart() {
  let cartList = useSelector((state) => {
    return state.cart;
  });
  let dispatch = useDispatch();
  console.log(cartList.length);
  console.log(cartList);
  const [isCheckingProduct, setIsCheckingProduct] = useState([]);

  // const [isCheckAll, setIsCheckAll] = useState(false);
  const [checkTrue, setCheckTrue] = useState(true);

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
                    console.log(e.currentTarget.checked, i);
                    if (e.currentTarget.checked) {
                      console.log(isCheckingProduct);
                      setIsCheckingProduct([
                        ...isCheckingProduct,
                        {
                          price: a.price * a.count,
                          id: i,
                        },
                      ]);
                      console.log(isCheckingProduct);
                    } else {
                      console.log('false', e.currentTarget.checked, i);
                      console.log(isCheckingProduct);
                      setIsCheckingProduct(
                        isCheckingProduct.filter((item) => item.id !== i)
                      );
                      console.log(isCheckingProduct);
                    }
                  }}
                ></input>
              </td>
              <td>{cartList[i].title}</td>
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
      <button>주문하기</button>
    </div>
  );
}

export default Cart;
