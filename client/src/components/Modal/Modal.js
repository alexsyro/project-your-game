import style from './modal.module.css';
import { useDispatch } from 'react-redux';
import { SET_ANSWERED } from '../../redux/actionTypes/actionTypes';

function Modal({ question, theme, categoryName, setModal }) {
  const dispatch = useDispatch();
  function MakeAnswer(event) {
    event.preventDefault();
    const answer = event.target.answer.value;
    dispatch({ type: SET_ANSWERED, payload: { theme, category: categoryName } });
    if (answer === question.question.answer) {
      alert('Правильно!');
    } else {
      alert('Не правильно, ответ:', question.question.answer);
    }
    setModal(false);
  }

  return (
    <div className={style.modal}>
      <form onSubmit={MakeAnswer} className={style.modalDialog}>
        <h1>{theme}</h1>
        <h2>{categoryName}</h2>
        <h3>{question.question.text}</h3>

        <input type='text' name='answer' />

        <button>Ответить</button>
        <button onClick={() => setModal(false)}>Отмена</button>
      </form>
    </div>
  );
}

export default Modal;
