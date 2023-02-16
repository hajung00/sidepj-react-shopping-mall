import React, { useState } from 'react';
import Navlist from '../Nav/Navlist';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
export const LoginWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  button:first-child {
    color: black;
    font-size: 12px;
    width: 85px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid gray;
    font-weight: 800;
    background-color: white;
  }
  button:first-child:hover {
    background-color: #f2f2f2;
  }
`;
export const LoginInputForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    padding: 13px;
    font-size: 14px;
    width: 60%;
    height: 47px;
    border: 1px solid lightgray;
    border-radius: 10px;
  }
  input:nth-of-type(2) {
    margin-bottom: 30px;
  }

  button {
    width: 60%;
    margin-top: 12px;
    height: 43px;
    border-radius: 8px;
  }
  .login {
    background: lightgray;
    color: white;
    border: 1px solid lightgray;
  }
  .join {
    background: lightpink;
    color: white;
    border: 1px solid lightpink;
  }
  p {
    font-size: 22px;
    margin: 40px;
  }
  span {
    font-size: 12px;
  }
`;
export const MainLogo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  width: 78%;
  justify-content: center;
  padding-bottom: 17px;
`;
function LoginPage() {
  const navigate = useNavigate();
  const [id, onChangeId] = useState('');
  const [password, onChangePassword] = useState('');

  const onLogin = () => {
    console.log(id, password);
    if (window.confirm('하하님! 반갑습니다!😊')) {
      navigate('/');
    } else {
    }
    onChangeId('');
    onChangePassword('');
  };

  return (
    <div>
      <LoginWrapper>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <img
            src='https://storage.keepgrow.com/admin/campaign/20200611023439767.png'
            width='10'
            height='10'
            style={{ marginRight: '5px', marginBottom: '3px' }}
          />
          뒤로가기
        </button>
        <LoginInputForm>
          <MainLogo>
            <img
              src={process.env.PUBLIC_URL + '.././img/mainlogo.png'}
              width='80'
              height='80'
            ></img>
            <h2 style={{ marginLeft: '10px' }}>Hajung Shop</h2>
          </MainLogo>
          <p>로그인</p>
          <input
            placeholder='아이디'
            value={id}
            onChange={(e) => {
              onChangeId(e.target.value);
            }}
          ></input>
          <input
            placeholder='비밀번호'
            value={password}
            onChange={(e) => {
              onChangePassword(e.target.value);
            }}
          ></input>
          <button className='login' onClick={onLogin}>
            로그인
          </button>
          <button
            className='join'
            onClick={() => {
              navigate('/join');
            }}
          >
            회원가입
          </button>
          <div style={{ width: '60%', padding: '25px 0px' }}>
            <span>아이디 / 비밀번호 찾기</span>
          </div>
        </LoginInputForm>
      </LoginWrapper>
    </div>
  );
}

export default LoginPage;
