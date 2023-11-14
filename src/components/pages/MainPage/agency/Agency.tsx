import { Container } from "react-bootstrap";

const Agency = () => {
  return (
    <section className="agency">
      <Container>
        <div className="agency__wrapper">
          <div className="agency__circle">
            <img src="icons/circle/agency_circle.svg" alt="agency_circle" />
          </div>
          <div className="title title_white">Агент в Китае</div>
          <div className="subtitle subtitle_white">
            Русскоговорящие представители компании без труда найдут именно тот товар, который будет
            отвечать Вашим запросам как по качеству, так и по цене.
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Agency;
