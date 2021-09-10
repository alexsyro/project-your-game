//Список тем
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CREATE_THEMES } from '../../redux/actionTypes/actionTypes';
import Theme from '../Theme/Theme';

function Themes() {
  const dispatch = useDispatch();
  const themes = useSelector((state) => state.themeReducer.themes);

  useEffect(() => {
    fetch('http://localhost:1234/api/questions', { credential: true })
      .then((res) => res.json())
      .then((data) => dispatch({ type: CREATE_THEMES, payload: data }));
  }, [dispatch]);

  return (
    <div className='uk-flex-column'>
      {themes.map((el, index) => {
        return (
          <div key={new Date().getTime() + index} className='uk-flex'>
            <Theme el={el} />
          </div>
        );
      })}
    </div>
  );
}

export default Themes;
