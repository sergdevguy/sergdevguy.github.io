import Head from 'next/head';
import Link from 'next/link';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

export default function LayoutPageList({ headTitle, links }) {
    return (
        <>
            <Head>
                <title>{headTitle}</title>
            </Head>
            <Container>
                <Row>
                    <Col md={6} className="mt-5 mb-5">
                        <ListGroup>
                            {links.map((i, index) => (
                                <ListGroup.Item key={index}>
                                    <Link href={i.link} passHref>
                                        <a className="link-dark">{i.name}</a>
                                    </Link>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>
    )
}