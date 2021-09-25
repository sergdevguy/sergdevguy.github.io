// Next.js
import Link from 'next/link';
// MUI
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemButton from '@material-ui/core/ListItemButton';
import ListItemText from '@material-ui/core/ListItemText';

export default function Nav() {
    return (
        <nav>
            <List style={{ display: 'flex' }}>
                <ListItem disablePadding style={{ width: 'auto' }}>
                    <Link href="/" passHref>
                        <ListItemButton>
                            <ListItemText align="center">Главная</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding style={{ width: 'auto' }}>
                    <Link href="/todo" passHref>
                        <ListItemButton>
                            <ListItemText align="center">Задачник</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
                <ListItem disablePadding style={{ width: 'auto' }}>
                    <Link href="/games" passHref>
                        <ListItemButton>
                            <ListItemText align="center">Игрули</ListItemText>
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>
        </nav>
    )
}