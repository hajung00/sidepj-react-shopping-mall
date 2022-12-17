import React from 'react';
import ReviewComponent from './ReviewComponent';

function Review() {
  const reviewDummy = [
    {
      id: 'rj**',
      date: '2022.12.04',
      grade: 5,
      src: '.././img/review1.jpg',
      content:
        '사진에서 보이는 색상, 디자인 똑같고 처음 신었는데 발도 편하고 너무 좋아요!',
    },
    {
      id: 'rj2**',
      date: '2022.12.10',
      grade: 3,
      src: '.././img/review2.jpg',
      content:
        '사진에서 보이는 색상, 디자인 똑같고 처음 신었는데 발도 편하고 너무 좋아요!',
    },
  ];
  const reviewData = reviewDummy.reverse();

  return (
    <div style={{ backgroundColor: 'rgb(240, 239, 239)', padding: '10px 0px' }}>
      {reviewData.map((review) => (
        <ReviewComponent review={review} key={review.id} />
      ))}
    </div>
  );
}

export default Review;
