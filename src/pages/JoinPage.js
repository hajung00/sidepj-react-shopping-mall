import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Checkbox, Button, Avatar } from 'antd';
import styled from 'styled-components';
import { LoginWrapper, LoginInputForm, MainLogo } from './LoginPage';

const InputWrapper = styled.div`
  margin-top: 10px;
  padding: 0 10%;
  width: 100%%;
  Input {
    padding: 13px;
    font-size: 14px;
    width: 75%;
    height: 47px;
    border: 1px solid lightgray;
    border-radius: 10px;
  }
`;

const SignupWrapper = styled.div`
  width: 100%;
  padding: 20px 20px;
  text-align: center;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 800;
  margin-top: 5px;
`;

function JoinPage() {
  const navigate = useNavigate();
  const [id, onChangeId] = useState('');
  const [password, onChangePassword] = useState('');
  const [passwordcheck, setChangePasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setChangePasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);

  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked); // 눌렀으면 true
    setTermError(false);
  });

  const onSubmit = () => {
    if (password !== passwordcheck) setPasswordError(true);
    if (!term) setTermError(true);
    console.log('onsubmit');

    if (term && !passwordError) {
      if (window.confirm('❤️ Hajung Shop에 오신걸 환영합니다! ❤️')) {
        navigate('/');
      } else {
      }
      console.log(id, password);
    }
  };

  return (
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
        <p>회원가입</p>
        <SignupWrapper>
          <InputWrapper>
            <label htmlFor='user-email'>아이디</label>
            <br />
            <Input
              name='user-email'
              type='email'
              value={id}
              onChange={(e) => {
                onChangeId(e.target.value);
              }}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor='user-password'>비밀번호</label>
            <br />
            <Input
              name='user-password'
              value={password}
              onChange={(e) => {
                onChangePassword(e.target.value);
              }}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor='user-passwordCheck'>비밀번호 확인</label>
            <br />
            <Input
              name='user-passwordCheck'
              value={passwordcheck}
              onChange={onChangePasswordCheck}
              required
            />
            {passwordError ? (
              <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
            ) : null}
          </InputWrapper>
          <div style={{ marginTop: '10px' }}>
            <Checkbox name='user-term' checked={term} onChange={onChangeTerm}>
              동의합니다.
            </Checkbox>
            {termError ? (
              <ErrorMessage>약관을 동의해주세요.</ErrorMessage>
            ) : null}
          </div>
          <button onClick={onSubmit} className='join'>
            가입하기
          </button>
          <button
            onClick={() => {
              navigate('/login');
            }}
            className='login'
          >
            로그인
          </button>
        </SignupWrapper>
      </LoginInputForm>
    </LoginWrapper>
  );
}

export default JoinPage;
