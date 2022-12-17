import React from 'react';

function ReviewComponent({ review }) {
  const star = new Array(review.grade).fill(
    process.env.PUBLIC_URL + '.././img/star.png'
  );
  console.log(star);
  return (
    <div
      style={{
        borderRadius: '5px',
        margin: '10px 15px',
        padding: '10px 15px',
        backgroundColor: 'white',
        borderRadius: '5px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '15px 0px',
        }}
      >
        <div>{review.id}</div>
        <div>{review.date}</div>
      </div>

      <div style={{ display: 'flex', margin: '10px 0px' }}>
        {' '}
        <div>평점:{review.grade}</div>
        <div
          style={{
            width: '150px',
            height: '20px',
            padding: '0px 10px',
          }}
        >
          {star.map((item) => (
            <img
              src={item}
              style={{ width: '20px', height: '20px', paddingBottom: '5px' }}
            />
          ))}
        </div>
      </div>
      <div>
        <img
          src={review.src}
          style={{ width: '200px', height: '200px', marginBottom: '15px' }}
        />
        <div>{review.content}</div>
      </div>
    </div>
  );
}

export default ReviewComponent;
