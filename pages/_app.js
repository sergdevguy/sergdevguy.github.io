import Nav from '../components/nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'; // this styles for todo app, move and remove late

export default function App({ Component, pageProps }) {
    return (
        <>
            <Nav />
            <Component {...pageProps} />
        </>
    )
}