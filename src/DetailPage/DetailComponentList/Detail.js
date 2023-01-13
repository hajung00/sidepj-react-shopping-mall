import React from 'react';
import { useLocation } from 'react-router';

function Detail() {
  const { state } = useLocation();
  console.log('state', state);
  return (
    <>
      <div>
        <img src={state.src} width='80%' />
      </div>
    </>
  );
}

export default Detail;
