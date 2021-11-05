// Next.js
import Link from 'next/link';
// MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemText from '@material-ui/core/ListItemText';
// styles
import s from './Nav.module.scss';

export default function Nav() {
    return (
        <nav className="nav">
            <List style={{ display: 'flex', flexWrap: 'wrap' }}>
                <ListItem disablePadding style={{ width: 'auto' }}>
                    <Link href="/" passHref>
                        <ListItemButton>
                            <ListItemText align="center" className={s['nav__item']}>Главная</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding style={{ width: 'auto' }}>
                    <Link href="/todo" passHref>
                        <ListItemButton>
                            <ListItemText align="center" className={s['nav__item']}>Задачник</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding style={{ width: 'auto' }}>
                    <Link href="/games" passHref>
                        <ListItemButton>
                            <ListItemText align="center" className={s['nav__item']}>Игрули</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding style={{ width: 'auto' }}>
                    <Link href="/programs" passHref>
                        <ListItemButton>
                            <ListItemText align="center" className={s['nav__item']}>Программы</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>
        </nav>
    )
}