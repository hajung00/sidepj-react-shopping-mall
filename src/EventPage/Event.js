import React from 'react';
import { Outlet } from 'react-router-dom';
function Event() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 0px',
      }}
    >
      <h3 style={{ padding: '20px 0px' }}>오늘의 이벤트</h3>
      <Outlet></Outlet>
    </div>
  );
}

export default Event;
