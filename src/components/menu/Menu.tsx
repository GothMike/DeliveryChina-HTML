const Menu = (): JSX.Element => {
  return (
    <header>
      <nav className="menu">
        <div className="hamburger">
          <span></span>
          <span className="long"></span>
          <span></span>
        </div>

        <div className="menu__wrapper">
          <div className="menu__logo">
            <img src="icons/circle/Logo.webp" alt="Logo" />
          </div>
          <ul className="menu__links">
            <div className="menu__close">
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183717 1.30861 -0.183717 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183717 26.55 -0.183717 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" />
              </svg>
            </div>
            <li className="menu__item">
              <a href="#advantages" className="menu__link">
                Преимущества
              </a>
            </li>
            <li className="menu__item">
              <a href="#works" className="menu__link">
                Наша работа
              </a>
            </li>
            <li className="menu__item">
              <a href="#price" className="menu__link">
                Цены
              </a>
            </li>
            <li className="menu__item">
              <a href="#scheme" className="menu__link">
                Схема работы
              </a>
            </li>
            <li className="menu__item">
              <a href="#reviews" className="menu__link">
                Отзывы
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Контакты
              </a>
            </li>
          </ul>
          <div className="menu__call">
            <div className="menu__header">Есть вопросы?</div>
            <div className="menu__number">+7 (926) 423 01 00</div>
            <div className="menu__btn">
              <button className="btn">Перезвонить мне</button>
            </div>
          </div>
          <div className="menu__overlay"></div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
