import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button, Modal } from 'antd';

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

  const [dummy, setDummy] = useState(qnaData);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [inquiryType, setInquiryType] = useState('default');
  const [askContent, setAskContent] = useState('');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
    setDummy([
      ...dummy,
      { id: 'rj', date: '2022.12.10', state: true, content: askContent },
    ]);
    setInquiryType('default');
    setAskContent('');
  };
  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log('dummy', dummy);
  }, [dummy]);

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
          {dummy.map((qna) => (
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
          onClick={showModal}
        >
          작성하기
        </button>
        <>
          <Modal
            open={open}
            title='문의하기'
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key='back' onClick={handleCancel}>
                취소하기
              </Button>,
              <Button
                key='submit'
                type='primary'
                loading={loading}
                onClick={handleOk}
              >
                문의하기
              </Button>,
            ]}
          >
            <div>
              <select
                value={inquiryType}
                onChange={(e) => {
                  setInquiryType(e.target.value);
                }}
              >
                <option value='default'> 선택해주세요 </option>
                <option value='productAsk'> 상품 문의 </option>
                <option value='shippingAsk'> 배송 문의 </option>
                <option value='sizeAsk'> 사이즈 문의 </option>
              </select>
              <div>
                <textarea
                  value={askContent}
                  onChange={(e) => setAskContent(e.target.value)}
                ></textarea>
              </div>
            </div>
          </Modal>
        </>
      </div>
    </div>
  );
}

export default Qna;
