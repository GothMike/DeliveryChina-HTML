const Price = () => {
  return (
    <section id="price" className="price">
      <div className="container">
        <div className="title">Цены на любой вариант доставки</div>
        <div className="devider__single"></div>
        <div className="subtitle price__subtitle">
          Перевозки грузов на дальние расстояния без каких-либо ограничений. Любой груз доставим
          вовремя.
        </div>
        <div className="price__items">
          <div className="price__item">
            <div className="price__header">Доставка морем</div>
            <div className="price__descr">
              <div className="price__icon">
                <img src="icons/price/price_1.webp" alt="price_1" />
              </div>
              <div className="price__delivery">
                <div className="price__time">Доставка 35-50 дней</div>
                <div className="price__range">от 0,3$ за 1 кг</div>
              </div>
              <div className="price__text">
                Морские перевозки грузов из Китая в Россию за 35 дней с прохождением таможни
              </div>
              <button className="btn">Подробнее</button>
            </div>
          </div>
          <div className="price__item">
            <div className="price__header">Ж/Д доставка</div>
            <div className="price__descr">
              <div className="price__icon">
                <img src="icons/price/price_2.webp" alt="price_1" />
              </div>
              <div className="price__delivery">
                <div className="price__time">Доставка 15-28 дней</div>
                <div className="price__range">от 1$ за 1 кг</div>
              </div>
              <div className="price__text">
                ЖД перевозки грузов из Китая в Россию от 2 недель с прохождением таможни
              </div>
              <button className="btn">Подробнее</button>
            </div>
          </div>
          <div className="price__item">
            <div className="price__header">Автодоставка</div>
            <div className="price__descr">
              <div className="price__icon">
                <img src="icons/price/price_3.webp" alt="price_1" />
              </div>
              <div className="price__delivery">
                <div className="price__time">Доставка 12-20 дня</div>
                <div className="price__range">от 1$ за 1 кг</div>
              </div>
              <div className="price__text">
                Автоперевозки грузов из Китая в Россию от 2 недель с прохождением таможни
              </div>
              <button className="btn">Подробнее</button>
            </div>
          </div>
          <div className="price__item">
            <div className="price__header">Авиа доставка</div>
            <div className="price__descr">
              <div className="price__icon">
                <img src="icons/price/price_4.webp" alt="price_1" />
              </div>
              <div className="price__delivery">
                <div className="price__time">Доставка 1-12 дней</div>
                <div className="price__range">от 6$ за 1 кг</div>
              </div>
              <div className="price__text">
                Авиаперевозки грузов из Китая в Россию до 2 недель с прохождением таможни
              </div>
              <button className="btn">Подробнее</button>
            </div>
          </div>
        </div>
        <div id="#consultation" className="price__consultation">
          <div className="price__title">Заказать бесплатную консультацию</div>
          <form className="price_form" action="#">
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
      </div>
    </section>
  );
};

export default Price;
