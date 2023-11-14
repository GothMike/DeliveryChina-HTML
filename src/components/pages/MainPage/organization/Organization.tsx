import { Container } from "react-bootstrap";

const Organization = () => {
  return (
    <section id="works" className="organization">
      <Container>
        <div className="title">Цены на любой вариант доставки</div>
        <div className="devider__single"></div>
        <div className="subtitle">
          Мы организуем перевозки из Китая - оперативно и надежно, с учетом особенностей груза и
          ваших требований по срокам и бюджету.
        </div>
        <div className="organization__items">
          <div className="organization__item">
            <div className="organization__img">
              <img src="img/organization/organisation_1.webp" alt="organization_1" />
            </div>
            <div className="organization__header">Страховка груза</div>
            <div className="organization__descr">
              <p>
                Все грузы, логистику которых осуществляет Global Opt, застрахованы. Мы гарантируем
                полное возмещение стоимости груза в случаях, предусмотренных страхо- вым
                соглашением. Все ваши тревоги наша компания берет на себя.
              </p>
            </div>
          </div>
          <div className="organization__item">
            <div className="organization__img">
              <img src="img/organization/organisation_2.webp" alt="organization_2" />
            </div>
            <div className="organization__header">Логистика последней мили</div>
            <div className="organization__descr">
              <p>
                Мы осуществляем доставку вашего груза до конкретного адреса. Привоз согласовывается
                менед- жерами по телефону, предварительно за сутки и за час до доставки. Также мы
                предоставляем услуги грузчи- ков по месту доставки груза.
              </p>
            </div>
          </div>
          <div className="organization__item">
            <div className="organization__img">
              <img src="img/organization/organisation_3.webp" alt="organization_3" />
            </div>
            <div className="organization__header">Мы всегда смотрим вперед</div>
            <div className="organization__descr">
              <p>
                Философия нашей компании, делать себя и своих партнеров по всему миру, успешными и
                богатыми. Поэтому мы всегда открыты к диалогу о партнерстве и инвестициях.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Organization;
