import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Menu = (): JSX.Element => {
  return (
    <header>
      <Navbar expand="lg" data-bs-theme="dark" className="menu">
        <Container>
          <Navbar.Brand href="#home">
            <img src="icons/glopt.svg" alt="Logo delivery" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="menu__wrapper">
            <Nav>
              <ul className="menu__links">
                <li className="menu__item">
                  <Nav.Link className="menu__link" href="#home">
                    Преимущества
                  </Nav.Link>
                </li>
                <li className="menu__item">
                  <Nav.Link className="menu__link" href="#link">
                    Наша работа
                  </Nav.Link>
                </li>
                <li className="menu__item">
                  <Nav.Link className="menu__link" href="#link">
                    Схема работы
                  </Nav.Link>
                </li>
                <li className="menu__item">
                  <Nav.Link className="menu__link" href="#link">
                    Отзывы
                  </Nav.Link>
                </li>
                <li className="menu__item">
                  <Nav.Link className="menu__link" href="#link">
                    Контакты
                  </Nav.Link>
                </li>
              </ul>
            </Nav>
            <div className="menu__call">
              <div className="menu__call-header">
                <div className="menu__call-title">Есть вопросы?</div>
                <div className="menu__call-number">+7 (926) 423 01 00</div>
              </div>
              <Button variant="primary">Перезвонить мне</Button>{" "}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Menu;
