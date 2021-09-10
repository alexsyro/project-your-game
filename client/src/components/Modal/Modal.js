import style from './modal.module.css';

function Modal({ el: question, theme, categoryName, setModal }) {
  console.log(theme);
  function handleSave() {
    console.log('handleSave');
  }

  return (
    <div className={style.modal}>
      <form className={style.modalDialog}>
        <h1>{theme}</h1>
        <h2>{categoryName}</h2>
        <h3>{question.question.text}</h3>

        <input
          type="text"
        />

        <button onClick={handleSave}>Cоздать</button>
        <button onClick={() => setModal(false)}>Отмена</button>
      </form>
    </div>
  );
}

export default Modal;
