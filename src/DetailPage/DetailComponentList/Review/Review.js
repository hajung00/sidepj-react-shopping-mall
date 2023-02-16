import React from 'react';
import ReviewComponent from './ReviewComponent';

function Review({ state }) {
  const reviewDummy = [
    {
      id: 'rj**',
      date: '2022.12.04',
      grade: 5,
      src: state.src,
      content: '사진에서 보이는 색상, 디자인 똑같고 너무 좋아요!',
    },
    {
      id: 'rj2**',
      date: '2022.12.10',
      grade: 3,
      src: state.src,
      content: '편하고 이쁘고 좋아요!',
    },
  ];
  const reviewData = reviewDummy.reverse();

  return (
    <div
      style={{
        backgroundColor: 'rgb(240, 239, 239)',
        padding: '10px 0px',
        margin: '30px 0px',
      }}
    >
      {reviewData.map((review) => (
        <ReviewComponent review={review} key={review.id} />
      ))}
    </div>
  );
}

export default Review;
