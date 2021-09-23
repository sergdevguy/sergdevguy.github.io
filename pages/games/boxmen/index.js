import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout'

import App from '../../../components/games/boxmen/App'

export default function GamesPage() {
    return (
        <Layout>
            <Head>
                <title>Boxmen</title>
            </Head>
            <App />
        </Layout>
    )
}