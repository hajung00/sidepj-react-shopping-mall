import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addCount } from './store';

function Cart() {
  let cartList = useSelector((state) => {
    return state.cart;
  });
  let dispatch = useDispatch();
  console.log(cartList.length);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>사이즈</th>
            <th>색상</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((a, i) => (
            <tr>
              <td>{cartList[i].id}</td>
              <td>{cartList[i].title}</td>
              <td>{cartList[i].size}</td>
              <td>{cartList[i].color}</td>
              <td>{cartList[i].count}</td>
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
    </div>
  );
}

export default Cart;
