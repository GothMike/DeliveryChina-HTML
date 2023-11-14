import { Container } from "react-bootstrap";
import Form from "../../../form/Form";

const Price = () => {
  return (
    <section id="price" className="price">
      <Container>
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
                <img src="icons/price/price_1.svg" alt="price_1" />
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
                <img src="icons/price/price_2.svg" alt="price_2" />
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
                <img src="icons/price/price_3.svg" alt="price_3" />
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
                <img src="icons/price/price_4.svg" alt="price_4" />
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
        <Form />
      </Container>
    </section>
  );
};

export default Price;
