//Список тем
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Themes(props) {
  const dispatch = useDispatch();
  const themes = useSelector((state) => state.themeReducer.themes);

  useEffect(() => {
    fetch('http://localhost:1234/api/questions', { credentials: true })
      .then((res) => res.json())
      .then((data) => dispatch({ type: CREATE_THEMES, payload: data }));
  }, [dispatch]);

  return (
    <div className="uk-flex">
      {themes.map(theme => <div class="uk-card uk-card-default uk-card-body">{theme.name}</div>)}

      {themes.map(theme => theme.categories.map(cat => <div>{cat.name}</div>)  )}
    </div>
  );
}

export default Themes;
