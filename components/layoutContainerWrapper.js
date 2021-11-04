// MUI
import Container from '@material-ui/core/Container';

export default function Layout({ children }) {
    return (
        <Container maxWidth="false" disableGutters={true}>
            <Container sx={{paddingTop: "60px", paddingBottom: "60px"}}>
                {children}
            </Container>
        </Container>
    )
}