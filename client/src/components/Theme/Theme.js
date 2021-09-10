/* eslint-disable no-unused-vars */
import { useState } from 'react';
import Modal from '../Modal/Modal';

function Theme({ el }) {
  const [modalMode, setModal] = useState(false);
  return (
    <>
      <div className='uk-card uk-card-default uk-card-body'>{el.theme}</div>
      {el.categories.map((question, index) => {
        if (modalMode) {
          return (
            <Modal
              key={new Date().getDate() + index + 1}
              question={question}
              setModal={setModal}
              theme={el.theme}
              categoryName={question.categoryName}
            />
          );
        } else {
          if (question.question.isAnswered) {
            return (
              <div key={new Date().getDate() + index} className='uk-card uk-card-default uk-card-body'></div>
            );
          } else {
            return (
              <div
                onClick={() => setModal(true)}
                key={new Date().getDate() + index}
                className='uk-card uk-card-default uk-card-body'
              >
                {question.categoryName}
              </div>
            );
          }
        }
      })}
    </>
  );
}

export default Theme;
