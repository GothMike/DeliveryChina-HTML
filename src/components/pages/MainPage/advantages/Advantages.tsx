import { Container } from "react-bootstrap";

const Advantages = () => {
  return (
    <section id="advantages" className="advantages">
      <Container>
        <h2 className="title">Преимущества работы с GlobalOpt</h2>
        <div className="advantages__items">
          <div className="advantages__item">
            <div className="advantages__img">
              <img src="icons/advantages/advantages_1.webp" alt="advantages_1" />
            </div>
            <div className="advantages__header">Офисы в Китае и России</div>
            <div className="advantages__descr">
              Офисы расположены в Москве, столице России. И в Гуанчжоу, мировом торговом мегаполисе
              Китая.
            </div>
          </div>
          <div className="advantages__item">
            <img src="icons/advantages/advantages_2.webp" alt="" className="advantages__img" />
            <div className="advantages__header">Декларируем груз с оптимизацией</div>
            <div className="advantages__descr">
              Идем на встречу своим клиентам и помогаем растаможить груз с оптимизацией кодов и
              ставок.
            </div>
          </div>
          <div className="advantages__item">
            <img src="icons/advantages/advantages_3.webp" alt="" className="advantages__img" />
            <div className="advantages__header">Квалифицированные кадры</div>
            <div className="advantages__descr">
              Наши сотрудники имеют большой опыт в логистике с Китаем и в совершенстве владеют
              китайским и английским языками.
            </div>
          </div>
          <div className="advantages__item">
            <img src="icons/advantages/advantages_4.webp" alt="" className="advantages__img" />
            <div className="advantages__header">Осуществляем поиск производителей</div>
            <div className="advantages__descr">
              Помогаем нашим клиентам найти интересующий вас товар или производителя в Китае.
            </div>
          </div>
          <div className="advantages__item">
            <img src="icons/advantages/advantages_5.webp" alt="" className="advantages__img" />
            <div className="advantages__header">Собственный склад в Китае</div>
            <div className="advantages__descr">
              Свой склад в Китае, позволяет собирать и проверять и упаковывать ваши товары, перед
              отправкой.
            </div>
          </div>
          <div className="advantages__item">
            <img src="icons/advantages/advantages_6.webp" alt="" className="advantages__img" />
            <div className="advantages__header">Перевод денег в Китай</div>
            <div className="advantages__descr">
              Помогаем переводить и оплачивать товар в Китае на льготных условиях
            </div>
          </div>
          <div className="advantages__item">
            <img src="icons/advantages/advantages_7.webp" alt="" className="advantages__img" />
            <div className="advantages__header">Делаем оптовые поставки под ключ</div>
            <div className="advantages__descr">
              Берём на себя все заботы связанные с закупкой, проверкой на качество, логистикой и
              растаможкой. От вас требуется лишь заполнить техническое задание, одобрить образцы
              товаров и после принять товар на своём складе!
            </div>
          </div>
          <div className="advantages__item">
            <img src="icons/advantages/advantages_8.webp" alt="" className="advantages__img" />
            <div className="advantages__header">Поездка на производство в Китай</div>
            <div className="advantages__descr">
              У нас большой опыт в бизнес поездках по Китаю. Мы с большой радостью и желанием
              организуем вам такую поездку в Китай под ключ. Сделаем визу, трансфер из аэропорта,
              забронируем отель, предоставим переводчика. Организуем поездку на производство. Шоп
              тур. Мебельный тур.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Advantages;
