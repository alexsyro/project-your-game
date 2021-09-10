import React from 'react';

function Theme({ el }) {
  return (
    <>
    <div className="uk-card uk-card-default uk-card-body">
      { el.theme }
    </div>
    {el.categories.map((el) => {
      return <div className="uk-card uk-card-default uk-card-body">{el.categoryName}</div>
    })}
    </>
  );
}

export default Theme;
