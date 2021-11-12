import Image from 'next/image';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import s from './Index.module.scss';

export default function MainCard({ imgSrc, title, text, link }) {
    return (
        <Card style={{ width: '18rem' }} className="m-auto mb-4 mt-4">
            <Image
                src={imgSrc}
                alt="Card picture"
                className={s['main__cards-img']}
            />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Link href={link} passHref>
                    <Button variant="dark">Перейти</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}