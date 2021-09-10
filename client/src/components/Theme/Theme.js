import React from 'react';

function Theme({ el }) {
  console.log('SSSSSSSSS', el)
  return (
    <>
    <div className="uk-card uk-card-default uk-card-body">
      { el.theme }
    </div>
    {el.categories.map((el, index) => {
      return <div key={new Date().getDate() + index} className="uk-card uk-card-default uk-card-body">{el.categoryName}</div>
    })}
    </>
  );
}

export default Theme;
