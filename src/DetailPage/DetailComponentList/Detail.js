import React from 'react';
import { useLocation } from 'react-router';

function Detail() {
  const { state } = useLocation();
  console.log('state', state);
  return (
    <>
      <div>{state.title}</div>
      <div>{state.content}</div>
      <div>
        <img src={state.src} />
      </div>
    </>
  );
}

export default Detail;
