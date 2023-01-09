import React from 'react';

function Event1() {
  return (
    <div style={{ width: '100%' }}>
      <img
        src={process.env.PUBLIC_URL + '.././img/banner1.png'}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default Event1;
