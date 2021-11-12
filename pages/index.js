import Head from 'next/head';
// components
import CardsSection from '../components/main-page/CardsSection';
// bootstrap
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta
          name="Личный сайт"
          content="Собрал всякое новое, интересное (не очень)"
        />
      </Head>
      <Container className="mt-5 mb-5">
        <Row>
          <Col>
            <h1 className="mb-3 fz-30">HELLO</h1>
            <p>Меня зовут Харченко Сергей.<br />
              Я Frontend-разработчик.</p>
            <hr />
            <p>Это учебный мини-сайт на Next.js.<br />
              На нём я изучаю Next.js и выкладываю свои творческие React приложения.</p>
            <hr />
            <p>Ещё еcть проекты на Vanilla js тут:<br />
              <a href="https://codepen.io/sergdevguy/pens/public?grid_type=list">Codepen</a> <br />
              и тут:<br />
              <a href="https://jsfiddle.net/user/sergdevguy/fiddles">jsfiddle</a>
            </p>
          </Col>
        </Row>
      </Container>
      <CardsSection />
    </>
  )
}