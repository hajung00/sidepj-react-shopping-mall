import React from 'react';
import Detail from './DetailComponentList/Detail';
import Qna from './DetailComponentList/Qna';
import Review from './DetailComponentList/Review/Review';
function DetailComponent({ i }) {
  switch (i) {
    case 0:
      return (
        <div>
          <Detail />
        </div>
      );
      break;

    case 1:
      return (
        <div>
          <Review />
        </div>
      );
      break;

    case 2:
      return (
        <div>
          <Qna />
        </div>
      );
      break;

    default:
      break;
  }
}

export default DetailComponent;
