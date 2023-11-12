import { Container } from "react-bootstrap";

const Promo = () => {
  return (
    <section className="promo">
      <Container>
        <div className="promo__header">
          <h1 className="promo__name">Global Opt - логистика полного цикла из Китая в Россию</h1>
          <h2 className="promo__activity">ДОСТАВКА ГРУЗОВ ИЗ КИТАЯ</h2>
          <h2 className="promo__delivery">В РОССИЮ И СНГ ВСЕМИ ВИДАМИ ТРАНСПОРТА</h2>
          <div className="devider">
            <div className="devider__line"></div>
            <div className="devider__circle"></div>
            <div className="devider__line"></div>
          </div>
        </div>
        <div className="promo__tasks">
          <div className="promo__item">
            <div className="promo__img">
              <img src="icons/promo/Task_1.svg" alt="Task_1" />
            </div>
            <div className="promo__descr">Перевозка негабаритных и крупнотоннажных грузов</div>
          </div>
          <div className="promo__item">
            <div className="promo__img">
              <img src="icons/promo/Task_2.svg" alt="Task_2" />
            </div>
            <div className="promo__descr">
              Самостоятельно декларируем и проводим таможенную очистку с оптимизацией кодов и ставок
            </div>
          </div>
          <div className="promo__item">
            <div className="promo__img">
              <img src="icons/promo/Task_3.svg" alt="Task_3" />
            </div>
            <div className="promo__descr">
              Осуществляем прямые поставки с заводов от двери до двери
            </div>
          </div>
          <div className="promo__item">
            <div className="promo__img">
              <img src="icons/promo/Task_4.svg" alt="Task_4" />
            </div>
            <div className="promo__descr">
              Экспресс доставка 1-2 дня из Гуанчжоу в Москву от 25$/кг
            </div>
          </div>
          <button className="btn btn__primary">Получить расчет</button>
        </div>
      </Container>
    </section>
  );
};

export default Promo;
