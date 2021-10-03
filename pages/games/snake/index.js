import Head from 'next/head'
import Layout from '../../../components/layout'

import App from '../../../components/games/snake/App'

export default function GamesPage() {
    return (
        <Layout>
            <Head>
                <title>Змейка</title>
            </Head>
            <App />
        </Layout>
    )
}