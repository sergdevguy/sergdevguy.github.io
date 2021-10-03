import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function GamesPage() {
    return (
        <Layout>
            <Head>
                <title>Игрули</title>
            </Head>
            <div>
                <Link href="/games/boxmen">
                    <a>Boxmen</a>
                </Link>
            </div>
            <div>
                <Link href="/games/snake">
                    <a>Змейка</a>
                </Link>
            </div>
        </Layout>
    )
}