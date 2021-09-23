import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function GamesPage() {
    return (
        <Layout>
            <Head>
                <title>Игрули</title>
            </Head>
            <h1>Игрули</h1>
            <div>
                <Link href="/games/game1/game1">
                    <a>Мемори</a>
                </Link>
            </div>
            <div>
                <Link href="/games/boxmen">
                    <a>Boxmen</a>
                </Link>
            </div>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}