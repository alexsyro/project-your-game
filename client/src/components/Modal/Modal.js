import style from './modal.module.css';
import { useDispatch } from 'react-redux';
import { SET_ANSWERED } from '../../redux/actionTypes/actionTypes';

function Modal({ question, theme, categoryName, setModal, currQuestion }) {
  const dispatch = useDispatch();
  function MakeAnswer(event) {
    event.preventDefault();
    const answer = event.target.answer.value;
    dispatch({ type: SET_ANSWERED, payload: { theme: currQuestion.theme, category: currQuestion.categoryName } });
    if (answer === currQuestion.question.question.answer) {
      alert('Правильно!');
    } else {
      alert('Не правильно, ответ:', currQuestion.question.question.answer);
    }
    setModal(false);
  }

  return (
    <div className={style.modal}>
      <form onSubmit={MakeAnswer} className={style.modalDialog}>
        <h1>{currQuestion.theme}</h1>
        <h2>{currQuestion.categoryName}</h2>
        <h3>{currQuestion.question.question.text}</h3>

        <input type='text' name='answer' />

        <button>Ответить</button>
        <button onClick={() => setModal(false)}>Отмена</button>
      </form>
    </div>
  );
}

export default Modal;
