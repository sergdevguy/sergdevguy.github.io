import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import imgPerson from './assets/person.png';

export default function MainInfoSection() {
    return (
        <Container className="mt-5 mb-5">
            <Row className="d-flex justify-content-between">
                <Col md={6}>
                    <p className="mb-3 fz-30 h1 text-info">HELLO</p>
                    <p>Меня зовут <span className="text-info fw-bold">Харченко Сергей</span>.<br />
                        Я <span className="text-info fw-bold">Frontend-разработчик с опытом</span>.<br />
                        А это сайт на Next.js.</p>
                    <hr />
                    <p>Зачем я сделал этот сайт:</p>
                    <ul>
                        <li>Попробовать Next.js</li>
                        <li>Показать Вам, что я умею в React</li>
                        <li>Самому следить за достижениями изучения React</li>
                        <li>Мне это интересно</li>
                    </ul>
                    <hr />
                    <p>Ещё еcть проекты на Vanilla js<br />
                        тут: <a className="link-info" href="https://codepen.io/sergdevguy/pens/public?grid_type=list">Codepen</a>,
                        &nbsp;и&nbsp;тут: <a className="link-info" href="https://jsfiddle.net/user/sergdevguy/fiddles">JSFiddle</a>
                    </p>
                </Col>
                <Col md={5} className="d-none d-md-block">
                    <Image
                        src={imgPerson}
                        alt="Author img"
                        className="img-fluid"
                    />
                </Col>
            </Row>
        </Container>
    )
}