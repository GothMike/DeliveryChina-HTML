const Recall = () => {
  return (
    <section id="recall" className="recall">
      <div className="container">
        <form className="recall_form" action="#">
          <div className="recall__item">
            <div className="recall__header">
              <h3>Остались вопросы?</h3>
              <h4>Напишите нам!</h4>
            </div>
            <div className="recall__input recall__input_main">
              <input placeholder="Ваше имя" name="name" type="text" />
            </div>
            <div className="recall__input recall__input_main">
              <input placeholder="Ваш телефон" name="phone" />
            </div>
            <div className="recall__input recall__input_main">
              <input placeholder="Ваш E-mail" name="email" type="email" />
            </div>
            <div className="recall__textarea">
              <input placeholder="Сообщение" name="text-area" type="teat-area" />
            </div>
            <div className="recall__btn">
              <button className="btn btn__form">Отправить заявку</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Recall;
