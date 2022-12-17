import React from 'react';
import { Table } from 'react-bootstrap';

function Qna() {
  const qnaDummy = [
    {
      id: 'rj**',
      date: '2022.12.04',
      state: true,
      content: '사이즈가 어떻게 되나요?',
    },
    {
      id: 'rj2**',
      date: '2022.12.10',
      state: false,
      content: '배송 언제 시작하나요?',
    },
  ];
  const qnaData = qnaDummy.reverse();
  return (
    <div style={{ margin: '50px 10px' }}>
      <div style={{ margin: '50px 0px' }}>
        <h4>상품 문의</h4>
      </div>
      <Table style={{ borderRadius: '5px', marginBottom: '150px' }}>
        <thead style={{ backgroundColor: 'rgb(240, 239, 239)' }}>
          <tr>
            <th style={{ width: '150px' }}>답변상태</th>
            <th>문의</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          {qnaData.map((qna) => (
            <tr>
              <td>{qna.state ? '답변 완료' : '미답변'}</td>
              <td>{qna.content}</td>
              <td>{qna.id}</td>
              <td>{qna.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <button
          style={{
            borderRadius: '5px',
            backgroundColor: 'gray',
            color: 'white',
            fontWeight: 'bold',
            width: '100px',
            height: '35px',
            borderColor: 'gray',
            border: 'none',
          }}
        >
          작성하기
        </button>
      </div>
    </div>
  );
}

export default Qna;
