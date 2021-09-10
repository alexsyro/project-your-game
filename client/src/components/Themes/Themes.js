//Список тем
import React, { useEffect }  from 'react';
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
      
      <div class="uk-card uk-card-default uk-card-body">{testObj.themeName}</div>
      {testObj.categories.map((el) => {
        return <div class="uk-card uk-card-default uk-card-body">{el.categoryName}</div>
      })}

    </div>
  );
}

export default Themes;
