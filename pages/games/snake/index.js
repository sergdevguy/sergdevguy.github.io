import Head from 'next/head';
import App from '../../../components/games/snake/App';

export default function GamesPage() {
    return (
        <>
            <Head>
                <title>Змейка</title>
            </Head>
            <App />
        </>
    )
}