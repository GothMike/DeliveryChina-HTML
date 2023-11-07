const Footer = () => {
  return (
    <footer className="footer">
      {/* <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.606372168523!2d37.624643077146494!3d55.74796799236313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54af8f4b2bb81%3A0x1667827ac72a29c7!2sGlobal%20Opt!5e0!3m2!1sru!2sge!4v1685270697401!5m2!1sru!2sge"
      width="100%"
      height="500px"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe> */}
      <div className="footer__info">
        <div className="footer__info-city">г. Москва</div>
        ул. Садовническая, дом 5, офис 4-6 <br />
        700 от м. Новокузнецкая <br />
        Тел: +7 (926) 423 01 00
        <div className="footer__info-mail">info@glopt.ru</div>
      </div>
      <div className="container">
        <div className="footer__items">
          <div className="footer__logo">
            <img src="icons/circle/Logo.webp" alt="Logo" />
          </div>
          <div className="footer__descr">Global Opt - Доставка грузов из Китая в Россию и СНГ</div>
          <div className="menu__call">
            <div className="menu__header">Есть вопросы?</div>
            <div className="menu__number">+7 (926) 423 01 00</div>
            <div className="menu__btn">
              <button className="btn">Перезвонить мне</button>
            </div>
          </div>
        </div>
        <div className="devider__footer"></div>
        <div className="footer__end">© 2023 GothMike pet project.</div>
      </div>
    </footer>
  );
};

export default Footer;
