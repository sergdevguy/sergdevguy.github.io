// components
import MainCard from './MainCard';
// bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// imgs
import imgTodo from './assets/todo.png';
import imgGames from './assets/games.png';
import imgPrograms from './assets/programs.png';

export default function CardsSection() {
    return (
        <Container fluid className="bg-dark">
            <Container className="pt-5 pb-5">
                <Row>
                    <Col md={6} lg={4}>
                        <MainCard
                            imgSrc={imgTodo}
                            title="Задачник"
                            text="Первый полноценный проект на React, вынес отдельно"
                            link="/todo"
                        />
                    </Col>
                    <Col md={6} lg={4}>
                        <MainCard
                            imgSrc={imgGames}
                            title="Игры"
                            text="'Игры с DOM'. Изучаю React и сочиняю алгоритмы, без гугления"
                            link="/games"
                        />
                    </Col>
                    <Col md={6} lg={4}>
                        <MainCard
                            imgSrc={imgPrograms}
                            title="Программы"
                            text="Здесь всякое учебное по разным моментам frontend`а"
                            link="/programs"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}