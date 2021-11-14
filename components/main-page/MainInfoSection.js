import Image from 'next/image';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import imgPerson from './assets/person.png';
import { BsGithub } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';

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
                        тут: <a className="link-info" href="https://codepen.io/sergdevguy/pens/public?grid_type=list" target="_blank">Codepen</a>,
                        &nbsp;и&nbsp;тут: <a className="link-info" href="https://jsfiddle.net/user/sergdevguy/fiddles" target="_blank">JSFiddle</a>
                    </p>
                    <hr />
                    <ListGroup horizontal>
                        <a href="tg://resolve?domain=sergdevguy" target="_blank" className="h2">
                            <ListGroup.Item className="p-2 border-0 d-flex align-items-start">
                                <BsTelegram className="text-info" />
                            </ListGroup.Item>
                        </a>
                        <a href="https://github.com/sergdevguy" target="_blank" className="h2">
                            <ListGroup.Item className="p-2 border-0 d-flex align-items-start">
                                <BsGithub className="text-info" />
                            </ListGroup.Item>
                        </a>
                    </ListGroup>
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