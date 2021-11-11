import { Navbar, Nav, Container } from 'react-bootstrap';
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function NavTest() {
    const { asPath } = useRouter()
    return (
        <Navbar collapseOnSelect fixed="" expand="sm" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Link href="/" passHref>
                            <Nav.Link active={asPath === '/'} >Главная</Nav.Link>
                        </Link>
                        <Link href="/todo" passHref>
                            <Nav.Link active={asPath === '/todo'}>Задачник</Nav.Link>
                        </Link>
                        <Link href="/games" passHref>
                            <Nav.Link active={asPath === '/games'}>Игрули</Nav.Link>
                        </Link>
                        <Link href="/programs" passHref>
                            <Nav.Link active={asPath === '/programs'}>Проги</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}