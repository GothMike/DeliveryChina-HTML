const Form = () => {
  return (
    <div id="#consultation" className="price__consultation">
      <div className="price__title">Заказать бесплатную консультацию</div>
      <form className="price__wrapper" action="#">
        <div className="price__wrapper-form">
          <div className="price__form">
            <div className="price__wrapper-circle">
              <div className="price__circle">
                <img src="icons/circle/consulation_circle.webp" alt="consultation" />
              </div>
            </div>
            <div className="recall__input">
              <input placeholder="Ваше имя" name="name" type="text" />
            </div>
            <div className="recall__input">
              <input placeholder="Ваш телефон" name="phone" />
            </div>
            <div className="recall__input">
              <input placeholder="Ваш E-mail" name="email" type="email" />
            </div>
            <div className="price__btn">
              <button className="btn btn__form">Заказать консультацию</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
